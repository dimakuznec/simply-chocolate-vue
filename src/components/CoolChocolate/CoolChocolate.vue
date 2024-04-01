<script>
import '../CoolChocolate/CoolChocolate.css'

export default {
	data() {
		return {
			formActiveCoolChocolate: false,
		}
	},
	methods: {
		toggleMenuCoolChocolate() {
			this.formActiveCoolChocolate = !this.formActiveCoolChocolate
			document.body.classList.toggle('lock')
		},
		closeModal() {
			this.formActiveCoolChocolate = false
			document.body.classList.remove('lock')
		},
	},
}
</script>

<template>
	<section class="section__CoolChocolate container__CoolChocolate">
		<div class="section__body__CoolChocolate">
			<div class="reviews__CoolChocolate">
				<ul class="services__list__CoolChocolate grid grid--2">
					<li class="services__item__CoolChocolate">
						<article
							class="service-card__CoolChocolate service-card--accent-bg__CoolChocolate"
						>
							<div class="service-card__body__CoolChocolate">
								<div class="service-card__title__CoolChocolate">
									<h3 class="puddle-bg__CoolChocolate">
										exPLORE OUR NEW CHOCOLATE FIRST
									</h3>
									<br />
									<p
										class="puddle-bg__CoolChocolate puddle-bg--light__CoolChocolate"
									>
										From the velvety texture to the rich and complex flavor, our
										New Chocolate is a true indulgence that will leave you
										craving more. Made with only the finest ingredients and
										handcrafted with the utmost care, each piece is a work of
										art that is sure to please.
									</p>
								</div>
								<div
									class="button__CoolChocolate"
									:class="{ active: formActiveCoolChocolate }"
								>
									<button
										class="section__but__CoolChocolate"
										@click="toggleMenuCoolChocolate"
										onclick="toggleMenuCoolChocolate.showModal()"
									>
										Subscribe
									</button>
								</div>

								<dialog
									v-if="formActiveCoolChocolate"
									class="mobile-overlay__CoolChocolate visible-mobile__CoolChocolate"
									id="toggleMenuCoolChocolate"
								>
									<form
										class="review__modal__form__CoolChocolate"
										method="dialog"
									>
										<div class="BackgroundFormImg">
											<img src="../imgs/ChocolateBackgroundForm.png" alt="" />
										</div>
										<div class="modal__form__field__wraper__CoolChocolate">
											<label class="modal__form__field__CoolChocolate"></label>
											<button
												type="button"
												class="review__backdrop__close__button__CoolChocolate js-modal-close__CoolChocolate"
												@click="closeModal"
											>
												<div class="black-svg" width="14" height="14">
													<samp>&#10006;</samp>
												</div>
											</button>
											<h2 class="review__modal__title__CoolChocolate">
												Explore our <br />

												<span
													class="second__part__review__modal__title__CoolChocolate"
													>new chocolate first!</span
												>
											</h2>
										</div>
										<div class="modal__form__field__wraper__CoolChocolate">
											<label
												class="modal__form__field__CoolChocolate"
												for="user-mail"
											>
											</label>
											<div class="modal__input__wraper__CoolChocolate">
												<input
													name="email"
													id="user-mail"
													class="input__description__CoolChocolate"
													type="email"
													pattern="^\S+@\S+\.\S+$"
													title="example@mail.com"
													placeholder="Email"
												/>
											</div>
										</div>

										<button
											type="submit"
											class="review-modal__form__submit__button__CoolChocolate"
										>
											Send
										</button>
									</form>
								</dialog>
							</div>
						</article>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style></style>
