<script setup>
// import { RouterLink } from 'vue-router';

</script>'
<template>
  <input class="peer absolute inset-0 md:hidden" type="checkbox">
  <div class="bg-logo bg-no-repeat bg-cover bg-fixed bg-center capitalize overflow-hidden  md:flex  flex-1 gap-5 p-2 md:p-5 w-screen h-screen">


    <!-- chat navigation -->
    <div class="w-full h-full md:w-1/4 flex flex-col text-white text-center">
      <!-- <p class="p-">bio chatter</p> -->
      <div class="w-full  h-full rounded-xl backdrop-filter backdrop-blur-sm outline outline-1 outline-white flex flex-col gap-5 bg-black/50 border-b p-5">
        
        <button class="bg-white/20 text-white/40 flex justify-around gap-16 items-center rounded-full p-3 capitalize"> 
          <div class="flex items-center gap-5">
            <fa class="" icon="search"/>
            <span class="text-white/40">
              search
            </span>
          </div>
          
          <fa class="text-white/40" icon="xmark"/>
        </button>

        <button class="bg-white/20 text-white/40 flex gap-5 pl-10 rounded-full p-3 capitalize"> 
        
          <fa icon="rotate-left"/>
          <span>
            clear all chats
          </span>
        </button>

        <div class="flex gap-5 justify-center items-center w-full h-10">
          <hr class="w-1/3">
          chats
          <hr class="w-1/3">
        </div>

        <div class="cont outline outline-1 flex-1 overflow-y-scroll [scrollbar-width:none] rounded-3xl overflow-hidden  h-5/6">
          
          <router-link v-for="i in 10" :to="{name:'chat'}" >
            <div class="card p-5 text-center md:text-start hover:bg-black/80 ">
              <p class="">
                <span class="font-medium text-lg">
                  Chat Name
                </span>
                <span class="text-gray-500 font-light">
                  10:23 AM
                </span>
              </p>
            </div>
          </router-link>
          
        </div>

        <div class="buttons outline outline-1 text-sm md:text-lg lg:text-2xl outline-white px-10 md:px-10 rounded-full flex justify-around items-center h-20">
          <router-link :to="{name:'topics'}"><fa icon="home" /></router-link>
          <router-link :to="{name:'chat'}">
           <div class="bg-white p-2 w-16 flex items-center justify-center text-center aspect-square rounded-full">
             <fa class="text-black" icon="plus" />
            </div>
          </router-link>
          <router-link :to="{name:'settings'}"><fa icon="gear" /></router-link>
        </div>
      </div>
    </div>


    <!-- pages -->
    <div class="flex flex-col flex-1 rounded-xl backdrop-filter backdrop-blur-sm text-white outline outline-1 outline-white relative md:translate-y-0 h-full transition-transform duration-200 bg-black/50 peer-checked:-translate-y-full md:peer-checked:translate-y-0 w-full translate-y-full">
      <div class="text-white/40 heading flex justify-between border-b-2 h-fit py-2 px-4">
        <p class="capitalize">
          title
        </p>

        <div class="flex gap-5 text-white/40 items-center">

          <div class=" flex items-center gap-1"> 
            <fa icon="rotate-left" />
            Clear Chat
          </div>
          
          <!-- <div> -->
            <fa class="aspect-square bg-white/20 rounded-full p-1" icon="question"/>
          <!-- </div> -->
          <!-- <div> -->
            <fa class="aspect-square bg-white/20 rounded-full p-1" icon="xmark"/>
          <!-- </div> -->
        </div>
      </div>
    
      <router-view />


    </div>

  </div>

</template>

<style scoped>

</style>
