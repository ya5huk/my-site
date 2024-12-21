<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>

// setup icon useHead
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/site-icon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

</script>