<script setup>
import { useStore } from 'vuex'
import { computed, onMounted,ref } from 'vue'

const store = useStore()
let chatInput = ref(null);

const topics = computed(() => store.state.topics)

const startNewChat = (data) => {

    if (data){
        
        // alert(data)
        store.dispatch('startNewChat',data)
        // return
    }
    // let msg = chatInput.value.value
    // store.dispatch('startNewChat',msg)
    // console.log(i)
    // store.dispatch('startNewChat',i)
    // store.dispatch('loadChatList')
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
        @click="startNewChat(i.example_text)"
        class="card input-style relaive items-end  overflow-hidden hover:bg-white hover:text-black  cursor-pointer
               group  transition-all duration-700 rounded-2xl p-4">
            
            <p class="w-full inline h-full group-hover:scale-200"> 
                {{ i.example_text }}
            </p>
        </div>
    </div>

    <div 
        class="group w-3/4 flex items-center absolute bottom-[50px] left-1/2 -translate-x-1/2">
            <input 
            class="placeholder-white/40 input-style pr-12  relative w-full rounded-full  h-fit p-4" 
            ref="chatInput"
            type="text"
            @keypress.enter="startNewChat"
            placeholder="Ask me a question">

              <fa 
              @click="startNewChat"
              class="inline cursor-pointer text-2xl absolute text-white right-0 hover:bg-white origin-center duration-200 hover:text-black/50 h-6 rounded-full p-4" icon="arrow-right" /> 
             
            </input>
        </div>

</template>