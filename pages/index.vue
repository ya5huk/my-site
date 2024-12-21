<template>
    <div class="container">
        <h1>
            everything that's ilan.
        </h1>
        <ul>
            <li>
                <nuxt-link to="/portfolio">portfolio.</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">who am i?</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/pictures">pictures!</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/blog">yapping.</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/contact">connect.</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="postcss" scoped>
a {
    @apply hover:underline;
}
</style>