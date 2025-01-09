<template>
    <div class="container">
        <h1>
            everything that's ilan.
        </h1>
        <ul>
            <li class="text-2xl">
                <nuxt-link to="/portfolio">portfolio.</nuxt-link>
            </li>
            <li class="text-2xl">
                <nuxt-link to="/about">about me.</nuxt-link>
            </li>
            <li class="text-2xl">
                <nuxt-link to="/pictures">pictures!</nuxt-link>
            </li>
            <li class="text-2xl">
                <nuxt-link to="/blog">yapping.</nuxt-link>
            </li>
            <li class="text-2xl">
                <nuxt-link to="/contact">let's connect.</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

useSeoMeta({
    title: "Ilan's Online Attic",
    ogTitle: "Ilan's Online Attic",
    description: "Everything that's Ilan Yashuk should be here. I got messy with all the sites I post on so I decided to create a one for all.",
    ogDescription: "Everything that's Ilan Yashuk should be here. I got messy with all the sites I post on so I decided to create a one for all.",
    ogImage: '/site-icon.png',
    ogUrl: 'https://ilansonlineattic.com',

    twitterTitle: "Ilan's Online Attic",
    twitterDescription: "Everything that's Ilan Yashuk should be here. I got messy with all the sites I post on so I decided to create a one for all.",
    twitterCard: 'summary_large_image',
    twitterImage: '/site-icon.png'
})

</script>

<style lang="postcss" scoped>
a {
    @apply hover:underline;
}
</style>
