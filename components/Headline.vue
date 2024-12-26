<template>
    <div class="flex justify-between items-center">
        <h1 class="">{{ pageTitle }}</h1>
        <nuxt-link class="btn" to='/'>back home</nuxt-link>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    pageTitle: string,
}>()

</script>