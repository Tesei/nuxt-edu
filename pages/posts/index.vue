<template>
    <h2 calss="Heading_2">Все статьи:</h2>
        <ul>
            <!-- Прокидываем линки из папки posts -->
            <li v-for="p in posts" :key="p.id" >
                <NuxtLink
                :to="{ name:'posts-id', params:{ id: p.id }}"
                >
                    to Post {{ p.title }}
                </NuxtLink>
            </li>
        </ul>
</template>

<script setup>
definePageMeta({
    layout: 'post'
})

const { public: { apiBaseURL } } = useRuntimeConfig()

const { data: posts } = await $fetch(
 `${apiBaseURL}/posts`,
    { lazy: true },
    
)
// const { data: posts, pending } = await useFetch(
//  `${apiBaseURL}/posts`,
//     { lazy: true },
    
// )
// const { data: products, pending2 } = await $fetch(
//  `${fakeStore}/products`,
//  {lazy: true}
// )
// console.log('Все посты:', posts);
// console.log('pending:', pending);


</script>