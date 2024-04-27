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

    <p>Select Field</p>
    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>