<script>
import '../lovedChocolate/lovedChocolate.css'

export default {
	data() {
		return {
			formActive: false,
		}
	},
	methods: {
		toggleMenuLovedChocolate() {
			this.formActive = !this.formActive
			document.body.classList.toggle('lock')
		},
		closeModal() {
			this.formActive = false
			document.body.classList.remove('lock')
		},
	},
}
</script>

<template>
	<section
		class="section__lovedChocolate container__lovedChocolate"
		id="Chocolate is loved"
	>
		<header class="section__header__lovedChocolate">
			<h2 class="section__title__lovedChocolate puddle-bg__lovedChocolate">
				chocolate is loved
			</h2>
			<div class="section__description__lovedChocolate">
				<p></p>
			</div>
		</header>
		<div class="section__body__lovedChocolate">
			<div class="reviews__lovedChocolate">
				<ul class="services__list__lovedChocolate grid grid--2">
					<li class="services__item__lovedChocolate">
						<article class="service-card__lovedChocolate">
							<div class="service-card__body__lovedChocolate">
								<a class="service-card__link__lovedChocolate" href="/">
									<span class="service-card__link-icon-wrapper__lovedChocolate">
										<img src="../imgs/VictoriaDobrzhanska1.svg" alt="" />
									</span>
								</a>
								<div class="service-card__title__lovedChocolate">
									<h3
										class="puddle-bg__lovedChocolate puddle-bg--light__lovedChocolate"
									>
										Victoria Dobrzhanska
									</h3>
									<br />
									<p class="puddle-bg__lovedChocolate">
										I love this chocolate bar. Perfect combination of light
										crispy wafer, covered in a thin layer chocolate.
									</p>
								</div>
							</div>
						</article>
					</li>
					<li class="services__item__lovedChocolate">
						<article
							class="service-card__lovedChocolate service-card--accent-bg__lovedChocolate"
						>
							<div class="service-card__body__lovedChocolate">
								<a class="service-card__link__lovedChocolate" href="/">
									<span class="service-card__link-icon-wrapper__lovedChocolate">
										<img src="../imgs/NazarBabenko2.svg" alt="" />
									</span>
								</a>
								<div class="service-card__title__lovedChocolate">
									<h3 class="puddle-bg__lovedChocolate">Nazar Babenko</h3>
									<br />
									<p
										class="puddle-bg__lovedChocolate puddle-bg--light__lovedChocolate"
									>
										This chocolate confection is a delight! A delight! The wafer
										is light and crisp, the hazelnut cream is smooth, and the
										chocolate is good.
									</p>
								</div>
							</div>
						</article>
					</li>
					<li class="services__item__lovedChocolate">
						<article
							class="service-card__lovedChocolate service-card--dark-bg__lovedChocolate"
						>
							<div class="service-card__body__lovedChocolate">
								<a
									class="service-card__link__lovedChocolate service-card__link--light__lovedChocolate"
									href="/"
								>
									<span class="service-card__link-icon-wrapper__lovedChocolate">
										<img src="../imgs/OlenaKampusch3.svg" alt="" />
									</span>
								</a>
								<div class="service-card__title__lovedChocolate">
									<h3 class="puddle-bg puddle-bg--light__lovedChocolate">
										Olena Kampusch
									</h3>
									<br />
									<p class="puddle-bg puddle-bg--light__lovedChocolate">
										Chocolate is a family favourite treat. Love the delicious
										smooth chocolate and the creaminess inside. The wafer is
										soft but crunchy.
									</p>
								</div>
							</div>
						</article>
					</li>
				</ul>
			</div>

			<div
				class="button__lovedChocolate hidden-form"
				:class="{ active: formActive }"
			>
				<button
					class="section__but__lovedChocolate"
					@click="toggleMenuLovedChocolate"
					onclick="toggleMenuLovedChocolate.showModal()"
				>
					Leave a review
				</button>
			</div>

			<!-- modal form -->

			<dialog
				v-if="formActive"
				class="mobile-overlay__lovedChocolate visible-mobile__lovedChocolate"
				id="toggleMenuLovedChocolate"
			>
				<form class="review__modal__form__lovedChocolate" method="dialog">
					<div class="modal__form__field__wraper__lovedChocolate">
						<label class="modal__form__field__lovedChocolate"></label>
						<button
							type="button"
							class="review__backdrop__close__button__lovedChocolate js-modal-close__lovedChocolate"
							@click="closeModal"
						>
							<div class="black-svg" width="14" height="14">
								<samp>&#10006;</samp>
							</div>
						</button>
						<h2 class="review__modal__title__lovedChocolate">
							leave a review <br />
							about
							<span class="second__part__review__modal__title__lovedChocolate"
								>our chokolate</span
							>
						</h2>
						<div class="modal__input__wraper__lovedChocolate">
							<input
								name="user-name"
								class="input__description__lovedChocolate"
								id="name"
								type="text"
								pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
								title="Username must be two words separated by space."
								placeholder="Name"
							/>
						</div>
					</div>
					<div class="modal__form__field__wraper__lovedChocolate">
						<label class="modal__form__field__lovedChocolate" for="user-mail">
						</label>
						<div class="modal__input__wraper__lovedChocolate">
							<input
								name="email"
								id="user-mail"
								class="input__description__lovedChocolate"
								type="email"
								pattern="^\S+@\S+\.\S+$"
								title="example@mail.com"
								placeholder="Email"
							/>
						</div>
					</div>
					<div
						class="modal__form__field__wraper__lovedChocolate review__phone__container__lovedChocolate"
					>
						<label class="modal__form__field__lovedChocolate" for="user-phone">
						</label>
						<div class="modal__input__wraper__lovedChocolate">
							<input
								name="phone"
								id="user-phone"
								class="input__description__lovedChocolate phone__input__description__lovedChocolate"
								type="tel"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
								title="067-451-97-08"
								placeholder="Phone number"
							/>
						</div>
						<div class="svg__and__phone__code___lovedChocolate">
							<svg class="icon-flag" width="18" height="24">
								<use
									href="/choco-team/assets/icons-7d3fd186.svg#icon-flag"
								></use>
							</svg>
							<!-- <span class="phone__code__lovedChocolate">+380</span> -->
						</div>
					</div>

					<div class="modal__textarea__wraper__lovedChocolate">
						<label
							class="modal__form__field___lovedChocolate"
							for="user-comment"
						></label>
						<textarea
							name="user-message"
							id="comment"
							class="modal__user__message__lovedChocolate"
							placeholder="Enter text"
						></textarea>
					</div>

					<button
						type="submit"
						class="review-modal__form__submit__button__lovedChocolate"
					>
						Send
					</button>
				</form>
			</dialog>
		</div>
	</section>
</template>

<style></style>
