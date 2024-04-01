<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const topics = computed(() => store.state.topics)
</script>

<template>
    <div class="overflow-y-scroll h-full flex flex-wrap gap-5 justify-center items-center p-5">
        <div class="card flex border bg-white border-black text-black p-5 rounded-2xl" v-for="i in 10">
            {{topics.topics[0]}}
        </div>
    </div>
</template>