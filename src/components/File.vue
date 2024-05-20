<script setup>
import Stepper from './Stepper.vue';
import Success from '../views/Success.vue';

import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import SelectNodes from '../views/SelectNodes.vue';
import SelectField from '../views/SelectField.vue';



const store = useStore();
const multiStep = computed(() => store.state.multiStep);

onMounted(()=>{})

</script>

<template>
    <div class='coverflow-scroll bg-white/5 flex flex-col cflex-1 w-full bg-color-light-gray coutline outline-red-500 h-max relative transition-transform duration-700' >

                <Stepper/>
            
                <template v-if="multiStep.step === 0">
                    <SelectField />
                </template>

                <template v-else-if="multiStep.step === 1">
                    <SelectNodes />
                </template>

                <template v-else-if="multiStep.step === 2"> 
                    <Success/>
                </template>


            
            </div>
</template>