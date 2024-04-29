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
        
        <div v-for="(i, index) in ['Select All Nodes', 'Select All Edges']" class="w-full py-2  p-5">
            <input type="checkbox"
             class="
             peer relative float-left mr-5 mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none 
             before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[``] 
             checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] 
             checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] 
             hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 
             focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] 
             checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] 
             checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid 
             checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
             id={{index}} />
             <!-- <input type="checkbox"
             class="appearance-none border border-solid border-secondary-500 outline-none border-2 rounded-xl h-4 aspect-square" 
             /> -->
        <label for={{index}}> {{i}} </label>    
        </div>
        
    </div>

    <div class="coutline outline-red-500  w-full h-96 flex flex-row flex-1">
    
    <div v-for="i in 1" class="flex-1 overflow-y-scroll">
        <div v-for="i in 20"
        class="flex flex-1">

            <div
                class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full outline outline-1 outline-white p-5">
                <input 
                type="checkbox" 
                class="mr-5 border  outline-none border-red-500 bg-black" 
                name="" :id={index}>
                <label :for={index}>Nodes</label>
            </div>

        </div>
    </div>

    <div v-for="i in 1" class="flex-1 overflow-y-scroll">
        <div v-for="i in 20"
        class="flex flex-1">

            <div
                class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full outline outline-1 outline-white p-5">
                <input type="checkbox" class="mr-5" name="" :id={index}>
                <label :for={index}>Edges</label>
            </div>

        </div>
    </div>

        <!-- <div class="bg-red-500 h-full w-full"></div> -->
    </div>

    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>