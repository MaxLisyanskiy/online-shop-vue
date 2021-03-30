<template>
    <div class="v-catalog">
        <router-link :to="{name: 'Cart', params: {cart_data: CART}}">
            <div class="link-to-cart">
                <span class="link-to-cart-span" v-if="CART.length">{{CART.length}}</span>
                <svg width="50" height="50" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H3L8 13H19L22 4H9" stroke="#EB5757" stroke-width="2"></path>
                    <circle cx="9.5" cy="17.5" r="1.5" fill="#EB5757"></circle>
                    <circle cx="17.5" cy="17.5" r="1.5" fill="#EB5757"></circle>
                </svg>
            </div>
        </router-link>
        <h1>Catalog</h1>
        <div class="catalog-wrapp">
            <v-catalog-item
                v-for="product in PRODUCTS" :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
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
                'PRODUCTS',
                'CART'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
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
    h2 {
        font-size: 35px;
    }
    .catalog-wrapp{
        display: flex;
        flex-wrap: wrap;
    }
    .link-to-cart{
        position: absolute;
        right: 25px;
        &-span {
            position: absolute;
            top: -6px;
            right: -9px;
            font-size: 25px;
            font-weight: 700;
            background: #00f;
            color: #fff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            text-align: center;
            vertical-align: middle;
        }
    }
</style>