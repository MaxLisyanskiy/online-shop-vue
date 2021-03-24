<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="catalog-wrapp">
            <v-catalog-item
                v-for="product in products" :key="product.article"
                :product_data="product"
                @articleFromChild="showChildArticle"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        data() {
            return {
                products: [
                    {
                        image: "1.jpg",
                        name: "T-shirt 1",
                        price: 2100.234234234,
                        article: "T1",
                        available: true,
                        category: "Мужские"
                    },
                    {
                        image: "2.jpg",
                        name: "T-shirt 2",
                        price: 3150.12312412,
                        article: "T2",
                        available: true,
                        category: "Женские"
                    },
                    {
                        image: "3.jpg",
                        name: "T-shirt 3",
                        price: 4200.51524,
                        article: "T3",
                        available: false,
                        category: "Женские"
                    }
                ]
            }
        },
        methods: {
            showChildArticle(data) {
                console.log(data);
            }
        }
    }
</script>

<style lang="scss">
    .catalog-wrapp{
        display: flex;
        justify-content: space-between;
    }
</style>