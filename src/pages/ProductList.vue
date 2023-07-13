
<template>
  <div class="max-w-[95%] lg:max-w-[90%] 2xl:max-w-[80%] mx-auto my-10">
    <h1 class="font-bold text-xl mb-5">My Products</h1>
    <div class="flex items-center justify-between gap-4">
      <input v-model="term" placeholder="Search input"
        class="border rounded-md text-sm py-2 px-3 w-9/12 focus:outline-none" />
      <div class="flex items-center">
        <button @click="search" class="bg-sky-500 text-white py-2 px-3 rounded-md font-semibold">Search</button>
        <button @click="clear" class="bg-gray-100 py-2 px-3 text-zinc-500 rounded-md font-semibold ml-3">Clear</button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-8 my-8">
      <div v-for="(product, i) of filteredProducts" :key="i">
        <router-link :to="{ path: `/products/${product.id}` }">
          <div class="rounded-md shadow-xxl p-1 min-h-[402px]">
            <div class="bg-gray-200 h-[250px] hover:scale-[1.02] duration-300"></div>
            <div class="p-3">
              <div class="flex items-center justify-between">
                <h6 class="capitalize font-semibold text-md text-slate-600">{{ product.name }}</h6>
                <h6 class="text-emerald-500 font-semibold">${{ product.details.price }}</h6>
              </div>
              <p class="font-medium text-md text-slate-500">{{ product.details.company }}</p>
              <p class="text-sm text-slate-600 mt-3 overflow-hidden text-ellipsis line-clamp-3">{{
                product.details.description }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '../store'

const store = useProductStore()
const term = ref(null)
const { searchHandler } = store
const { filteredProducts } = storeToRefs(store)

function search() {
  searchHandler(term.value)
}
function clear() {
  term.value = null
  searchHandler(null)
}
</script>