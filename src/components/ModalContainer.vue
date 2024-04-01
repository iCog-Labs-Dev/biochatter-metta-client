<!-- v-if="isModalSettings" @click="(event) => {isModalSettings = false;}"  -->

<script setup>
// const{isVisible} = defineProps(['isVisible']) @click=" isVisible = !isVisible"  
let {modelValue,title} = defineProps(['modelValue','title'])
</script>

<template>
    
    <div class="backdrop backdrop-blur-[8px] w-full h-full absolute z-20">
        <div class="modal flex flex-col overflow-hidden outline outline-1 outline-gray-500 bg-card bg-slate-900 backdrop-blur-[16px] text-white w-[90%] md:w-1/2 h-fit  rounded-2xl absolute m-auto inset-0 ">
            <div class="flex justify-between items-center p-5 border-b border-gray-600 ">
                <p class="font-bold text-2xl">{{title}}</p>
                <fa class="self-end text-2xl hover:bg-white hover:text-black p-2 rounded-full aspect-square"
                 @click="$emit('update:modelValue',modelValue = !modelValue)" 
                 icon="xmark" />
            </div>
            <!-- <p class="hover:bg-slate-50/50 p-5">visible: {{modelValue}}</p> -->

      <!-- <div class="modal overflow-hidden boutline flex  w-full h-fit bg-slate-500/90 rounded-2xl absolute m-auto inset-0 "> -->
        <slot />
        </div>
      <!-- </div> -->
    </div>
</template>