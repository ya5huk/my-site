<template>

    <div class="space-y-2 pb-5 first:pt-0 pt-5">
        <h2>{{ imageStory.title }}</h2>
        <p>{{ imageStory.description }}</p>
        <img :src="imageStory.image" :alt="imageStory.title" />
        <p class="text-right">{{ imageStory.date }}</p>
    </div>

</template>

<script lang="ts" setup>
export interface ImageStory {
    title: string;
    description: string;
    image: string;
    date: string;
}

const props = defineProps<{
    imageStory: ImageStory
}>()
</script>

<style lang="postcss" scoped>
h2 {
    @apply text-3xl;
}
</style>