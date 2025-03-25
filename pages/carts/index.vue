<template>
    <h2>Все товары</h2>
    <section class="main__goods goods">
        <div class="goods__content">
            <div class="goods__item" v-for="item in products" :key="item.id">
                <NuxtLink
                    :to="{ name:'carts-id', params:{ id: item.id }}"   
                >
                    <cart-item :product="item" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'cart'
})
const { public: { fakeStore } } = useRuntimeConfig()

const { data: products, pending } = await useFetch(
    `${fakeStore}/products`,
    { lazy: true },
)



</script>

<style lang="scss" scoped>
.goods {
  // .goods__content
  &__content {
    display: flex;
    flex-wrap: wrap;
    
  }

  // .goods__grid
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    gap: 16px;
}

  // .goods__item
  &__item {
    flex: 0 1 33.333%;
  }

  // .goods__text
  &__text {
    font-size: 2.4rem;
    font-weight: 600;
  }

  //   goods__form-buy
  &__form-buy {
  }
}

</style>