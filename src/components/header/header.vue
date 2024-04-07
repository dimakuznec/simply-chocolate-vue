<script>
import '../header/header.css'

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
			if (this.menuActive) {
				document.body.classList.add('lock')
			} else {
				document.body.classList.remove('lock')
			}
		},
	},
}
</script>

<template>
	<div class="wrapper">
		<header class="header">
			<div class="container">
				<div class="header__body">
					<a href="#" class="header__logo">
						<img
							src="../imgs/iconChocolate-1.svg"
							alt="Kropp Logo"
							width="135"
							height="25"
							loading="lazy"
						/>
					</a>
					<button
						class="header__burger"
						@click="toggleMenu"
						:class="{ active: burgerActive }"
						onclick="toggleMenu.showModal()"
						type="button"
						title="Open menu"
					>
						<span class="visually-hidden">Open menu</span>
						<span></span>
					</button>
					<nav class="header__menu" :class="{ active: menuActive }">
						<ul class="header__list">
							<li>
								<a href="#Home" class="header__link">Home</a>
							</li>
							<li>
								<a href="#How it’s made?" class="header__link"
									>How it’s made?</a
								>
							</li>
							<li>
								<a href="#Our products" class="header__link">Our products</a>
							</li>
							<li>
								<a href="#Top sellers" class="header__link">Top sellers</a>
							</li>
							<li>
								<a href="#Chocolate is loved" class="header__link"
									>Chocolate is loved</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	</div>
</template>

<style scoped></style>
