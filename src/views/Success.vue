<script setup>

import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);

const handleSubmit = ()=>{
    // const { planName, planAmount, planDuration} = planChoice.value

    // if(planName && planAmount && planDuration){
        store.dispatch("completeStep" )
    // }else{
    //     error.value =true
    // }
}
</script>

<template>
  <div class="flex flex-col w-full h-full">
    
    <div class="flex flex-col gap-y-4 h-full justify-center items-center p-20">
      
      <div>
        <span class="text-color-primary-marine-blue font-bold text-2xl">Success!</span>
      </div>
      
      <div>
        <p class="text-center text-color-cool-gray text-lg">
          Your Schema has successfully been uploaded
        </p>
      </div>
    
    </div>
  
  </div>

  <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />


</template>
<style></style>
