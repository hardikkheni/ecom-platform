<template>
    <div class="shadow-xxl rounded-lg bg-white max-w-[90%] sm:max-w-[80%] lg:max-w-[50%] 2xl:max-w-[30%] mx-auto my-20">
        <h6 class="py-3 px-4 border-b font-semibold text-xl">Your Cart</h6>
        <template v-if="computedInfo.list.length > 0">
            <div class="px-4 py-6">
                <div class="flex items-center justify-between mb-2 bg-gray-200 py-2">
                    <h5 class="text-sm font-medium">Item</h5>
                    <div class="flex items-center">
                        <h6 class="text-sm font-medium w-[80px]">Price</h6>
                        <h6 class="text-sm font-medium w-[80px] text-center">Quantity</h6>
                    </div>
                </div>
                <div v-for="(item, i) of computedInfo.list" :key="i" class="flex items-center justify-between mb-2">
                    <h5 class="text-sm text-gray-500 font-medium">{{  item.name  }}</h5>
                    <div class="flex items-center">
                        <h6 class="text-sm text-gray-500 font-medium w-[80px]">${{ item.price }}</h6>
                        <h6 class="text-sm text-gray-500 font-medium w-[80px] text-center">{{ item.qty }}</h6>
                    </div>
                </div>
                <div class="flex items-center justify-between py-2 border-y py-3">
                    <h5 class="text-sm font-medium">Total</h5>
                    <div class="flex items-center">
                        <h6 class="text-sm font-medium w-[80px]">${{ computedInfo.total.toFixed(2) }}</h6>
                        <h6 class="text-sm font-medium w-[80px] text-center">{{ computedInfo.list.length }}</h6>
                    </div>
                </div>
            </div>
            <div class="py-6 px-4 text-right">
                <router-link v-if="route.path !== '/checkout'" to="/checkout"
                    class="bg-green-600 text-white font-semibold rounded-md p-3">Checkout</router-link>
            </div>
        </template>
        <div v-else class="text-md text-slate-600 p-4">
            Cart is empty!.
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store'
import { useRoute } from 'vue-router';
const store = useCartStore()
const { computedInfo } = storeToRefs(store)
const route = useRoute()
</script>