<template>
    <main>
        <ContentDoc>
            <template v-slot="{ doc }">

                <Head>
                    <Meta name="og:site_name" content="Ilan's Online Attic" />

                    <Meta name="og:title" :content="doc.title" />
                    <Meta name="og:description" :content="doc.description" />
                    <Meta name="og:image" :content="doc.image" />
                    <Meta name="og:url" :content="fullUrl" />
                    <Meta name="lang" :content="doc.lang" />

                    <Meta name="og:type" content="article" />

                    <Meta name="twitter:card" content="summary_large_image" />
                    <Meta name="twitter:title" :content="doc.title" />
                    <Meta name="twitter:description" :content="doc.description" />
                    <Meta name="twitter:image" content="" />

                </Head>
                <article class="container" :class="doc.lang == 'he_IL' ? 'font-rubik' : ''">
                    <div class="flex flex-col gap-2">
                        <h1 dir="auto">
                            {{ doc.title }}
                        </h1>

                        <template v-if="doc.lang == 'en_US'">
                            <div class="flex justify-between items-center">
                                <small class="text-lg">Ilan Yashuk | {{ doc.date
                                    }}</small>
                                <nuxt-link class="btn" to="/">Back home</nuxt-link>
                            </div>
                        </template>

                        <template v-if="doc.lang == 'he_IL'">
                            <div class="flex justify-between items-center">
                                <nuxt-link class="btn" to="/">חזרה הביתה</nuxt-link>
                                <small class="text-lg text-right">
                                    אילן ישוק | {{ doc.date }}
                                </small>
                            </div>
                        </template>
                    </div>
                    <img class="mx-auto w-full shadow shadow-gray-800 border border-black" :src="doc.image"
                        :alt="doc.title">
                    <ContentRenderer class="space-y-5" dir="auto" :value="doc" />
                </article>
            </template>
            <template #empty>
                <h1>Document not found</h1>
                <p>The page you were trying to access wasn't found.</p>
            </template>
        </ContentDoc>

    </main>
</template>

<style lang="postcss" scoped>
main:deep(p) {
    a {
        @apply underline;
    }

    img {
        @apply w-full;
    }



}

main:deep(ul) {
    @apply space-y-5;
}

main:deep(ol) {
    @apply list-decimal text-lg px-4 md:text-2xl space-y-5;
}
</style>

<script setup>
// get current url using vue router
const currentUrl = useRoute().fullPath
const fullUrl = 'https://ilansonlineattic.com' + currentUrl

</script>