<template>
    <div class="v-catalog-item">
        <img :src="require('../assets/images/' + product_data.image)"
             :alt="product_data.article">
        <h2>{{product_data.name}}</h2>
        <div class="v-catalog-item-price">{{product_data.price}}₽</div>
        <button @click="addToCart">Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "v-catalog-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product_data)
            }
        }
    }
</script>

<style lang="scss">
    .v-catalog-item{
        margin: 10px;
        border: 1px solid #d0cfcf;
        padding: 35px;
        & button {
            margin-top: 20px;
            padding-top: 3px;
            height: 40px;
            width: 100%;
            color: #000;
            background: #fcd946;
            border: none;
            border-radius: 4px;
            -webkit-border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }
        &-price {
            font-size: 20px;
            font-weight: 700;
        }
    }
</style>