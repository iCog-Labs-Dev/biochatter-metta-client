<script setup lang="ts">
import NextButton from './NextButton.vue';
import PrevButton from './PrevButton.vue';


const emit = defineEmits<{
    (event: 'nextAction'): void
}>()

defineProps<{
    step: number
}>()

const fireEmitter = ()=>{
    emit('nextAction')
}

</script>

<template>
    <div className='bg-white text-black absolute bottom-0 w-full right-0 left-0'>
        <div className='flex w-full gap-x-6 justify-between items-center px-6 h-full'>

            <template v-if="step > 0 && step <= 3">
                <PrevButton/>
            </template>
            <template v-else>
                <div></div>
            </template>

            <NextButton @action="fireEmitter" :step="step"/>
        </div>
    </div>
</template>

<style>

</style>