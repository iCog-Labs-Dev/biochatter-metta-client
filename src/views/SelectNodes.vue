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
        
        <div v-for="(i, index) in ['Select All Nodes', 'Select All Edges']" class="w-full   p-5">
            <input type="checkbox"
             class="check-box"
             id={{index}} />
             <!-- <input type="checkbox"
             class="appearance-none border border-solid border-secondary-500 outline-none border-2 rounded-xl h-4 aspect-square" 
             /> -->
        <label for={{index}}> {{i}} </label>    
        </div>
    </div>

    <div class="w-full flex flex-row flex-1">
        
        <div v-for="(i, index) in ['nodes', 'edges']" class="flex-1 relative">

            <label
            :for="i"
            class="absolute bottom-16 right-4 cursor-pointer input-style w-16 aspect-square rounded-full flex items-center justify-center">
    
                <input class="hidden" type="file" :name="i" :id="i">
                    
                <fa class="text-xl text-white" icon='plus' />

            </label>


            <div class="overflow-y-scroll h-[430px]">

            
                <div v-for="j in 20" class="flex flex-1">

                    <div class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full coutline outline-1 outline-white p-5">
                        
                        <input 
                        type="checkbox" 
                        class="mr-5 check-box" 
                        name="" :id={index}>
                        
                        <label :for={index}>{{i}} {{ j }}</label>
                        
                    </div>

                </div>

            </div>

    </div>

    <!-- <div v-for="i in 1" class="flex-1 overflow-y-scroll">
        <div v-for="i in 20"
        class="flex flex-1">

            <div
                class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full outline outline-1 outline-white p-5">
                <input type="checkbox" class="mr-5 check-box" name="" :id={index}>
                <label :for={index}>Edges</label>
            </div>

        </div>
    </div> -->

        <!-- <div class="bg-red-500 h-full w-full"></div> -->
    </div>

    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>