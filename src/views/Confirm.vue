<script setup>
import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);

const handleSubmit = ()=>{
    // const { planName, planAmount, planDuration} = planChoice.value
    // if(planName && planAmount && planDuration){
        store.dispatch("proceedToNextStep","confirm")
    // }else{
    //     error.value =true
    // }
}
</script>

<template>

    
<div class="w-full sticky top-0 flex outline outline-1 justify-start">
        
    </div>

    <div class="coutline outline-red-500  w-full h-96 flex flex-row flex-1">
    
    <div v-for="i in 1" class="flex-1 overflow-y-scroll">
        <div v-for="i in 20"
        class="flex flex-1">

            <div
                class="cursor-pointer hover:bg-white/30 h-full flex flex-col capitalize justify-start w-full outline outline-1 outline-white p-5">
                <label :for={index}>Node</label>
                <input 
                type="file" 
                class="mr-5 border outline-none " 
                name="" :id={index}>
            </div>

        </div>
    </div>

    <div v-for="i in 1" class="flex-1 overflow-y-scroll">
        <div v-for="i in 20"
        class="flex flex-1">

            <div
                class="cursor-pointer hover:bg-white/30 h-full flex flex-col capitalize justify-start w-full outline outline-1 outline-white p-5">
                <label :for={index}>Edge</label> 
                <input type="file" class="mr-5 border" name="" :id={index}>
            </div>

        </div>
    </div>

        <!-- <div class="bg-red-500 h-full w-full"></div> -->
    </div>
    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>