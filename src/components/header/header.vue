<script>
// import { RouterView } from "vue-router";
import '../header/header.css'
// import "../header/header";

export default {
	data() {
		return {
			burgerActive: false,
			menuActive: false,
		}
	},
	methods: {
		toggleMenu() {
			this.burgerActive = !this.burgerActive
			this.menuActive = !this.menuActive
			document.body.classList.toggle('lock')
		},
	},
}
</script>

<template>
	<header class="header">
		<a class="header-logo" href="/">
			<img
				class="header-logo-image"
				src="../imgs/iconChocolate-1.svg"
				alt="Kropp Logo"
				width="135"
				height="25"
				loading="lazy"
			/>
		</a>
		<nav class="header-menu hidden-menu" :class="{ active: menuActive }">
			<ul class="header-menu-list">
				<li class="header-menu-item">
					<a class="header-menu-link is-current" href="/">Home</a>
				</li>
				<li class="header-menu-item">
					<a class="header-menu-link" href="/">How it’s made?</a>
				</li>
				<li class="header-menu-item">
					<a class="header-menu-link" href="/">Our products</a>
				</li>
				<li class="header-menu-item">
					<a class="header-menu-link" href="/">Top sellers</a>
				</li>
				<li class="header-menu-item">
					<a class="header-menu-link" href="/">Chocolate is loved</a>
				</li>
			</ul>
		</nav>
		<div class="header-actions">
			<button
				class="header-burger-button"
				@click="toggleMenu"
				:class="{ active: burgerActive }"
				onclick="toggleMenu.showModal()"
				type="button"
				title="Open menu"
			>
				<span class="visually-hidden">Open menu</span>
				<span class="header-burger-button-line"></span>
				<span class="header-burger-button-line"></span>
				<span class="header-burger-button-line"></span>
			</button>
		</div>

		<dialog class="mobile-overlay visible-mobile" id="toggleMenu">
			<form class="mobile-overlay__close-button-wrapper" method="dialog">
				<button class="mobile-overlay__close-button cross-button" type="submit">
					<span class="visually-hidden">Close navigation menu</span>
				</button>
			</form>
			<div class="mobile-overlay__body">
				<ul class="mobile-overlay__list">
					<li class="mobile-overlay__item">
						<a class="mobile-overlay__link" href="/">About us</a>
					</li>
					<li class="mobile-overlay__item">
						<a class="mobile-overlay__link" href="/">Services</a>
					</li>
					<li class="mobile-overlay__item">
						<a class="mobile-overlay__link" href="/">Use Cases</a>
					</li>
					<li class="mobile-overlay__item">
						<a class="mobile-overlay__link" href="/">Pricing</a>
					</li>
					<li class="mobile-overlay__item">
						<a class="mobile-overlay__link" href="/">Blog</a>
					</li>
				</ul>
			</div>
		</dialog>
	</header>
</template>

<style scoped></style>
