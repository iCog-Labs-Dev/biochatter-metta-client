<script setup lang="ts">

import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';


const store = useStore();

</script>

<template>
    <div>
        <button class="hover:bg-gray-400 rounded-2xl px-2 text-color-cool-gray hover:text-color-primary-marine-blue" @click="store.dispatch('goToPrevStep')">
        Go Back
        </button>
      </div>
</template>

<style>

</style>