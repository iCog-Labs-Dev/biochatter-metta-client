<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const topics = computed(() => store.state.topics)
</script>

<template>
    <div class="h-full flex flex-wrap justify-center  gap-2 items-center p-10 cbg-red-600">
        
        <div v-for="i in 10"
        class="card input-style relaive items-end  overflow-hidden hover:bg-white hover:text-black  cursor-pointer
               group  transition-all duration-700 rounded-2xl p-4">
            
            <p class="w-full inline h-full group-hover:scale-200"> 
                {{topics.topics[0]}} 
            </p>
        </div>
    </div>
</template>