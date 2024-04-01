<script>
import '../homeMain/homeMain.css'

export default {
	data() {
		return {
			formActiveMotivation: false,
		}
	},
	methods: {
		toggleMenuMotivation() {
			this.formActiveMotivation = !this.formActiveMotivation
			document.body.classList.toggle('lock')
		},
		closeModal() {
			this.formActiveMotivation = false
			document.body.classList.remove('lock')
		},
	},
}
</script>

<template>
	<main class="content" id="Home">
		<section class="motivation">
			<h2 class="visually-hidden"></h2>
			<ul class="motivation-list">
				<li class="motivation-item">
					<div class="motivation-card container">
						<div class="motivation-card-body">
							<h3
								class="motivation-card-title backdrop-title title-medium"
								data-title="Start"
							>
								Treat yourself or a loved one to our finest ingredients for a
								moment of pure delight!
							</h3>
							<div class="motivation-card-description">
								<p></p>
							</div>
							<img
								class="motivation-card-image _img"
								src="../imgs/chocolate-covered-cocoa-powder 1.png"
								alt="Man with dumbbells"
								width="1136"
								height="600"
								loading="lazy"
							/>
							<div
								class="motivation-card-buttons"
								:class="{ active: formActiveMotivation }"
							>
								<button
									class="motivation-card-button button transparent"
									@click="toggleMenuMotivation"
									onclick="toggleMenuMotivation.showModal()"
								>
									Buy now
								</button>
								<a
									class="motivation-card-button button transparent"
									href="#How it’s made"
								>
									How it’s made
								</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</section>

		<dialog
			v-if="formActiveMotivation"
			class="mobile-overlay__Motivation visible-mobile__Motivation"
			id="toggleMenuMotivation"
		>
			<button
				type="button"
				class="buy-now-modal-class-button__Motivation js-modal-close__Motivation"
				@click="closeModal"
			>
				<div class="black-svg" width="14" height="14">
					<samp>&#10006;</samp>
				</div>
			</button>
			<h1 class="buy-now-form-modal-window-header__Motivation">
				BUY
				<span class="buy-now-form-modal-window-header-span__Motivation"
					>NOW</span
				>
			</h1>
			<ul class="buy-now-form-modal-window-list__Motivation">
				<li class="buy-now-form-modal-window-row__Motivation">
					<div class="buy-now-img-prod-pic__Motivation">
						<img src="../imgs/chocolate-bar.png" alt="" />
					</div>

					<button class="buy-now-img-btg__Motivation">
						<span class="buy-now-img-span__Motivation">100 g</span>
					</button>
				</li>

				<li class="buy-now-form-modal-window-row__Motivation">
					<div class="buy-now-img-prod-pic__Motivation">
						<img src="../imgs/ChocolateBonbonMilk.png" alt="" />
					</div>

					<button class="buy-now-img-btg__Motivation">
						<span class="buy-now-img-span__Motivation">200 g</span>
					</button>
				</li>

				<li class="buy-now-form-modal-window-row__Motivation">
					<div class="buy-now-img-prod-pic__Motivation">
						<img src="../imgs/chocolate-bar-dark.png" alt="" />
					</div>

					<button class="buy-now-img-btg__Motivation">
						<span class="buy-now-img-span__Motivation">300 g</span>
					</button>
				</li>
			</ul>

			<form class="buy-now-modal-contact-form__Motivation">
				<div class="buy-now-form-personal-information__Motivation">
					<label class="buy-now-per-info__Motivation" for="user-first-name">
						Personal Information
					</label>
					<div class="buy-now-per-info-name-div__Motivation">
						<input
							class="buy-now-per-info-name-name__Motivation"
							id="user-first-name"
							type="text"
							name="user-first-name"
							required
							pattern="[a-zA-Zа-яА-ЯїЇіІєЄ']+"
							placeholder="Name"
						/>
						<input
							class="buy-now-per-info-name-name__Motivation"
							id="user-last-name"
							type="text"
							name="user-last-name"
							required
							pattern="[a-zA-Zа-яА-ЯїЇіІєЄ']+"
							placeholder="Surname"
						/>
					</div>
				</div>

				<div class="buy-now-form-personal-information__Motivation">
					<label class="buy-now-per-info__Motivation" for="user-email">
						Email
					</label>
					<div class="buy-now-contact-form-input-wraper__Motivation">
						<input
							class="buy-now-per-info-name-name__Motivation"
							type="email"
							name="user-email"
							required
							id="user-email"
							pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
							placeholder="Email"
						/>
					</div>
				</div>

				<div class="buy-now-form-personal-information__Motivation">
					<label class="buy-now-per-info__Motivation" for="user-tel">
						Phone number
					</label>
					<div class="buy-now-contact-form-input-wraper__Motivation">
						<span class="buy-now-div-for-icon__Motivation">
							<span class="buy-now-form-class-span__Motivation">+380</span>
						</span>
						<input
							class="buy-now-per-info-name-tel__Motivation"
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

				<div class="buy-now-form-personal-information__Motivation">
					<label class="buy-now-per-info" for="user-bank-account__Motivation">
						Card number
					</label>
					<div class="buy-now-contact-form-input-wraper__Motivation">
						<input
							class="buy-now-per-info-name-name__Motivation"
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
							class="buy-now-icon-bank__Motivation"
						>
							<img src="../imgs/section.png" alt="" />
						</div>
					</div>
				</div>

				<div class="buy-now-form-comment__Motivation">
					<label class="buy-now-per-info__Motivation" for="user-comment">
						Comment
					</label>
					<textarea
						class="buy-now-contact-from-message__Motivation"
						name="user-comment"
						id="user-comment"
						placeholder="Enter text"
					></textarea>
				</div>

				<button type="submit" class="buy-now-form-btn-submit__Motivation">
					<span class="buy-now-form-btn-submit-span__Motivation"> Submit </span>
				</button>
			</form>
		</dialog>
	</main>
</template>

<style></style>
