<template>
    <div class="v-cart-item">
        <img :src="require('../assets/images/' + cart_item_data.image)"
             :alt="cart_item_data.article">
        <h2>{{cart_item_data.name}}</h2>
        <div>Price: {{cart_item_data.price}}₽</div>
        <div>Quantity: {{cart_item_data.quantity}}</div>
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
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    }
}
</script>

<style scoped>

</style>