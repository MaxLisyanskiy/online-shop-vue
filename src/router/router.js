import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'


Vue.use(Router) 

let router = new Router ({
    routes: [
        {
            path: '/',
            name: 'Catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'Cart',
            component: vCart,
            props: true
        }
    ]
});

export default router;