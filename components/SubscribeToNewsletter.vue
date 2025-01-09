<template>
    <div :dir="lang.includes('he') ? 'rtl' : 'ltr'" class="border-y border-black py-5 space-y-5">
        <p>
            <span class="text-4xl">א</span>
            ם אתם רוצים עוד מהמוח המוזר שלי, אתם יכולים להירשם כאן ותקבלו מייל בכל פעם
            שיעלה תוכן חדש לאתר (לא כולל התכנים <nuxt-link to="/blog">מקצועיים</nuxt-link>).
        </p>
        <div class="flex gap-5 items-center">
            <input type="email" placeholder="מייל" v-model="mailInput">
            <button @click="addNewContact" type="button" class="btn">הרשם!</button>
        </div>
        <small class="text-xs">בידקו שקיבלתם מייל הירשמות!</small>
    </div>


</template>

<script lang="ts" setup>

const mailInput = ref('')

const props = defineProps<{
    lang: string
}>()

const addNewContact = () => {

    useFetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail: mailInput.value,
            lang: props.lang
        })
    })
}


</script>
