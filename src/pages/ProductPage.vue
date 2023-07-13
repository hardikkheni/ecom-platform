<template>
	<div v-if="product" class="my-10 max-w-[95%] lg:max-w-[90%] 2xl:max-w-[80%] mx-auto">
		<router-link to="/products"><i class="fa-sharp fa-solid fa-arrow-left"></i></router-link>
		<div class="grid grid-cols-1 md:grid-cols-3 md:mx-10 my-8 md:my-10">
			<div class="bg-gray-200 h-[250px] lg:h-[350px] w-full"></div>
			<div class="col-span-2 mt-5 md:mt-0">
				<div class="md:px-10">
					<h1 class="capitalize font-semibold text-2xl text-slate-600">{{ product.name }}</h1>
					<div class="text-emerald-500 font-semibold">${{ product.details.price }}</div>
					<p class="font-medium text-md text-slate-500">{{ product.details.company }}</p>
					<p class="text-sm text-slate-600 mt-3 overflow-hidden text-ellipsis line-clamp-3 lg:max-w-[70%]">{{
						product.details.description }}</p>
					<button @click="addItem({ ...product, price: product.details.price })"
						class="bg-sky-500 text-white py-2 px-3 rounded-md font-semibold mt-10">Add to cart</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore, useProductStore } from '../store';

const route = useRoute()
const router = useRouter()
const store = useProductStore()
const cartStore = useCartStore()

const { setProductId, } = store
const { products, product } = storeToRefs(store)
const { addItem } = cartStore
onMounted(() => {
	// TODO: add loader on api call
	const exists = products.value.find(p => p.id === route.params.id)
	if (!exists) {
		return router.push({
			path: '/products'
		})
	}
	setProductId(exists.id)
})

onUnmounted(() => {
	setProductId(null)
})
</script>