<template>
    <div class="container">
        <Headline page-title="Web·log" />

        <div class="flex filterdiv">
            <button class="btn" :class="currentlyFiltered == 'personal' ? 'btn-active' : ''"
                @click="currentlyFiltered = 'personal'">Personal</button>
            <button class="btn" :class="currentlyFiltered == 'professional' ? 'btn-active' : ''"
                @click="currentlyFiltered = 'professional'">Professional</button>

        </div>

        <div class="flex flex-col divide-y divide-black">
            <div dir="auto" @click="navigateTo(blog.path)" :class="blog.lang == 'he_IL' ? 'font-rubik' : ''"
                v-for="blog in allBlogs.filter(b => b.category == currentlyFiltered)"
                class="flex flex-col gap-4 py-5 hover:bg-[var(--bgcolor-light)] hover:cursor-pointer px-2">
                <h2 class="underline decoration-2 underline-offset-4 ">{{ blog.title }}</h2>
                <div class="flex flex-col-reverse md:flex-row gap-2 md:gap-5">
                    <p>{{ blog.description }}</p>
                    <img :src="blog.image" :alt="blog.title"
                        class="w-full md:max-w-48 self-start shadow shadow-black border border-black" />
                </div>
                <small>{{ pretifyDate(blog.date, blog.lang) }}</small>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>

const pageDesc = "Everything I've written in one place"
const pageTitle = "Ilan Yashuk: Blog"
const pageImage = '/site-icon.png'
const pageUrl = 'https://ilansonlineattic.com/blog'

useSeoMeta({
    title: pageTitle,
    ogTitle: pageTitle,
    description: pageDesc,
    ogDescription: pageDesc,
    ogImage: pageImage,
    ogUrl: pageUrl,

    twitterTitle: pageTitle,
    twitterDescription: pageDesc,
    twitterCard: 'summary_large_image',
    twitterImage: pageImage
})

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

    // sort allBlogs by date where date field is dd/mm/yyyy if lang is he_IL and mm/dd/yyyy if lang is en_US
    allBlogs.value = allBlogs.value.sort((a, b) => {
        let aDay, aMonth, aYear, bDay, bMonth, bYear

        if (a.lang == 'he_IL') {
            [aDay, aMonth, aYear] = a.date.split('/')
        } else {
            [aMonth, aDay, aYear] = a.date.split('/')
        }
        if (b.lang == 'he_IL') {
            [bDay, bMonth, bYear] = b.date.split('/')
        } else {
            [bMonth, bDay, bYear] = b.date.split('/')
        }

        const aDate = new Date(`${aYear}-${aMonth}-${aDay}`)
        const bDate = new Date(`${bYear}-${bMonth}-${bDay}`)

        return bDate.getTime() - aDate.getTime()
    })

}


const filterBlogs = () => {

}
</script>

<style lang="postcss" scoped>
.filterdiv {
    @apply flex w-fit rounded border border-black divide-x divide-black;
}
</style>