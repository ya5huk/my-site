<template>
    <div class="container flex flex-col">
        <Headline page-title="Pic·​tures" />

        <div class="divide-y divide-black">
            <PictureBlock v-for="is in imageStories" :image-story="is" />
        </div>

        <nuxt-link class="btn" to='/'>back home</nuxt-link>

    </div>
</template>

<script lang="ts" setup>
import PictureBlock, { type ImageStory } from '~/components/PictureBlock.vue';

const pageDesc = "This must be the most vibe page on this website. Here are pictures of me. "
const pageTitle = "Ilan Yashuk: Pictures"
const pageImage = '/site-icon.png'
const pageUrl = 'https://ilansonlineattic.com/pictures'

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

const imageStories: ImageStory[] = [
    {
        title: 'Grass in Beersheba!',
        description: `You see, a normal person would think I am pointing to the sunset. Well, it is just a sunset isn't it? The grass though...`,
        image: '/me/grass-in-bs.JPG',
        date: 'Feb 27th, 2025'
    },
    {
        title: 'Sideeying on the background of the Kineret.',
        description: `My friend Oded & I walked a track from the Kinneret (the village) to Nazareth while visiting the top of
            the mountaings: Mount Tavor, Mount Dvora and Mount Yona. I, having a non-optimal bag and Oded, walking
            with soaking, torn shoes walked around 22 kilometers a day. About altitude, the first day was: 500m up
            and 300m down. The second, in total: 1km up, 480m down. `,
        image: '/me/kineret-bg.jpg',
        date: 'Dec 16th, 2024'
    },
    {
        title: 'Homeboys.',
        description: `Growing up in Beersheba we struggled to find a variaty of experiences on Friday night. At rare times the squad gathered up. At even rarer times there were pictures to look back to. This is one such moment. Shot on iphone with WEST app.`,
        image: '/me/hashnaz-homeboys.jpg',
        date: 'Nov 30th, 2024'
    },
    {
        title: 'Last day in my teens.',
        description: `The first time I seriously went out to the nature. Ron & I went on a hot September day to explore the desert located a 50-minute-ride from us. The route was circular and started at Midreshet Ben-Gurion. We went through, Hod Akev, Ein Akev and Ma'ale Divshon. It peaked at 37°C that day (98.6°F). Btw I didn't intentionally point at anything, but I did return to the place I was pointing at, Mount Tzror, 3 months later, on a cloudy short December day.`,
        image: '/me/hod-akev-first.jpg',
        date: 'Sep 13th, 2024'
    },
    {
        title: 'Volunteering in a farm in the deep, dry desert.',
        description: `An interesting experience. I went to volunteer at Kmehin, a farmers village near the Egyptian border, at the expensive cost of army vacation days. For four days, we woke up while the sun was sleeping and worked in a cherry tomato farm while it wasn't too hot. It was amazing living on the country side with such modest people. Seeing the beautiful co-existence which enabled the hard job of farming in a tough area like Kmehin gave me needed hope.`,
        image: '/me/Kmehin-Volunteering.jpg',
        date: 'Aug 15th, 2024'
    },
    {
        title: 'A random track competition.',
        description: `I was, after all, a competitive track runner and long jumper for 7 years. The lessons from professional sports are deep inrooted in my personality. Some of those lessons were: grind mentaility, consistensy, responsibility-taking, self-belief, the importance of professional mentors and much much more. My P.Bs were 6.75m in long jump (6.80w) and 11.21s in the 100m. In U16, I even broke the national record 5 times running 13.01 in the 100mH (height - 84cm). None of those records counted as all of them were made in too windy competitions (sometimes only 0.1 m/s more than the allowed wind speed). `,
        image: '/me/random-track-comp.jpg',
        date: 'May 9th, 2024'
    },
    {
        title: "The last night before October 7th, 2023.",
        description: `This picture wan't intended to receive the amount of value it has. On October 7th, 2023 my family and I were in London. We woke up to news which just didn't sound real. Our flight home was scheduled to the night of October 7th and was cancelled on the morning of that day. Seeing the news, everyone just wanted to get back home. We live in the south and so our family and friends were in real danger. We returned home on October 9th and hundreds of days full of extremely hard work and rebuild began. `,
        image: '/me/london-october-6th.jpg',
        date: 'October 6th, 2023'
    },
    {
        title: '"Can you believe Russia is in war for almost 2 years?"',
        description: 'I said that to my brother walking near the Russian embassy in London on Oct 4th, 2023. What a cruel, ironic thing to say.',
        image: '/me/russian-embassy-london.JPG',
        date: 'October 4th, 2023'
    },
    {
        title: 'The start of my first big project - Visuathlete.',
        description: `My first project, now hosted on visuathlete.com, was picturing and visualizing the results of all Israel's track and field athletes. Previous to this site, all you could see in Israel's National Athletics site was plain results table. I wanted to give a way to athletes to analyze and look at their results in a more organized, beautiful way. I actually achieved that goal and now it is a huge site with lots of content and more than 1400 athlete profiles.`,
        image: '/me/visuathlete-beggining.jpg',
        date: 'Feb 1st, 2023'
    },
    {
        title: 'My best ever track result points wise',
        description: `I ran the 60mH (99cm) in 8.28s. This was a HUGE run for me. That was the first time I ran something significantly fast after my injury. The face you see there is me in total shock. Winning the heat with a time like that was an amazing experience.`,
        image: '/me/FB_IMG_1674168968786_Original.jpeg',
        date: 'Jan 20th, 2023'
    },
    {
        title: 'ITS THE PROM BABYYY!',
        description: `I was not a school fan. Starting from around 11th grade I felt like it was way too potential limiting and that I could learn and do so much more than just sit most of my day. I was happy school ended.`,
        image: '/me/prom.webp',
        date: 'July 6th, 2022'
    }
]

</script>
