<script setup>
import Stepper from './Stepper.vue';
import ThankYou from './ThankYou.vue';

import {  useStore } from 'vuex';
import { computed,onMounted } from 'vue';


const store = useStore();
const multiStep = computed(() => store.state.multiStep);


onMounted(()=>{
    // console.log('chatList',chatList)
})

</script>

<template>
    <div class=' coverflow-scroll w-full grid place-items-center bg-color-light-gray' >

        <!-- <div className='w-full cxl:w-4/6  xlg:w-[90%] h-full xlg:h-[73%] bg-transparent xlg:bg-color-whiten rounded-xl xlg:p-3  relative'> -->

            <!-- <div className='flex flex-col items-center '> -->

                <Stepper/>

            <!-- <div className='flex-1 xlg:py-7 py-7 px-9 bg-color-whiten bg-red-500 absolute xlg:relative top-[9rem]  right-0 left-0 overflow-hidden  xlg:top-0 min-h-[60%] xlg:h-auto xlg:rounded-none rounded-2xl  2xl:mx-0 mx-4'> -->

                <!-- <template v-if="state.step === 0">
                    <PersonalInfo/>
                </template>
                <template v-else-if="state.step === 1">
                    <SelectPlan/>
                </template>
                <template v-else-if="state.step === 2">
                    <PickAddon/>
                </template>
                <template v-else-if="state.step === 3">
                    <Summary/>
                </template> 
                <template v-else-if="state.step === 0"> 
                    <ThankYou/>
                    </template>
                -->
                <!-- <template>  -->
                    <!-- <ThankYou/> -->
                <!-- </template> -->

            <!-- </div> -->

            <!-- </div> -->

            <!-- <template> -->
                <!-- {{ 1 }} -->
                <div class="w-full h-fit bg-green-500">
                    {{ 'multiStep' }}
                    <ThankYou/>
                </div>
            <!-- </template> -->
        
        <!-- </div> -->

    </div>
</template>