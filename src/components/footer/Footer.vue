<script>
import '../footer/footer.css'
</script>

<template>
	<footer class="footer container-1">
		<div class="footer__inner">
			<div class="footer__navigation">
				<a class="footer__logo logo" href="/">
					<h3>Chocolate a delicious cure for a bad day</h3>
				</a>
				<nav class="footer__menu">
					<ul class="footer__menu-list">
						<li class="footer__menu-item">
							<a class="footer__menu-link" href="#Home">Home</a>
						</li>
						<li class="footer__menu-item">
							<a class="footer__menu-link" href="#How it’s made?"
								>How it’s made?</a
							>
						</li>
						<li class="footer__menu-item">
							<a class="footer__menu-link" href="#Our products">Our products</a>
						</li>
						<li class="footer__menu-item">
							<a class="footer__menu-link" href="#Top sellers">Top sellers</a>
						</li>
						<li class="footer__menu-item">
							<a class="footer__menu-link" href="#Chocolate is loved"
								>Chocolate is loved</a
							>
						</li>
					</ul>
				</nav>
				<div class="footer__soc1als soc1als">
					<ul class="soc1als__list">
						<li class="soc1als__item">
							<a class="soc1als__link" href="/">
								<span class="visually-hidden">instagram</span>
								<img src="../imgs/instagram.svg" alt="" />
							</a>
						</li>
						<li class="soc1als__item">
							<a class="soc1als__link" href="/">
								<span class="visually-hidden">Twitter</span>
								<img src="../imgs/twitter.svg" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer__body">
				<div class="footer__contacts">
					<h2 class="footer__contacts-title h4 puddle-bg">Contact us</h2>
					<address class="footer__contacts-body">
						<p>
							<a class="footer__contacts-phone" href="tel:+380 (68) 443-94-26"
								>+380 (68) 443-94-26</a
							>
						</p>
						<p>
							<a
								class="footer__contacts-mail"
								href="mailto:simplychoc@gmail.com"
								>simplychoc@gmail.com</a
							>
						</p>
					</address>
				</div>
			</div>
		</div>
	</footer>

	<dialog class="mobile-overlay visible-mobile" id="mobileOverlay">
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
</template>

<style></style>
