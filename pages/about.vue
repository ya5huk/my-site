<template>
    <div class="container">
        <h1 class="">About</h1>
        <div class="divide-y divide-black">
            <div class="space-y-2 pb-5">
                <h2>Background</h2>
                <p>My name is Ilan Yashuk, {{ myAge }}. I was born in South Israel, Beersheba. I always loved to <span
                        class="underline">create</span>. I
                    iterated through Minecraft redstone, photography, filmmaking and even beginner level carpentry.
                    Finally,
                    at
                    7th class I got into <span class="underline">programming</span>. It felt like unlimited power in my
                    hands
                    and the potential
                    seemed limitless. I still think
                    programming might be the easiest way to influence people en masse and drive a good change.
                    <br><br>
                    I like stories. I like complicated subjects and interacting with people. I think a man can talk his
                    way out to the biggest of leagues only because the power of stories. That's why I try to take every
                    opportunity I have to meet with people, to talk with those who think differently than me, to go on
                    hiking & travelling adventures.

                    <br><br>

                    My schedule's always full and even though it gets rough, happines comes from having a full todo list
                    and not from striking through a written goal with a pencil. Happines is the list.

                </p>
            </div>
            <div class="space-y-2 py-5">
                <h2>Education</h2>
                <p>
                    <span class="underline">Highschool</span>: 5-unit-level (Israel's way of dividing high school
                    subject complexity)
                    Math, Physics,
                    English and 10-unit Computer Science.
                    <br><br>
                    <span class="underline">Bonus</span>: I was part of a 3-year Computer Science Program made for
                    periphary high school teens. I
                    learned intro to OS systems, C++, Python, Assembly and tackled with a lot self-learning long
                    exercises.
                </p>
            </div>
            <div class="space-y-2 py-5">
                <h2>Sports</h2>
                <p>
                </p>
            </div>
            <div class="space-y-2 py-5">
                <h2>Projects</h2>
                <p>
                    I've done a lot in the past years when it comes to creating websites, apps and different projects of
                    that sort. You can read about it
                    in <nuxt-link to="/professional_timeline" class="underline">here.</nuxt-link> </p>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
const nowYear = new Date().getFullYear();
const myAge = nowYear - 2004;

</script>

<style lang="postcss" scoped>
h2 {
    @apply text-2xl;
}
</style>