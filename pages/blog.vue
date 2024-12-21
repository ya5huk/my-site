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

        <div class="flex flex-col divide-y divide-black">
            <div dir="auto" @click="navigateTo(blog.path)" :class="blog.lang == 'he_IL' ? 'font-rubik' : ''"
                v-for=" blog in allBlogs.filter(b => b.category == currentlyFiltered)"
                class="space-y-2 py-5 hover:bg-[var(--bgcolor-light)] hover:cursor-pointer px-2">
                <h3 class="underline decoration-2 underline-offset-4 ">{{ blog.title }}</h3>
                <div class="flex flex-col-reverse md:flex-row gap-2 md:gap-10">
                    <p>{{ blog.description }}</p>
                    <img :src="blog.image" :alt="blog.title"
                        class="w-full md:max-w-48 md:max-h-48 self-start shadow shadow-black border border-black" />
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>

export interface BlogData {
    path: string
    title: string
    description: string
    image: string

    date: string
    lang: string
    category: 'personal' | 'professional'
}

const currentlyFiltered = ref<'personal' | 'professional'>('professional')

const allBlogs = ref<BlogData[]>([])

// fetch all content from the blog folder
const { data: persBlogs } = await useAsyncData(() => queryContent('personal').find())
const { data: proBlogs } = await useAsyncData(() => queryContent('professional').find())

console.log(persBlogs.value)

if (persBlogs.value && proBlogs.value) {

    const personalBlogs: BlogData[] = persBlogs.value.map(b => {
        return {
            title: b.title as string,
            date: b.date as string,
            lang: b.lang as string,
            image: b.image as string,
            description: b.description as string,
            path: b._path as string,
            category: 'personal'
        }
    })

    const professionalBlogs: BlogData[] = proBlogs.value.map(b => {
        return {
            title: b.title as string,
            date: b.date as string,
            lang: b.lang as string,
            image: b.image as string,
            description: b.description as string,
            path: b._path as string,
            category: 'professional'
        }
    })

    allBlogs.value = [...personalBlogs, ...professionalBlogs]
}


const filterBlogs = () => {

}
</script>

<style lang="postcss" scoped>
.filterdiv {
    @apply flex w-fit rounded border border-black divide-x divide-black;
}
</style>