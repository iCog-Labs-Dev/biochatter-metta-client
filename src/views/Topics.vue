<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
const topics = computed(() => store.state.topics)
const startNewChat = (i) => {
    console.log(i)
    store.dispatch('startNewChat',i)
    store.dispatch('loadChatList')
}

onMounted(() => {
  console.log("mounted")
  store.dispatch('loadTopics');
  console.log('topics',topics)
})

</script>

<template>
    <div class="w-full h-fit flex flex-wrap justify-start gap-10 items- p-10 cbg-red-600">
        <div 
        v-if="topics"
        v-for="i in topics.topics"
        @click="startNewChat({id:i.id,topic_name:i.topic_name})"
        class="card input-style relaive items-end  overflow-hidden hover:bg-white hover:text-black  cursor-pointer
               group  transition-all duration-700 rounded-2xl p-4">
            
            <p class="w-full inline h-full group-hover:scale-200"> 
                {{ i.topic_name }}
            </p>
        </div>
    </div>
</template>