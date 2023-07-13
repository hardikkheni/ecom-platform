<template>
  <div class="max-w-[95%] lg:max-w-[90%] 2xl:max-w-[80%] mx-auto my-10">
    <h1 class="font-bold text-xl mb-5">Checkout page</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      <div>
        <template v-if="computedInfo.list.length > 0">
          <div v-for="(item, i) of computedInfo.list" :key="i" class="bg-slate-100 p-6 lg:p-10 rounded-md shadow-md mb-5">
            <h5 class="capitalize font-medium text-2xl text-slate-600">{{ item.name }}</h5>
            <div class="text-emerald-500 font-semibold my-2">${{ item.price }}</div>
            <span class="font-medium text-md text-slate-500">{{ item.details.company }}</span>
            <div class="flex flex-wrap items-center justify-between mb-5">
              <div class="flex items-center my-5">
                <button @click="removeQty(item.id)" class="text-2xl w-[70px] text-center py-2">-</button>
                <input readonly :value="item.qty" class="w-[70px] text-center py-3" />
                <button @click="addItem(item)" class="text-2xl w-[70px] text-center py-2">+</button>
              </div>
              <button @click="removeItem(item.id)"
                class="bg-red-500 text-white py-2 px-3 rounded-md font-semibold">Delete</button>
            </div>
            <div class="flex items-center justify-between mb-1">
              <h5 class="text-sm text-gray-500 font-medium">Each:</h5>
              <h6 class="text-sm font-medium">${{ item.price }}</h6>
            </div>
            <div class="flex items-center justify-between mb-1">
              <h5 class="text-sm text-gray-500 font-medium">Subtotal:</h5>
              <h6 class="text-sm font-medium">${{ item.subtotal }}</h6>
            </div>
            <div class="flex items-center justify-between mb-1">
              <h5 class="text-sm text-gray-500 font-medium">Total:</h5>
              <h6 class="text-sm font-medium">${{ computedInfo.total }}</h6>
            </div>
          </div>
        </template>
        <div v-else>
          <p class="text-md text-slate-600">Cart is empty</p>
        </div>
        <br />
        <router-link to="/products" class="bg-sky-500 text-white py-2.5 px-3 rounded-md font-semibold mt-2">Back to products</router-link>
      </div>
      <div class="mt-5 md:mt-0">
        <h2 class="capitalize font-semibold text-md text-slate-600 mb-5">Checkout info </h2>
        <div>
          <input placeholder="Full name"
            class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <input placeholder="Email" class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <input placeholder="Card number"
            class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <input placeholder="CVV" class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <input placeholder="exp month/year"
            class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <input placeholder="country" class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <input placeholder="pincode" class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none mb-2 w-full" /><br />
          <button class="bg-sky-500 text-white py-2 px-3 rounded-md font-semibold mt-10">Purchase</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store'
const store = useCartStore()
const { removeItem, removeQty, addItem } = store
const { computedInfo } = storeToRefs(store)
</script>