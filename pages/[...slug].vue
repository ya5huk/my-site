<template>
    <main>
        <ContentDoc>
            <template v-slot="{ doc }">

                <Head>
                    <Meta name="og:title" :content="doc.title" />
                    <Meta name="og:description" :content="doc.description" />
                    <Meta name="og:image" content="" />
                    <Meta name="og:url" content="" />
                    <Meta name="og:type" content="article" />
                    <Meta name="og:site_name" content="" />
                    <Meta name="twitter:card" content="summary_large_image" />
                    <Meta name="twitter:title" :content="doc.title" />
                    <Meta name="twitter:description" :content="doc.description" />
                    <Meta name="twitter:image" content="" />

                </Head>
                <article class="container">
                        <h1 dir="auto">{{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                </article>
            </template>
            <template #empty>
                <h1>Document not found</h1>
                <p>The page you were trying to access wasn't found.</p>
            </template>
        </ContentDoc>

    </main>
</template>

<script setup>
const { data } = await useAsyncData('hello', () => queryContent('/hello').findOne())
</script>