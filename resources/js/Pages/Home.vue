<script setup>
import { switchTheme } from "../theme";
</script>

<template>
    <header>
        <p>This is a simple starter kit for Laravel 11, Inertia JS, and Vue JS, without authentication. Tailwind and ZiggyVue are installed.</p>
        <button
            @click="switchTheme"
            class="md:mr-5 hover:bg-slate-700 w-6 h-6 grid place-items-center rounded-full 
            hover:outline outline-1 outline-white" 
          >
            <i class="fa-solid fa-circle-half-stroke"></i> 
        </button>
    </header>
</template>