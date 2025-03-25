<template>
    <h2 style="margin-bottom: 40px;">{{ product.title }}</h2>
    <NuxtPicture
					:src="product.image"
					:alt="product.title"
					class="card__img"
				/>
    <p style="margin-bottom: 40px;">
        {{ product.description }}
    </p>
    <span class="card__price">{{ setSpaceInPrice(product.price) }}<span> руб.</span></span>

    <NuxtLink to="/carts">
        <h5>Вернуться на страницу товаров</h5>
    </NuxtLink> 
</template>

<script setup>
// Указываем по какому шаблону (созданному в layouts) будет отображаться страница
definePageMeta({
    layout: 'cart'
})

const route = useRoute()
const productId = route.params.id

const { public: { fakeStore } } = useRuntimeConfig()

const { data: product, pending } = await useFetch(
    `${fakeStore}/products/${productId}`,
    { lazy: true },
)


function setSpaceInPrice(price) {
    let newPrice = price
    if (typeof price === 'string') newPrice = price.replace(/[^0-9.]/gim, '')
    return (+newPrice).toLocaleString('ru-RU')
}
</script>