<template>

	<article class="goods__item card">
		<div class="card__content">
			<div class="card__picture _ibg">
				<NuxtPicture
					:src="product.image"
					:alt="product.title"
					class="card__img"
				/>
			</div>
			<div class="card__about">
				<span class="card__title">{{ product.title }}</span>
				<span class="card__text">{{ product.description }}</span>
				<span class="card__price">{{ setSpaceInPrice(product.price) }}<span> руб.</span></span>
				<!-- <button 
					class="card__btn" 
					@click.stop="$emit('show-cart', cart)"
				>
					Показать товар
				</button> -->
			</div>
		</div>
	</article>

</template>

<script setup>
// import MyButton from './MyButton.vue'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
defineEmits(['click-bye'])


function setSpaceInPrice(price) {
    let newPrice = price
    if (typeof price === 'string') newPrice = price.replace(/[^0-9.]/gim, '')
    return (+newPrice).toLocaleString('ru-RU')
}

</script>

<style lang="scss" scoped>
.card {
	position: relative;
	background: #FFFEFB;
	box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
	cursor: pointer;
	transition: all 0.3s ease 0s;



	// .card__bucket
	&__bucket {
		opacity: 0;
		transition: all 0.2s ease 0s;
		position: absolute;
		width: 32px;
		height: 32px;
		top: -10px;
		right: -10px;
		z-index: 3;
		cursor: pointer;

		background: #FF8484;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// .card__bucket-picture
	&__bucket-picture {}

	// .card__bucketImage
	&__bucketImage {}

	// .card__content
	&__content {
		border-radius: 4px 4px 4px 4px;
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	// .card__picture
	&__picture {
		padding-bottom: 40%;
	}

	// .card__img
	&__img {}

	// .card__about
	&__about {
		flex: 1 0 auto;
		word-wrap: break-word;
		color: #3F3F3F;
		padding: 16px 24px;
		display: flex;
		flex-direction: column;
	}

	// .card__title
	&__title {
		display: block;
		font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		line-height: 2.5rem;
		margin-bottom: 16px;
	}

	// .card__text
	&__text {
		display: block;
		font-style: normal;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 2rem;
		margin-bottom: 20px;
		flex: 1 1 auto;
	}

	// .card__price
	&__price {
		display: block;
		font-style: normal;
		font-weight: 600;
		font-size: 2.4rem;
		line-height: 3rem;
		margin-bottom: 16px;
		flex: 0 0 auto;
	}

	// card__btn
	&__btn {
		min-width: 100px;
	}

}
._ibg {
	position: relative;

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: center;
	}
}
</style>