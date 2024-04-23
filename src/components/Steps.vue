<script setup lang="ts">
// import { storeToRefs } from 'pinia';
// import { useMultistep } from '../store/multistep';
import { computed,onMounted } from 'vue';
import {  useStore } from 'vuex';

// const multistepStore = useMultistep()
const store = useStore();
const multiStep = computed(() => store.state.multiStep);

// const {subscriptionData: state} = storeToRefs(multistepStore);
const stepInfo = [
        {
            stepNo: 1,
            stepDesc: 'Select field to upload on'
        },
        {
            stepNo: 2,
            stepDesc: 'Select nodes and Edges'
        },
        {
            stepNo: 3,
            stepDesc: 'Confirm'
        },
        // {
        //     stepNo: 4,
        //     stepDesc: 'summary'
        // },
    ]

</script>

<template>
<!-- <p>steps</p> -->

    <div class='flex xlg:flex-col items-center gap-y-7 justify-center xlg:justify-start gap-x-5  xlg:gap-x-0 '>
        <div 
            v-for="stp of stepInfo" :key="stp.stepNo" 
            @click="true && store.dispatch('seekStep',(stp.stepNo -1)) "
            class="flex items-center justify-between gap-x-4"
        >

            <div
                class="p-5 w-9 h-9 border-2 flex items-center justify-center border-color-primary-light-blue  rounded-full font-medium text-lg"
                :class="multiStep?.step +1 == stp.stepNo ||( stp.stepNo === 4 && multiStep?.step === 4)  ? 'bg-color-primary-light-blue text-color-primary-marine-blue' : 'text-color-primary-light-blue'"
            >
                {{ stp.stepNo }}
            </div>
            <div class='  xlg:block'>
                <div class=' text-color-primary-pastel-blue text-sm'>STEP {{stp.stepNo}}</div>
                <div class=' font-medium text-color-whiten text-sm'>{{stp?.stepDesc?.toLocaleUpperCase()}}</div>
            </div>

        </div>
    </div>
</template>

<style>

</style>