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
	<div class="wrapper">
		<!-- Контент -->
		<div class="header">
			<div class="container">
				<div class="header__body">
					<a href="#" class="header__logo">
						<img src="../../assets/chocolate.svg" alt="" />
						<p>SIMPLY CHOCOLATE</p>
					</a>
					<div
						class="header__burger"
						@click="toggleMenu"
						:class="{ active: burgerActive }"
					>
						<samp></samp>
					</div>
					<nav class="header__menu" :class="{ active: menuActive }">
						<ul class="header__list">
							<li>
								<a href="#" class="header__link">Home</a>
							</li>
							<li>
								<a href="#" class="header__link">How it’s made?</a>
							</li>
							<li>
								<a href="#" class="header__link">Our products</a>
							</li>
							<li>
								<a href="#" class="header__link">Top sellers</a>
							</li>
							<li>
								<a href="#" class="header__link">Chocolate is loved</a>
							</li>
							<li>
								<a href="/instagram" class="main_img_instagram">
									<img
										class="main_instagram"
										src="../../components/imgs/instagram.svg"
										alt=""
									/>
								</a>
							</li>
							<li>
								<a href="/twitter" class="main_img_twitter">
									<img
										class="main_twitter"
										src="../../components/imgs/twitter.svg"
										alt=""
									/>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="content__text">
				<div class="main_img _img">
					<img
						class="main_picture"
						src="../../components/imgs/chocolate-covered-cocoa-powder 1.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="description">
		<div class="text_description">
			<p class="text">
				Treat yourself or a loved one to our finest ingredients for a moment of
				pure delight!
			</p>
		</div>
	</div>

	<div class="description_link">
		<div class="description_link-1">
			<a class="link_1" href="#">Buy now</a>
		</div>
		<div class="description_link-2">
			<a class="link_2" href="#">How it’s made</a>
		</div>
	</div>

	<div class="description_img">
		<p class="description_p">scroll down</p>
		<button @click="scrollToBottom" class="description_button">
			<img
				class="description_svg"
				src="../../components/imgs/fi-rr-angle-small-left.svg"
				alt=""
			/>
		</button>
	</div>
</template>

<style scoped></style>
