<template>
    <div class="v-cart">
        <router-link :to="{name: 'Catalog'}">
            <div class="link-to-catalog">Back to catalog</div>
        </router-link>
        <h2>Cart</h2>
        <h3 v-if='!cart_data.length'>There are no product in cart...</h3>
        <div class="v-cart-wrapp">
        <v-cart-item 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data='item'
            @deleteFromCart='deleteFromCart(index)'
            @decrement="decrementItem(index)"
            @increment="incrementItem(index)"
        />
        </div>
        <div class="v-cart-total" >
            <p class="v-cart-total-title">Total:</p>
            <p class="v-cart-total-sum">{{cartTotalCost}}</p>
        </div>
    </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

    export default {
        name: "v-cart",
        components: {
            vCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        computed: {
            cartTotalCost() {
                let result = []

                if (this.cart_data.length) {
                    for (let item of this.cart_data){
                        result.push(item.price * item.quantity);
                    }

                    result = result.reduce(function (sum, el) {
                        return sum + el;
                    });
                } else {
                    result = 0;
                }

                return result;
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'DECREMENT_CART_ITEM',
                'INCREMENT_CART_ITEM'
            ]),
            decrementItem(index) {
                this.DECREMENT_CART_ITEM(index)
            },
            incrementItem(index) {
                this.INCREMENT_CART_ITEM(index)
            },
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style lang="scss">
    h2 {
        font-size: 35px;
    }
    .link-to-catalog {
        position: absolute;
        top: 50px;
        right: 15px;
        color: #fff;
        background: #fcd946;
        color: black;
        border: none;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        cursor: pointer;
        padding: 12px;
    }
    .v-cart-wrapp{

    }
    .v-cart-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        border: .2px solid #e5e5e5;
        margin: 15px 0;
        & img {
            height: 150px;
        }
        & button {
            background: #eb5757;
            color: black;
            border: none;
            border-radius: 4px;
            -webkit-border-radius: 4px;
            cursor: pointer;
            padding: 12px 30px;
            font-size: 20px;
        }
    }
    .v-cart-total{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #016a01;
        display: flex;
        justify-content: center;
        color: #e5e5e5;
        font-size: 30px;
        &-title{
            margin-right: 15px;
        }
    }
</style>