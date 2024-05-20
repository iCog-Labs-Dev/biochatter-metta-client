
<script setup>

let {modelValue,title} = defineProps(['modelValue','title'])

</script>

<template>
    
    <div class="backdrop backdrop-blur-[8px] w-screen h-screen absolute z-20 ">

        <div class="modal border border-white absolute mx-auto inset-0 top-[10%] flex flex-col overflow-hidden bg-card bg cbg-slate-900 backdrop-blur-[16px] text-white w-[90%] md:w-[60%] rounded-2xl h-max">
            
          <div class="flex justify-between items-center p-3 border-b border-gray-600 bg-white/5">
                <p class="font-bold text-2xl">{{title}}</p>
                <fa class="self-end text-2xl hover:bg-white hover:text-black p-2 rounded-full aspect-square"
                 @click="$emit('update:modelValue',modelValue = !modelValue)" 
                 icon="xmark" />
          </div>
          <slot />

        </div>

    </div>
</template>