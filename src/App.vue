<script setup>
import headerVue from './components/header/header.vue'
import informationVue from './components/information/information.vue'
import homeMain from './components/homeMain/homeMain.vue'
import chocolateRecipe from './components/chocolateRecipe/chocolateRecipe.vue'
import chocolateDemo from './components/chocolateDemo/chocolateDemo.vue'
import Products from './components/Products/Products.vue'
import TopSellers from './components/TopSellers/TopSellers.vue'
</script>

<template>
	<main>
		<headerVue />
		<homeMain />
		<informationVue />
		<chocolateRecipe />
		<chocolateDemo />
		<Products />
		<TopSellers />
	</main>
</template>

<style scoped></style>
