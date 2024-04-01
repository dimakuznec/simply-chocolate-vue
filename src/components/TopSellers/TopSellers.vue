<script>
import '../TopSellers/TopSellers.css'

export default {
	data() {
		return {
			formActiveTopSellers: false,
		}
	},
	methods: {
		toggleMenuTopSellers() {
			this.formActiveTopSellers = !this.formActiveTopSellers
			document.body.classList.toggle('lock')
		},
		closeModal() {
			this.formActiveTopSellers = false
			document.body.classList.remove('lock')
		},
	},
}
</script>

<template>
	<section class="section__TopSellers container__TopSellers" id="Top sellers">
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
				<ul class="services__list__TopSellers grid__1 grid--3">
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
									<span
										class="service-card__link-icon-wrapper__TopSellers icon-wrapper__TopSellers"
									>
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
										<img
											class="topSellersImg3"
											src="../imgs/topSellersImg3.png"
											alt=""
										/>
									</span>
								</a>
							</div>
						</article>
					</li>
				</ul>

				<div
					class="reviews__actions__TopSellers section__container__TopSellers"
				>
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

					<button
						:class="{ active: formActiveTopSellers }"
						class="reviews__arrow-button__TopSellers section__button__TopSellers"
						type="button"
					>
						<span class="visually-hidden">Next slide</span>
						<div
							@click="toggleMenuTopSellers"
							onclick="toggleMenuTopSellers.showModal()"
						>
							Buy now
						</div>
					</button>
				</div>
			</div>

			<dialog
				v-if="formActiveTopSellers"
				class="mobile-overlay__TopSellers visible-mobile__TopSellers"
				id="toggleMenuTopSellers"
			>
				<button
					type="button"
					class="buy-now-modal-class-button__TopSellers js-modal-close__TopSellers"
					@click="closeModal"
				>
					<div class="black-svg" width="14" height="14">
						<samp>&#10006;</samp>
					</div>
				</button>
				<h1 class="buy-now-form-modal-window-header__TopSellers">
					BUY
					<span class="buy-now-form-modal-window-header-span__TopSellers"
						>NOW</span
					>
				</h1>
				<ul class="buy-now-form-modal-window-list__TopSellers">
					<li class="buy-now-form-modal-window-row__TopSellers">
						<div class="buy-now-img-prod-pic__TopSellers">
							<img src="../imgs/chocolate-bar.png" alt="" />
						</div>

						<button class="buy-now-img-btg__TopSellers">
							<span class="buy-now-img-span__TopSellers">100 g</span>
						</button>
					</li>

					<li class="buy-now-form-modal-window-row__TopSellers">
						<div class="buy-now-img-prod-pic__TopSellers">
							<img src="../imgs/ChocolateBonbonMilk.png" alt="" />
						</div>

						<button class="buy-now-img-btg__TopSellers">
							<span class="buy-now-img-span__TopSellers">200 g</span>
						</button>
					</li>

					<li class="buy-now-form-modal-window-row__TopSellers">
						<div class="buy-now-img-prod-pic__TopSellers">
							<img src="../imgs/chocolate-bar-dark.png" alt="" />
						</div>

						<button class="buy-now-img-btg__TopSellers">
							<span class="buy-now-img-span__TopSellers">300 g</span>
						</button>
					</li>
				</ul>

				<form class="buy-now-modal-contact-form__TopSellers">
					<div class="buy-now-form-personal-information__TopSellers">
						<label class="buy-now-per-info__TopSellers" for="user-first-name">
							Personal Information
						</label>
						<div class="buy-now-per-info-name-div__TopSellers">
							<input
								class="buy-now-per-info-name-name__TopSellers"
								id="user-first-name"
								type="text"
								name="user-first-name"
								required
								pattern="[a-zA-Zа-яА-ЯїЇіІєЄ']+"
								placeholder="Name"
							/>
							<input
								class="buy-now-per-info-name-name__TopSellers"
								id="user-last-name"
								type="text"
								name="user-last-name"
								required
								pattern="[a-zA-Zа-яА-ЯїЇіІєЄ']+"
								placeholder="Surname"
							/>
						</div>
					</div>

					<div class="buy-now-form-personal-information__TopSellers">
						<label class="buy-now-per-info__TopSellers" for="user-email">
							Email
						</label>
						<div class="buy-now-contact-form-input-wraper__TopSellers">
							<input
								class="buy-now-per-info-name-name__TopSellers"
								type="email"
								name="user-email"
								required
								id="user-email"
								pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
								placeholder="Email"
							/>
						</div>
					</div>

					<div class="buy-now-form-personal-information__TopSellers">
						<label class="buy-now-per-info__TopSellers" for="user-tel">
							Phone number
						</label>
						<div class="buy-now-contact-form-input-wraper__TopSellers">
							<span class="buy-now-div-for-icon__TopSellers">
								<span class="buy-now-form-class-span__TopSellers">+380</span>
							</span>
							<input
								class="buy-now-per-info-name-tel__TopSellers"
								type="tel"
								id="user-tel"
								name="user_tel"
								required
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
								title="xxx-xx-xx"
								placeholder="Phone number"
							/>
						</div>
					</div>

					<div class="buy-now-form-personal-information__TopSellers">
						<label class="buy-now-per-info" for="user-bank-account__TopSellers">
							Card number
						</label>
						<div class="buy-now-contact-form-input-wraper__TopSellers">
							<input
								class="buy-now-per-info-name-name__TopSellers"
								type="text"
								id="user-bank-account"
								name="user_bank_account"
								required
								pattern="[0-9]{16}"
								title="Enter card"
								placeholder="Enter card"
							/>
							<div
								aria-label="bank-icon"
								width="32"
								height="21"
								class="buy-now-icon-bank__TopSellers"
							>
								<img src="../imgs/section.png" alt="" />
							</div>
						</div>
					</div>

					<div class="buy-now-form-comment__TopSellers">
						<label class="buy-now-per-info__TopSellers" for="user-comment">
							Comment
						</label>
						<textarea
							class="buy-now-contact-from-message__TopSellers"
							name="user-comment"
							id="user-comment"
							placeholder="Enter text"
						></textarea>
					</div>

					<button type="submit" class="buy-now-form-btn-submit__TopSellers">
						<span class="buy-now-form-btn-submit-span__TopSellers">
							Submit
						</span>
					</button>
				</form>
			</dialog>
		</div>
	</section>
</template>

<style></style>
