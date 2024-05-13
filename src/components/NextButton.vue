<script setup lang="ts">


const emit = defineEmits<{
    (event: 'action'): void
}>()

defineProps<{
    step: number
}>()

const fireEmitter = ()=>{
    emit('action')
}
</script>

<template>
    <div>
        <button @click="fireEmitter" class='hover:bg-gray-400 outline-none px-2 rounded-2xl hover:text-color-primary-light-blue'> {{step === 1 ? 'Upload' : 'Next Step'}}  </button>
    </div>
</template>

<style>

</style>