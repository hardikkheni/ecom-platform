<template>
	<div class="grid grid-cols-1 md:grid-cols-2 max-w-[80%] mx-auto my-10 md:my-20">
		<div class="flex flex-col justify-center items-start order-2 md:order-1">
			<h6 class="uppercase font-semibold text-sky-600 tracking-widest">Welcome</h6>
			<h5 class="text-4xl font-semibold text-slate-800 my-8 leading-[44px]">Looking for <br/> the best price</h5>
			<router-link to="/products" class="bg-sky-500 text-white py-2 px-3 rounded-sm font-medium">Purchase a product</router-link>
		</div>
		<div class="mb-10 md:mb-0 order-1 md:order-2">
			<img src="../assets/welcome.png" alt="welcome" class="rounded-md mx-auto" width="500" height="500" />
		</div>
	</div>
</template>