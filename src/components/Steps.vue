<script setup >
// import { storeToRefs } from 'pinia';
// import { useMultistep } from '../store/multistep';
import { computed,onMounted } from 'vue';
import {  useStore } from 'vuex';

// const multistepStore = useMultistep()
const store = useStore();
const multiStep = computed(() => store.state.multiStep);


</script>

<template>

    <div class='flex xlg:flex-col items-center gap-y-7 w-full h-full justify-around gap-x-5  xlg:gap-x-0 '>
        <div
            v-for="stp of multiStep.stepInfo" :key="stp.stepNo" 
            @click="true && store.dispatch('seekStep',(stp.stepNo -1)) "
            class="flex flex-col justify-center items-center text-center gap-x-4">

            <div class="p-5 w-9 h-9 border-2 flex items-center justify-center   rounded-full font-medium text-lg"
                :class="multiStep?.step +1 == stp.stepNo ||( stp.stepNo === 4 && multiStep?.step === 4)  ? 'bg-white text-black transition-all duration-500' : 'text-color-primary-light-blue'">  
                {{ stp.stepNo }}
            </div>

            <div class=''>
                <div class=' text-color-primary-pastel-blue text-sm'>STEP {{stp.stepNo}}</div>
                <div class=' font-medium text-color-whiten text-sm'>{{stp?.stepDesc?.toLocaleUpperCase()}}</div>
            </div>

        </div>
    </div>
</template>

<style>

</style>