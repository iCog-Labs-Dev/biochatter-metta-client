

<template>
  <!-- <input class="peer absolute inset-0 md:hidden" type="checkbox"> -->
  
  <!-- modal -->
  <div 
  v-if="isModalVisible" 
  @click="toggleModal"
  class="backdrop bg-black/50 w-full h-full absolute m-auto inset-0 z-20 ">
  
    <div class="modal overflow-hidden boutline flex  w-96 h-fit bg-slate-500/90 rounded-2xl absolute m-auto inset-0 ">
      <div class="boutline outline-red-500 cursor-pointer flex flex-col justify-center gap-3 boutline-1 overflow-y-scroll h-full w-1/2">
        <p class="hover:bg-slate-50/50 p-2">General</p>
        <p class="hover:bg-slate-50/50 p-2">Profile</p>
        <p class="hover:bg-slate-50/50 p-2">language</p>
      </div>
      
      <div class="boutline  border-black border-l-2 outline-1 outline-red-500 overflow-y-scroll p-3 w-full  h-fit">
        Model Name
      </div>
    
    </div>
  
  </div>


  <div class="bg-logo bg-no-repeat bg-cover bg-fixed bg-center capitalize overflow-hidden  md:flex flex-1 gap-5 md:gap-3 lg:gap-5s md:p-5 w-screen h-screen">

    <!-- chat navigation -->
    <div class="w-full h-full md:w-1/3 lg:w-1/4 flex flex-col text-white text-center">
      <div class="w-full h-full rounded-xl backdrop-filter backdrop-blur-sm houtline goutline-1 goutline-white flex flex-col gap-5 bg-slate-900/50 dborder-b">
        <div class="text-start flex items-center gap-4 m-auto pt-5">
          <img class="w-10" src="./assets//logo.png" />
          <span class="text-2xl font-bold">BioChatter-MeTTa</span>
        </div>
        
        <!-- <div class="bg-white/20 text-white/40 overflow-hidden flex p-3 rounded-full capitalize gap-16 justify-around  items-center "> 
          <div class="flex items-center gap-5">
            <fa class="" icon="search"/>
            <span class="text-white/40">
              search
            </span>
          </div>
          
          <fa class="text-white/40" icon="xmark"/>
        </div> -->

        <!-- search -->
        <div class="group flex  items-center relative rounded-full  overflow-hidden">
            <input 
            class="placeholder-white/40 bg-white/10 backdrop-filter pl-10 pr-12 backdrop-blur-md relative w-full rounded-full text-white-700 outline-none border-[2px] border-white h-fit p-2" type="text"
            placeholder="Search">

              <fa class="cursor-pointer text-white absolute hover:bg-white origin-center duration-200 hover:text-black/50 h-4 rounded-full p-3" icon="search" /> 
              <fa class="cursor-pointer text-white absolute right-0 hover:bg-white origin-center duration-200 hover:text-black/50 h-4 rounded-full p-3" icon="xmark" /> 
            
            </input>
        </div>

        <!-- <div class="bg-white/20 text-white/40 overflow-hidden flex p-3 rounded-full capitalize gap-5 pl-10"> 
        
          <fa icon="rotate-left"/>
          <span>
            clear all chats
          </span>
        </div> -->

                <!-- search -->
        <!-- <div class="group flex items-center  bottom-[50px] left-1/2 ">
          <input 
            class="placeholder-white/40 bg-white/50 backdrop-filter pl-14 backdrop-blur-md relative w-full rounded-full text-white-700 outline-none border-[2px] border-white h-fit p-4" type="text"
            placeholder="Clear all chats">

              <fa class="inline cursor-pointer text-x text-white absolute left-5 hover:bg-white origin-center duration-200 hover:text-black/50 h-6 rounded-full p-4" icon="rotate-left" /> 
            
            </input>
        </div> -->

        

        <div class="cont boutline items-center outline-1 flex flex-col flex-1 overflow-y-scroll [scrollbar-width:none] overflow-x-hidden h-5/6">
          
          <div class="flex gap-5 p-10 justify-center items-center w-full h-10">
            <hr class="w-1/3">
            Today
            <hr class="w-1/3">
          </div>
          
          <router-link class="w-full" v-for="i in 10" :to="{name:'chat'}" >
            <div class="card p-3 text-center md:text-start hover:bg-white/40 ">
              
              <div class="w-full boutline flex gap-5 justify-between items-center p-1">
                <p class="boutline text-start w-full">
                  <span class="block font-medium bwhitespace-nowrap text-ellipsis overflow-hidden text-lg boutline outline-blue-600 bw-[20ch] md:bw-[8ch] lg:bw-[25ch]">
                    Chat Name
                  </span>
                  <span class="text-slate-400 md:text-sm font-light py-2">10:23 AM</span>
                </p>
                
                <div class="hover:bg-white/40 bg-white/20 px-3 py-1 rounded-full">
                  <fa icon="broom" />
                </div>

              </div>
              <!-- <div class="outline outline-red-500 w-fit m-auto flex gap-14 md:justify-between items-center">
                <p class="font-medium whitespace-nowrap text-ellipsis overflow-hidden text-lg md:inline boutline outline-blue-600 w-[20ch] md:w-[8ch] lg:w-[25ch]">
                  Chat Name Chat NameChat NameChat NameChat NameChat NameChat Name
                  <span class="text-slate-400 block md:text-sm md:hidden lg:block font-light">
                    10:23 AM
                  </span>
                </p>
                
                <div class=" flex flex-row group boutline outline-lime-500 group">
                  
                  <p class="text-slate-400 md:text-sm hidden lg:hidden font-light  lg:inline px-5 py-2">
                    10:23 AM
                  </p>
                  
                  <div class=" items-center mmd:opacity-0 md:group-hover:opacity-1 gap-2 w-fit self-center hover:bg-white/40 bg-white/20 px-3 py-1 rounded-full"> 
                    <fa icon="broom" />
                  </div>
                </div>
              
              </div> -->

            </div>
          </router-link>
          
        </div>

        <div class="buttons gap-12 odutline odutline-1 self-center h-16 text-2xl lg:text-2xl outline-white px-10 fmd:px-10 rounded-full flex justify-between items-center ">
          
          <router-link :to="{name:'topics'}">
            <!-- <fa icon="home" /> -->
            <fa icon="folder-plus" />
          </router-link>
          <router-link :to="{name:'chat'}">
             <!-- <fa class="bg-white text-black p-2 aspect-square rounded-full" icon="plus" /> -->
             <fa class="bg-white text-black p-2 aspect-square rounded-full" icon="home" />
             <!-- <fa class=" p-2 aspect-square rounded-full" icon="home" /> -->
          </router-link>
          <router-link :to="{name:'settings'}">
            <fa icon="gear" />
          </router-link>
        </div>
      </div>
    </div>


    <!-- pages -->
    <div
    :class="{'-translate-y-full md:translate-y-0': !show}" 
    class="flex flex-col flex-1 rounded-xl backdrop-filter backdrop-blur-[8px] text-white joutline joutline-1 ojutline-white relative  h-full transition-transform duration-200 bg-slate-900/50  ">
    <!-- class="flex flex-col flex-1 rounded-xl backdrop-filter backdrop-blur-[8px] text-white joutline joutline-1 ojutline-white relative md:translate-y-0 h-full transition-transform duration-200 bg-slate-900/50  "> -->
      <div class="text-white/40 heading flex justify-between border-b-0 h-fit py-2 px-4">
        <p class="capitalize">
          title
        </p>

        <div class="flex gap-5 text-white/40 items-center">

          <!-- <div class=" flex items-center gap-2 hover:bg-white/40 bg-white/20 px-3 py-2 rounded-full"> 
            <fa icon="broom" />
            Clear Chat
          </div> -->
          
          <!-- <div> -->
            <fa 
            class="aspect-square bg-white/20 hover:bg-white/40 rounded-full p-3" 
            icon="question"/>
          <!-- </div> -->
          <!-- <div> -->
            <fa 
            @click='toggleShow'
            class="aspect-square md:hidden cursor-pointer bg-white/20 hover:bg-white/40 rounded-full p-3" 
            icon="xmark"/>
          <!-- </div> -->
        </div>
      </div>
    
      <router-view />


    </div>

  </div>

</template>

<script setup>
let show = false
let isModalVisible = false


const toggleModal = () =>{
  isModalVisible = !isModalVisible
  console.log({isModalVisible})
}
const toggleShow = () =>{
  show = !show
  console.log({show})
}
</script>

<style scoped>

</style>
