<template>
    <div class="container">

        <Headline page-title="Let's con·nect:" />

        <p>I am good at and will happily help with:</p>
        <ul>
            <li>Web development / Fullstack</li>
            <li>Javascript, HTML, CSS</li>
            <li>Python / Building an API</li>
            <li>Vue & Other js frameworks</li>
        </ul>
        <p>
            I can greatly fit in a team or solo develop you a site or SaaS. I don't use services like Wordpress,
            Squarespace, Wix, Webflow, etc.
            I'm more of an app guy than a designer and so I like to deliver a custom-made product.
        </p>
        <p>I'm open minded, let's talk! I will 100% return your message in these medias:</p>
        <div class="flex flex-wrap gap-4">

            <nuxt-link to="https://www.instagram.com/ilan_yashuk/"
                class="btn w-36 md:w-40 flex items-center gap-2 rounded-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :width="iconSizePx" viewBox="0 0 16 16">
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <p>ilan_yashuk</p>

            </nuxt-link>


            <nuxt-link to="mailto:ilan147963@gmail.com" class="btn w-60 md:w-72  flex items-center gap-2 rounded-lg ">

                <svg xmlns="http://www.w3.org/2000/svg" :width="iconSizePx" fill="currentColor" class="bi bi-mailbox"
                    viewBox="0 0 16 16">
                    <path
                        d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z" />
                    <path
                        d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0" />
                </svg>
                <p>ilan147963@gmail.com</p>

            </nuxt-link>

        </div>
    </div>
</template>

<script lang="ts" setup>

const iconSizePx = '20px'

const pageDesc = "I loooove to talk so hit me up!"
const pageTitle = "Ilan Yashuk: Contact"
const pageImage = '/site-icon.png'

useSeoMeta({
    title: pageTitle,
    ogTitle: pageTitle,
    description: pageDesc,
    ogDescription: pageDesc,
    ogImage: pageImage,
    ogUrl: 'https://ilansonlineattic.com/contact',

    twitterTitle: pageTitle,
    twitterDescription: pageDesc,
    twitterCard: 'summary_large_image',
    twitterImage: pageImage
})

</script>
