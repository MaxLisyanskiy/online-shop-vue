<template>
    <div class="v-catalog-item">
        <img :src="require('../assets/images/' + product_data.image)"
             :alt="product_data.article">
        <h2>{{product_data.name}}</h2>
        <div>Price: {{product_data.price}}₽</div>
        <button @click="addToParent(product_data.article)">Add to cart</button>
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
            addToParent(data) {
                this.$emit('articleFromChild', data)
            }
        }
    }
</script>

<style lang="scss">
    .v-catalog-item{
        width: 33%;
    }
</style>