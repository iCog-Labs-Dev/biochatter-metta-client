<script setup>
import { useStore } from 'vuex';
import { computed,onMounted, ref,watch } from 'vue';
import {useRoute} from "vue-router";

let route = useRoute();
let chatInput = ref(null);
let store = useStore();
const chat = computed(() => store.state.chat);


onMounted(() => {
  // console.log("first")
  store.dispatch('getChat',{chat_id: route.params.id});
})

watch(()=> route.params.id, (newId,oldId) => {
  store.dispatch('getChat',{chat_id: route.params.id})
  console.log('watching')
  console.log(chat)
})

const sendChat = (msg) =>{
  console.log(chatInput.value)
  store.dispatch('sendChat',{msg,chat_id: route.params.id})
  store.dispatch('getChat',{chat_id: route.params.id})
}
</script>

<template>

  <!-- conversatons -->
  <div class="w-full h-full overflow-y-scroll flex flex-col gap-5 p-10">
    
    <!-- message-in -->
    <div 
    class="chat-in">
      <img 
      class="chat-image"
      src="./../assets/logo.png"
      alt="" />
    
      <p 
      @click="store.dispatch('getChat',{chat_id: route.params.id})"
      class="chat-message">
        <span class="block relative bottom-0 text-end">
          Name {{   $route.params }}
        </span>
        Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        <!-- Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        Message in Message in Message in Message in Message in Message in Message in Message in Message in  -->
        <span class="block relative bottom-0  text-end">
          Sep 20, 2022
        </span>
      </p>

    </div>

    <!-- message-out -->
    <div 
    v-for="i in 1"
    class="chat-in chat-out">
      <img 
      class="chat-image"
      src="./../assets/logo.png"
      alt="" />
    
      <p class="chat-message">
        {{ chat }}
        <!-- Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        Message in Message in Message in Message in Message in Message in Message in Message in Message in 
        Message in Message in Message in Message in Message in Message in Message in Message in Message in  -->
      </p>
    </div>

  </div>
          <!-- stop loading -->
        <div class="group scale-1 transition-all duration-300 w-1/4 flex items-center absolute bottom-[120px] left-1/2 -translate-x-1/2">
            <p class="input-style px-5 text-center flex items-center gap-1 p-1 rounded-full">
              <fa class="coutline outline-1 aspect-square rounded-full p-2" icon="xmark" />
             <span>
               Stop Loading
              </span>
            
            </p>
          <!-- <input 
            class="placeholder-white/40 input-style pr-12  relative w-full rounded-full  h-fit p-4" type="text"
            placeholder="Ask me a question">

              <fa class="inline cursor-pointer text-2xl absolute text-white right-0 hover:bg-white origin-center duration-200 hover:text-black/50 h-6 rounded-full p-4" icon="arrow-right" /> 
            
            </input> -->
        </div>

          <!-- input -->
        <form 
        @submit.prevent="sendChat"
        class="group w-3/4 flex items-center absolute bottom-[50px] left-1/2 -translate-x-1/2">
            <input 
            class="placeholder-white/40 input-style pr-12  relative w-full rounded-full  h-fit p-4" 
            ref="chatInput"
            type="text"
            placeholder="Ask me a question">

              <fa 
              @click="sendChat('hello')"
              class="inline cursor-pointer text-2xl absolute text-white right-0 hover:bg-white origin-center duration-200 hover:text-black/50 h-6 rounded-full p-4" icon="arrow-right" /> 
            
            </input>
        </form>
</template>

<!-- <div class="group flex items-center flex-col absolute bottom-[50px] left-1/2 -translate-x-1/2 pr-3 ">

  <div class="translate-y-10 p-5 hidden group-hover:visible"><fa icon="ban" /> stop loading</div>
  <div class="input flex items-center gap-3  outline outline-1 outline-white rounded-full overflow-hidden ">
  <input placeholder="Ask me a question" class="placeholder-white-700/40 text-slate-700 outline-none h-fit p-4 w-full bg-white backdrop-filter backdrop-blur-md" type="text">
  <div class="p-3"> <fa icon="paper-plane" /> </div>
  </div>
</div> -->