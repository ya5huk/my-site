---
title: 'Creating a cute hamburger menu with vuejs & tailwindcss'
image: '/blog-images/hamburger-tailwindcss.webp'
lang: 'en_US'
date: '03/23/2024'
---
Hey! This is another short article that I thought I’ll publish because I know that if I came across an article similar to this one, I would save some important development time.

Here is how the end result will look. Colors and icons are of course left to your choice.

![The Hamburger we'll create](/blog-images/hamburger-tailwindcss-example.png)

Let’s start from the html.

We’ll start from the hamburger button (the 3 horizontal lines). We’ll create a button which will include three `<span>` tags stretching to the width of the button. We’ll use flex and rounding, as well as hover effect to make it look modern and arranged. Don’t mind the toggleMenu function, we’ll talk about it later.

```
<button @click="toggleMenu" value="hamburger" class="flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400">
  <!-- Hamburger Icon (3 lines) -->
  <span class="h-0.5 rounded bg-gray-600 w-full"></span>
  <span class="h-0.5 rounded bg-gray-600 w-full"></span>
  <span class="h-0.5 rounded bg-gray-600 w-full"></span>
</button>
```

Now let’s focus on the menu items. We use icons to make the website more universal and user-friendly. These icons will be in the same `<div>` as the `<button>` we just created (to create that circling effect). We’ll wrap them in `<template>` in order to toggle their visibility with only one variable and group element attribute. The css class `item-animation` will be later used to create a pop-up animation Here is the code:

```
<template v-if="isMenuOpen" class="text-2xl ">

  <!-- Menu Items -->
  <a class="item-animation p-2 self-center bg-gray-500 rounded-full" href="/">🏠</a>
  <a class="item-animation p-2.5 self-center bg-gray-400 rounded-full" href="/leaderboard">🏆</a>
  <a class="item-animation p-1 self-center bg-gray-300 rounded-full" href="/calculator">🧮</a>

</template>
```

These icons will be shown only if our button is clicked.

Next is our parent div that’ll hold the button and menu items together. We’ll use flex-wrap “tailwindcss” class to create the second line of items (otherwise all the icons will be in the same line as the button and we won’t have the circling effect). We’ll use fixed so when the logos will expand, they won’t expand the page.

Here is the full HTML code:

```
<div class="flex flex-wrap w-32 gap-4 fixed">
  <button @click="toggleMenu" value="hamburger" class="flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400">
    <!-- Hamburger Icon (3 lines) -->
    <span class="h-0.5 rounded bg-gray-600 w-full"></span>
    <span class="h-0.5 rounded bg-gray-600 w-full"></span>
    <span class="h-0.5 rounded bg-gray-600 w-full"></span>
  </button>
    <template v-if="isMenuOpen" class="text-2xl ">
      <!-- Menu Items -->
      <a class="item-animation p-2 self-center bg-gray-500 rounded-full" href="/">🏠</a>
      <a class="item-animation p-2.5 self-center bg-gray-400 rounded-full" href="/leaderboard">🏆</a>
      <a class="item-animation p-1 self-center bg-gray-300 rounded-full" href="/calculator">🧮</a>
    </template>
</div>
```

To make the icons pop up only when we click on the button we’ll create the toggleMenu super-simple function. Here’s our script:

```
<script setup lang="ts">

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

</script>
```

And for the *crème de la crème* we’ll add an animation that makes them pop up in different speeds. Here’s our `<style>`:

```
<style scoped>

@keyframes itemanim {
    from {
        scale: 0%
    }

    to {
        scale: 100%
    }
}

.item-animation {
    animation-name: itemanim;
}

.item-animation:nth-child(4) {
    animation-duration: 0.8s;
}

.item-animation:nth-child(2) {
    animation-duration: 0.4s;
}

.item-animation:nth-child(3) {
    animation-duration: 1.2s;
}

</style>
```

And here is the final code of the vuejs element, which can be found [here](https://gist.github.com/ya5huk/62ed5392b57c93d896705eaddbca956b) as well:

```
<template>
    <div class="flex flex-wrap w-32 gap-4 fixed">
        <button @click="toggleMenu" value="hamburger" class="flex flex-col justify-around
        h-8 w-8 p-1 rounded
        hover:bg-gray-400">
            <!-- Hamburger Icon (3 lines) -->
            <span class="h-0.5 rounded bg-gray-600 w-full"></span>
            <span class="h-0.5 rounded bg-gray-600 w-full"></span>
            <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        </button>
        <template v-if="isMenuOpen" class="text-2xl ">
            <!-- Menu Items -->

            <a class="item-animation p-2 self-center bg-gray-500 rounded-full" href="/">🏠</a>
            <a class="item-animation p-2.5 self-center bg-gray-400 rounded-full" href="/leaderboard">🏆</a>
            <a class="item-animation p-1 self-center bg-gray-300 rounded-full" href="/calculator">🧮</a>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

</script>

<style scoped>
@keyframes itemanim {
    from {
        scale: 0%
    }

    to {
        scale: 100%
    }
}

.item-animation {
    animation-name: itemanim;
}

.item-animation:nth-child(4) {
    animation-duration: 0.8s;
}

.item-animation:nth-child(2) {
    animation-duration: 0.4s;
}

.item-animation:nth-child(3) {
    animation-duration: 1.2s;
}
</style>
```

This menu bar is super-simple but no one will care as long as it works.

Functionality > Beauty.

