<script setup>
import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);

const handleSubmit = ()=>{
    // const { planName, planAmount, planDuration} = planChoice.value

    // if(planName && planAmount && planDuration){
        store.dispatch("proceedToNextStep","dbname" )
    // }else{
        // error.value =true
    // }
}
</script>

<template>

    <!-- <p>Select Field</p> -->
    <div class="w-full h-full py-10 text-center flex flex-col gap-5">
        <input class="input-style px-5 text-center mx-5 flex items-center gap-1 p-3 rounded-full" type="text" placeholder="Create Database Name" />
        <button 
        @click="handleSubmit"
        class="bg-white text-black hover:text-white hover:bg-black/30 capitalize w-fit  mx-auto px-5 py-3 rounded-full">create</button>
        
        <p class="bg-white text-black w-full p-2 text-xl">Use an existing databse</p>
        
        <div class="flex flex-wrap gap-5 justify-center mx-5">
            <button v-for="i in 10" class="bg-white text-black p-2 rounded-full hover:text-white hover:bg-black/30 ">Genecode</button>
        </div>
    </div>
        <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>