<script>
import '../TopSellers/TopSellers.css'
</script>

<template>
	<section class="section__TopSellers container__TopSellers">
		<header class="section__header__TopSellers">
			<h2 class="section__title__TopSellers puddle-bg__TopSellers">
				tOp Sellers
			</h2>
			<div class="section__description__TopSellers">
				<p></p>
			</div>
		</header>
		<div class="section__body__TopSellers">
			<div class="reviews__TopSellers">
				<ul class="services__list__TopSellers grid grid--2">
					<li class="services__item__TopSellers">
						<article class="service-card__TopSellers">
							<div class="service-card__body__TopSellers">
								<a class="service-card__link__TopSellers" href="/">
									<span class="service-card__link-icon-wrapper__TopSellers">
										<img src="../imgs/topSellersImg1.png" alt="" />
									</span>
								</a>
							</div>
						</article>
					</li>
					<li class="services__item__TopSellers">
						<article
							class="service-card__TopSellers service-card--accent-bg__TopSellers"
						>
							<div class="service-card__body__TopSellers">
								<a class="service-card__link__TopSellers" href="/">
									<span class="service-card__link-icon-wrapper__TopSellers">
										<img src="../imgs/topSellersImg2.png" alt="" />
									</span>
								</a>
							</div>
						</article>
					</li>
					<li class="services__item__TopSellers">
						<article
							class="service-card__TopSellers service-card--dark-bg__TopSellers"
						>
							<div class="service-card__body__TopSellers">
								<a
									class="service-card__link__TopSellers service-card__link--light__TopSellers"
									href="/"
								>
									<span class="service-card__link-icon-wrapper__TopSellers">
										<img src="../imgs/topSellersImg3.png" alt="" />
									</span>
								</a>
							</div>
						</article>
					</li>
				</ul>

				<div class="reviews__actions__TopSellers">
					<div class="reviews__pagination__TopSellers pagination__TopSellers">
						<ul class="pagination__list__TopSellers">
							<li class="pagination__item__TopSellers">
								<div
									class="pagination__button__TopSellers is-current__TopSellers"
									type="button"
								>
									<span class="visually-hidden">First slide</span>
									<p>
										Crazy enough chocolate originates from a bean just like the
										coffee bean called Cacao. Cacao has been around for
										thousands of years and was first discovered by the Native
										American tribe called the Mayans.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<button class="reviews__arrow-button__TopSellers" type="button">
						<span class="visually-hidden">Next slide</span>
						<div>Buy now</div>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
