<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="catalog-wrapp">
            <v-catalog-item
                v-for="product in PRODUCTS" :key="product.article"
                :product_data="product"
                @articleFromChild="showChildArticle"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            showChildArticle(data) {
                console.log(data);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if(response.data) {
                    console.log('data arrived');
                }
            })
        }
    }
</script>

<style lang="scss">
    .catalog-wrapp{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>