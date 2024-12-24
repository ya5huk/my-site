<template>
    <div class="container flex flex-col">
        <div class="flex justify-between items-center">
            <h1 class="">A·bout</h1>
            <nuxt-link class="btn" to='/'>back home</nuxt-link>
        </div>
        <div class="divide-y divide-black">
            <div class="space-y-2 pb-5">
                <h2>Background</h2>
                <p>My name's Ilan Yashuk, {{ myAge }}. I was born in South Israel, Beersheba.
                    I speak, read 'n write in: Hebrew, English and Russian.
                    <br><br>
                    I
                    always loved to <span class="underline">create</span>. I
                    iterated through Minecraft redstone, photography, filmmaking and even beginner level carpentry.
                    Finally,
                    at
                    7th class I got into <span class="underline">programming</span>. It felt like unlimited power in my
                    hands
                    and the potential
                    seemed limitless. I still think
                    programming & software might be the easiest way to influence people en masse and drive a good
                    change.
                    <br><br>
                    I like stories. I like complicated subjects and interacting with people. I think a man can talk his
                    way out to the biggest of leagues only because the power of stories. That's why I try to take every
                    opportunity I have to meet with people, to talk with those who think differently than me, to go on
                    hiking & travelling adventures.

                    <br><br>

                    My schedule's always full and even though it gets rough, happines comes from having a full todo list
                    and not from striking a line through a written goal with a pencil. Happines is the list.

                </p>
            </div>
            <div class="space-y-2 py-5">
                <h2>Education</h2>
                <p>
                    <span class="underline">Highschool</span>: Very high grades on 5-unit level tests on (Israel's way
                    of dividing high school
                    subject complexity)
                    Math, Physics,
                    English and 10-unit Computer Science.
                    <br><br>
                    <span class="underline">Bonus</span>: I was part of a 3-year Computer Science Program made for
                    periphary high school teens. I
                    learned and practiced OS systems, C++, Python, Assembly and tackled with a lot of self-learning
                    exercises.
                </p>
            </div>
            <div class="space-y-2 py-5">
                <h2>Sports</h2>
                <p>
                    Sports is a huge part of my life. My mom sent me to sport circles since I can remember. Thanks to
                    that, I grew to be good at a huge variaty of things. Also, it made sports become a part of my
                    daily routine, without any link to motivation or mood. Going on a run for me is exactly like
                    brushing my
                    teeth twice a day.
                    <br><br>
                    Throughout the years I went through swimming, basketball, some soccer, tennis and finally: track &
                    field. In 2017, my brother competed at the 20th Maccabiah games and I thought to myself: "why not
                    me?". So I joined track and field.
                    <br><br>
                    I trained A LOT for the next 7 years. Sometimes close to 20 hours a week. I had some ups and downs. In 2019, when I was 14, I broke the national record at the
                    100mH
                    (84cm) 5 times though none of them counted as the wind was blowing too fast (sometimes only 0.1 m/s
                    above the allowed 2.0 m/s speed). In March of '20 I got injured and didn't fully recover until my
                    '23
                    season. To be honest I think this full recovery is my biggest accomplishment. Picking yourself up
                    after such a long time of being injured and just turning the wheel: that felt awesome!

                    I went on and broke most of my personal records in the '23 season. I ran 11.21 in Nationals and
                    jumped 6.75m
                    (6.80w) finishing 7th.
                    <br><br>
                    To summarize, I gave sports my all while I was in middle to high school. I was a good student and
                    well socialized so balancing everything was my biggest life lesson. I also gave Israel's track &
                    field the site <nuxt-link class="underline"
                        to="https://visuathlete.com">visuathlete.com</nuxt-link>.

                    <br><br>
                    My dreams and aspirations were bigger
                    than what I've accomplished. I was national champion or medalist lots of times while being in
                    different age groups but I always dreamt of being on big stages such as the European Championships.
                    I
                    dreamt of flying abroad regularly to do the thing I love so much: jumping to a sand pit.
                    <br>
                    At the end, enlisting to the army made everything harder and I just became too busy and too caught
                    up
                    to advance in a thing that <span class="underline">requires all of you</span> and not some of you.

                    <br><br>
                    I still hope to be on the biggest of stages, but doing another thing I love: <span
                        class="underline">innovation</span> & <span class="underline">creation</span>.

                </p>
            </div>
            <div class="space-y-2 py-5">
                <h2>Projects</h2>
                <p>
                    I've done a lot in the past years when it comes to creating websites, apps and different projects of
                    that sort. You can read about it
                    in <nuxt-link to="/portfolio" class="underline">here.</nuxt-link> </p>
            </div>

        </div>
        <nuxt-link class="btn" to='/'>back home</nuxt-link>

    </div>
</template>

<script lang="ts" setup>
const nowYear = new Date().getFullYear();
const myAge = nowYear - 2004;

const pageDesc = "About me."
const pageTitle = "Ilan Yashuk: About"
const pageImage = '/site-icon.png'
const pageUrl = 'https://ilansonlineattic.com/about'

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

</script>

<style lang="postcss" scoped>
h2 {
    @apply text-2xl;
}
</style>
