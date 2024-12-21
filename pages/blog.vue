<template>
    <div class="container">

        <div class="flex justify-between items-center">
            <h1 class="">Web·log</h1>
            <nuxt-link class="btn" to='/'>back home</nuxt-link>
        </div>

        <div class="flex filterdiv">
            <button class="btn" :class="currentlyFiltered == 'personal' ? 'btn-active' : ''"
                @click="currentlyFiltered = 'personal'">Personal</button>
            <button class="btn" :class="currentlyFiltered == 'professional' ? 'btn-active' : ''"
                @click="currentlyFiltered = 'professional'">Professional</button>

        </div>
    </div>

</template>

<script lang="ts" setup>

const currentlyFiltered = ref<'personal' | 'professional'>('personal')

const filterBlogs = () => {

}
</script>

<style lang="postcss" scoped>
.filterdiv {
    @apply flex w-fit rounded border border-black divide-x divide-black;
}
</style>