import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./pages/ProductList.vue";
import ProductPage from "./pages/ProductPage.vue";
import Home from "./pages/Home.vue";
import Cart from "./pages/Cart.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import "../index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/cart", component: Cart },
    { path: "/products", component: ProductList },
    { path: "/products/:id", component: ProductPage },
    { path: "/checkout", component: CheckoutPage },
  ],
});
export default router;
