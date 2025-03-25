<template>
    <h2 style="margin-bottom: 40px;">Title: {{ post.title }}</h2>
    <p style="margin-bottom: 40px;">
        {{ post.body }}
    </p>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <p>{{ window.document.baseURI }}</p>
    </ClientOnly>
    <NuxtLink to="/posts">
        <h5>go to Posts All</h5>
    </NuxtLink>
</template>

<script setup>
// Указываем по какому шаблону (созданному в layouts) будет отображаться страница
definePageMeta({
    layout: 'post'
})

// const uri = document.baseURI
const route = useRoute()
const userId = route.params.id
const { public: { apiBaseURL } } = useRuntimeConfig()

const { data: post, pending } = await useFetch(
 `${apiBaseURL}/posts/${userId}`,
    { lazy: true },    
)
onMounted(() => {
    console.log('window.document.baseURI', window.document.baseURI);
    
})

</script>