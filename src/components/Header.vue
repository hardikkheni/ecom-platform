<template>
  <div class="flex items-center justify-between bg-sky-500 text-white px-3 sm:px-6 py-3">
    <router-link to="/" class="font-bold text-xl">Shopping Cart</router-link>
    <div class="flex items-center">
      <router-link to="/products" class="font-semibold mx-3 md:mx-5">Products</router-link>
      <router-link to="/cart" class="mx-3 md:mx-5 relative">
        <i class="fa-solid fa-cart-shopping text-2xl"></i>
        <span
          class="absolute right-[-5px] top-0 w-3.5 h-3.5 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">{{
            computedInfo.list.length }}</span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store'
const store = useCartStore()
const { computedInfo } = storeToRefs(store)
</script>