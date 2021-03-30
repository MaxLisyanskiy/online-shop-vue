<template>
    <div class="v-cart-item">
        <img :src="require('../../assets/images/' + cart_item_data.image)"
             :alt="cart_item_data.article">
        <h2>{{cart_item_data.name}}</h2>
        <div class="v-cart-item-price">{{cart_item_data.price}}₽</div>
        <div class="v-cart-item-qnt">
            <input
                    class="v-cart-item-qnt-min"
                    type="button"
                    value="−"
                    @click="decrementItem"
            >
            <span class="v-cart-item-qnt-total">{{cart_item_data.quantity}}</span>
            <input
                    class="v-cart-item-qnt-plus"
                    type="button"
                    value="+"
                    @click="incrementItem"
            >
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>

export default {

    name: 'v-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang="scss">
    .v-cart-item-qnt{
        font-size: 20px;
        font-weight: 700;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border: 1px solid #eae7f2;
        border-radius: 6px;
        padding: 10px 10px;
        &-total{
            margin: 0 15px;
        }
        &-min,&-plus{
            border-color: transparent;
            background: transparent;
            font-size: 29px;
            cursor: pointer;
            color: blue;
        }
    }
    .v-cart-item-price{
        font-size: 20px;
        font-weight: 700;
    }
</style>