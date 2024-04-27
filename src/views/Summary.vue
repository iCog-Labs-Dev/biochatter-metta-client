<script setup>
import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

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
</script>

<template>

    <p>Summary</p>
    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>