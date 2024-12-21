<template>
    <div class="container">
        <h1>
            evreything's ilan.
        </h1>
        <ul>
            <li>
                <nuxt-link to="/pictures">pictures!</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">who am i?</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/portfolio">portfolio: timeline.</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">yapping.</nuxt-link>

            </li>
        </ul>
    </div>
</template>

<style lang="postcss" scoped>
a {
    @apply hover:underline;
}
</style>