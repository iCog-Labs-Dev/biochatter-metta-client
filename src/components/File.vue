<script setup>
import Stepper from './Stepper.vue';
import Success from '../views/Success.vue';

import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import ButtonContainer from './ButtonContainer.vue';
import Confirm from '../views/Confirm.vue';
import SelectNodes from '../views/SelectNodes.vue';
import SelectField from '../views/SelectField.vue';
import Summary from '../views/Summary.vue';



const store = useStore();
const multiStep = computed(() => store.state.multiStep);

const handleSubmit = ()=>{
    // const { planName, planAmount, planDuration} = planChoice.value

    // if(planName && planAmount && planDuration){
    //     multistepStore.proceedToNextStep(planChoice.value, NextActionProp.PLAN)
    // }else{
    //     error.value =true
    // }
}

onMounted(()=>{
    // console.log('chatList',chatList)
})

</script>

<template>
    <div class=' coverflow-scroll w-full grid place-items-center bg-color-light-gray' >

                <Stepper/>
            
                <template v-if="multiStep.step === 0">
                    <SelectField />
                </template>

                <template v-else-if="multiStep.step === 1">
                    <SelectNodes />
                </template>

                <!-- <template v-else-if="multiStep.step === 2">
                    <Confirm />
                </template> -->

                <template v-else-if="multiStep.step === 2"> 
                    <Success/>
                    <!-- <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" /> -->
                </template>
            
            </div>
</template>