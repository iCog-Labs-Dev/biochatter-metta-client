
<script setup>
import {  useStore } from 'vuex';

import { ref, watch } from 'vue';
import { computed,onMounted } from 'vue';

import utils from './utils';

import Settings from './components/Settings.vue'
import ModalContainer from './components/ModalContainer.vue' 
import File from './components/File.vue';
import Help from './components/Help.vue';

import { router } from './main';

let show = ref(false);

let isModalSettings = ref(false);
let isModalFile = ref(false);
let isModalHelp = ref(false);

let scrollToTop = ref(null);

const {dateFormatter} = utils

const store = useStore();

const chatList = computed(() => store.state.chat);
const status = computed(() => store.state.status);
// const kk = computed(() => store.state);

const deleteChat = (data) =>{
  store.dispatch('delChat',data)
  store.dispatch('loadChatList')
}

onMounted(()=>{
  store.dispatch('loadChatList')

  console.log(scrollToTop.value.clientHeight,'scroll height')
  scrollToTop.value.scrollTo(-scrollToTop.value.clientHeight, -scrollToTop.value.clientHeight);
})



</script>

<template>

<!-- status/error indicator -->
  <div 
  :class="status.isPresent? 'translate-y-0':'-translate-y-[400px]'"
  class="
  transition-transform duration-700
  flex flex-col gap-10 h-fit max-h-full max-w-full p-5 rounded-md absolute m-auto left-1/2 -translate-x-1/2 top-10 
  w-1/4 cbg-slate-600 text-white input-style z-[9999999999999]">
    
  <p class="capitalize" v-if="status.isPresent"> {{ status.status.statusText }}  </p>

    <div class="actions flex justify-around">

      
      <Button
      class="bg-white text-black w-fit mx-auto p-4 capitalize rounded-xl"
      @click="store.dispatch('remStatus')">
      cancel
    </Button>
  </div>
  
  </div>
  
  <ModalContainer title="Help" v-if="isModalHelp" v-model="isModalHelp" >
    <Help      />
  </ModalContainer>

  <ModalContainer title="Settings" v-if="isModalSettings" v-model="isModalSettings" >
    <Settings      />
  </ModalContainer>

  <ModalContainer title="Upload File" v-if="isModalFile" v-model="isModalFile" >
    <File      />
  </ModalContainer>


  <div class="bg-logo bg-no-repeat bg-cover bg-fixed bg-center capitalize overflow-hidden  md:flex flex-1 gap-5 md:gap-3 lg:gap-5s md:p-5 w-screen h-screen">

    <!-- chat navigation -->
    <div class="w-full h-full md:w-1/3 lg:w-1/4 flex flex-col text-white text-center">
      <div class="w-full h-full rounded-xl bg-card houtline goutline-1 goutline-white flex flex-col gap-5 dborder-b">
        <div class="text-start flex items-center gap-4 m-auto pt-5">
          <img class="w-10" src="./assets/rejuve.png" /> 
          <span class="text-2xl font-bold">BioChatter-MeTTa</span>
        </div>

        <!-- search bar-->
        <div class="group flex  items-center relative rounded-full  overflow-hidden mx-4">
            <input 
            class="placeholder-white/40 bg-white/10 backdrop-filter pl-10 pr-12 backdrop-blur-md relative w-full rounded-full text-white-700 outline-none border-[2px] border-white h-fit p-2" type="text"
            placeholder="Search">

              <fa class="cursor-pointer text-white absolute hover:bg-white origin-center duration-200 hover:text-black/50 h-4 rounded-full p-3" icon="search" /> 
              <fa class="cursor-pointer text-white absolute right-0 hover:bg-white origin-center duration-200 hover:text-black/50 h-4 rounded-full p-3" icon="xmark" /> 

            </input>
        </div>

  
      <!-- chat list -->
        <div 
        ref="scrollToTop"
        class="cont boutline items-center outline-1 flex flex-col flex-1 overflow-y-scroll [cscrollbar-width:none] overflow-x-hidden h-5/6">
          <router-link class="w-full" v-for="(i,index) in chatList.chatList" :to="{name:'chat', params:{id:i.id}}">
            <div class="card p-3 text-center md:text-start hover:bg-white/40 ">
              
              <div class="w-full boutline flex gap-5 justify-between items-center p-1">
                <p class="boutline text-start w-full">
                  <span class="block font-medium bwhitespace-nowrap text-ellipsis overflow-hidden text-lg boutline outline-blue-600 bw-[20ch] md:bw-[8ch] lg:bw-[25ch]">
                    {{ i.chat_name }} {{ i.topic_id }}
                  </span>
                  <span class="text-slate-400 md:text-sm font-light py-2"> 
                    {{ dateFormatter(i.chat_created_at) }}
                  </span>
                </p>
                
                <div 
                @click="deleteChat({id:i.id,index})"
                class="hover:bg-red-700/80 bg-white/20 px-3 py-1 rounded-full">
                <fa icon="broom" />
                </div>

              </div>
              
            </div>
          </router-link>
          
        </div>

        <!-- navigation -->
        <div class="buttons gap-12 odutline odutline-1 self-center h-16 text-2xl lg:text-2xl outline-white px-10 fmd:px-10 rounded-full flex justify-between items-center ">
          
            <fa
            @click='isModalFile =  !isModalFile;' 
            class="cursor-pointer"
            icon="folder-plus" />
          <router-link :to="{name:'topics'}">
             <fa class="bg-white text-black/70 p-2 aspect-square rounded-full" icon="home" />
          </router-link>
            <fa @click='isModalSettings = !isModalSettings;' class="cursor-pointer" icon="gear" />
        </div>
      </div>
    </div>

    <!-- pages -->
    <div
    :class="show ? '-translate-y-full md:translate-y-0 ':'translate-y-0'" 
    class="flex flex-col flex-1 rounded-xl bg-card text-white joutline joutline-1 ojutline-white relative  h-full transition-transform duration-200  ">
      <div class="text-white heading flex justify-between border-b-0 h-fit py-2 px-4">
        <p class="capitalize">
          <!-- {{ router.currentRoute.value.fullPath.includes('chat') ? router.currentRoute.value.fullPath.split('/')[2] : 'Query to start a conversation' }} -->
          {{ router.currentRoute.value.fullPath.includes('chat') ? chatList.chatList[router.currentRoute.value.fullPath.split('/')[2]]['chat_name'].replace(' " ','') : 'Query to start a conversation' }}
        </p>

        <div class="flex gap-5 text-white/40 items-center">

            <fa
            @click='isModalHelp =  !isModalHelp;' 
            class="aspect-square bg-white/20 hover:bg-white/40 rounded-full p-3" 
            icon="question"/>
            <fa  
            @click='show = false'
            class="aspect-square md:hidden cursor-pointer bg-white/20 hover:bg-white/40 rounded-full p-3" 
            icon="xmark"/>
        </div>
      </div>
    
      <router-view />


    </div>

  </div>

</template>



<style scoped>

</style>
