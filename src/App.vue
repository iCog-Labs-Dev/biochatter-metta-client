<script setup>
// import { RouterLink } from 'vue-router';

</script>'
<template>
  <div class=" bg-logo bg-no-repeat bg-cover bg-fixed bg-center backdrop-blur-md capitalize overflow-hidden  md:flex  flex-1 gap-5 p-2 md:p-5 w-screen h-screen">

    <input class="peer absolute inset-0 md:hidden" type="checkbox">
    

    <!-- chat navigation -->
    <div class="w-full h-full rounded-xl backdrop-filter backdrop-blur-md text-white  outline outline-1 outline-white flex flex-col text-center gap-5 md:w-1/3 md:h-full  bg-black/50 border-b p-5">
      <button class="bg-white/50 rounded-2xl p-3 capitalize"> search</button>
      <button class="bg-white/50 rounded-2xl p-3 capitalize"> clear all chats </button>
      <router-link :to="{ name: 'chat' }">Settings</router-link>
      <div class="flex gap-5 flex-1 justify-center items-center w-full h-10">
        <hr class="w-1/3">
        chats
        <hr class="w-1/3">
      </div>

      <div class="cont overflow-y-scroll outline outline-1 rounded-3xl overflow-hidden  h-5/6">
        
        <div 
        v-for="i in 10"
        class="card p-5 text-center md:text-start hover:bg-slate-900/10 ">
          <p class="text">
            <span>
              Chat Name
            </span>
            <span>
              10:23 AM
            </span>
          </p>
        </div>
        
      </div>

      <div class="buttons outline outline-1 outline-white rounded-full flex justify-around items-center h-20">
        <router-link :to="{name:'topics'}">Topics</router-link>
        <router-link :to="{name:'chat'}">New chat</router-link>
        <router-link :to="{name:'settings'}">Setting</router-link>
      </div>
    </div>

    <!-- pages -->
    <div class="flex flex-col flex-1 rounded-xl text-white outline outline-1 outline-white relative md:translate-y-0 h-full transition-transform duration-200 bg-black/50 peer-checked:-translate-y-full md:peer-checked:translate-y-0 w-full translate-y-full">
      <div class="heading flex justify-between border-b-2 h-fit py-2 px-4">
        <p>
          title
        </p>

        <div class="flex gap-5">
          <button>Clear</button>
          <button>help</button>
        </div>
      </div>
    
      <router-view />


    </div>

  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
