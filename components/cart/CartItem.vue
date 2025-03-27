<template>

	<article class="goods__item card">
		<div class="card__content">
			<div class="card__picture _ibg">
				<img
					:src="product.image"
					:alt="product.title"
					class="card__img "
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
	cursor: pointer;
	transition: all 0.3s ease 0s;

	// .card__content
	&__content {
		border-radius: 10px;
		overflow: hidden;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		border: 1px solid #000;
		max-width: 400px;
		margin: 10px;		
	}

	// .card__picture
	&__picture {
		margin: 24px 24px 0 24px;
		padding-bottom: 90%;
	}

	// .card__img
	&__img {
	}

	// .card__about
	&__about {
		// flex: 1 0 auto;
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
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 16px;
		flex: 0 1 auto;
	}

	// .card__text
	&__text {
		display: block;
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		margin-bottom: 20px;
		flex: 1 0 auto;
	}

	// .card__price
	&__price {
		display: block;
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 30px;
		margin-bottom: 16px;
		flex: 0 1 auto;
	}

	// card__btn
	&__btn {
		min-width: 100px;
	}

}
._ibg {
	position: relative;

	img  {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: contain;
		object-position: center;
	}
}
</style>