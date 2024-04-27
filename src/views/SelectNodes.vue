<script setup>
import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);

const handleSubmit = ()=>{
    // const { planName, planAmount, planDuration} = planChoice.value

    // if(planName && planAmount && planDuration){
        store.dispatch("proceedToNextStep","entities" )
    // }else{
    //     error.value =true
    // }
}

</script>

<template>

    <div class="w-full sticky top-0 flex outline outline-1 justify-start">
        
        <p v-for="i in ['Select Nodes', 'Select Nodes']" class="w-full py-2  p-5">
            <input type="checkbox" class="mr-5" name="" >
            <label> {{i}} </label>    
        </p>
        
    </div>

    <div class="outline outline-red-500 overflow-scroll w-full h-96 flex flex-row flex-1">
    
    <div v-for="i in 2" class="flex-1">
        <div v-for="i in 20"
        class="flex flex-1">

            <div
                class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full outline outline-1 outline-white p-5">
                <input type="checkbox" class="mr-5" name="" :id={index}>
                <label :for={index}>label</label>
            </div>

        </div>
    </div>
        <!-- <div class="bg-red-500 h-full w-full"></div> -->
    </div>

    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>