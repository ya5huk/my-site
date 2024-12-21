<template>
    <div class="container">
        <div class="flex justify-between items-center">
            <h1>Port·fo·li·o</h1>
            <nuxt-link class="btn" to='/'>back home</nuxt-link>
        </div>
        <ol class="relative border-s border-black">
            <li class="mb-10 ms-4" v-for="p in products">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-black">
                </div>
                <time class="mb-1 font-normal leading-none ">
                    {{ p.date }}
                </time>
                <h3 class="font-semibold">
                    {{ p.title }}
                </h3>
                <div class="flex flex-col-reverse md:flex-row gap-5 mt-2">
                    <div class="flex flex-col gap-2">
                        <p class="">
                            {{ p.description }}
                        </p>
                        <p class="">
                            <span class="underline">Tools used</span>: {{ p.toolsUsed }}
                        </p>
                        <nuxt-link class="btn w-12" :to="p.directo">Visit</nuxt-link>
                    </div>
                    <img class="mt-2 md:mt-0 w-full max-w-xs md:self-start rounded-2xl border border-black shadow shadow-gray-400"
                        :src="p.image" :alt="p.title">
                </div>

            </li>

        </ol>
    </div>
</template>

<script lang="ts" setup>
export interface ProductSection {
    title: string;
    description: string;
    toolsUsed: string;
    image: string;
    date: string;
    directo: string;
}

const products: ProductSection[] = [
    {
        title: "CalendarPlusAI",
        date: "October '24",
        directo: 'https://calendarplusai.com',
        description: `A tool that upon entering couple of details, generating a custom calendar that fit your needs and availability. The calendar can be exported to your calendar app (Google Calendar, Apple Calendar, Outlook, etc.), PDF or you can receive a daily newsletter with your daily tasks and more.`,
        toolsUsed: 'Nuxt 3 (Vue framework), Google Firebase, ChatGPT API, Tailwindcss, Python Flask. Deployed on Vercel.',
        image: 'https://www.calendarplusai.com/self-letter-long-image.png'
    },
    {
        title: "Visuathlete",
        date: "Jan '23 - Jul '24",
        directo: 'https://visuathlete.com/',
        description: `My first and biggest project thus far. A website made to visualize and analyse all of the results of Israel's athletes, retired and active. The website stores data of more than 1400 athletes about their performances. There's a page for each with beautiful graphs and statistics. There is a home page feed, a leaderboard, articles, instagram profile for the site and more! The site still gets hundreds of visits monthly.`,
        toolsUsed: 'Nuxt 3 (Vue framework) + Tailwindcss, Python Flask, Google Firstore. Deployed on DigitalOcean & Render',
        image: '/projects/visuathlete-showcase.png'
    },
    {
        title: "EL-ON: Compressed Air Systems",
        date: "June '24",
        directo: 'https://el-on.co.il/',
        description: `A website I made for a client that sells compressed air systems in Israel.`,
        toolsUsed: 'Nuxt 3 (Vue framework) and designed with tailwindcss.',
        image: '/projects/el-on-showcase.png'
    },
    {
        title: "SafeCloud",
        date: "Jan - Aug '22",
        directo: 'https://github.com/ya5huk/safe_cloud',
        description: `My final school project: A cloud focused on speed & simplicity. The cloud called "safe" because of additional security feature that enables a user to encrypt files with a string only he or she knows. Super fast. Super simple. Super sercure.`,
        toolsUsed: 'Python Flask, CryptoJS, Bootstrap',
        image: '/projects/safecloud-showcase.png'
    },

]
</script>

<style lang="postcss" scoped>
time {
    @apply text-xl;
}
</style>