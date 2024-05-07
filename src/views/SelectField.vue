<script setup>
import {  createLogger, useStore } from 'vuex';
import { computed,onMounted , ref} from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);
var dbname = ref('')
var newSchema = ref(false)

const handleSubmit = (e)=>{

    if (e.target.textContent){
        const data = e.target.textContent.trim()
        store.dispatch("proceedToNextStep", data)
    }
    else if ( dbname !== null){
        console.log("dbname",dbname.value)
        store.dispatch("proceedToNextStep", dbname.value)
    }
        newSchema =  true
}

const createSchema = () => {
    console.log("handle schema")
    newSchema = !newSchema
    // if (!newSchema){
    //     (newSchema =  true) 
    // }     
    // else{
    //     handleSubmit()
    // }
}
</script>

<template>

    <div class="w-full h-96 cpy-10 text-center relative flex flex-col gap-5">
    
        <div>
                <p class="cbg-white text-white w-full p-2 mt-5 text-xl text-start bg-gray-700 mb-5">List of databse's</p>
                
                <div class="flex h-fit flex-wrap gap-5 justify-center overflow-y-scroll cborder">
                    <button 
                    @click="(e)=>handleSubmit(e)"
                    v-for="i in 1" 
                    class="cbg-white p-2 px-5   text-start bg-white text-black rounded-full crounded-full hover:text-white hover:bg-white/30 ">
                        Genecode
                    </button>
                </div>
        </div>

    </div>

    <!-- floating icon -->
    <div class="crelative  absolute bottom-16 right-20 flex items-center justify-between w-fit h-fit ">
    
        <!-- text field -->
        <div
        :class="newSchema ? 'scale-x-1':'scale-x-0'"
        class="text-black mr-5 transition-all duration-500 origin-right h-full flex items-center cinput-style bg-white border border-black rounded-full px-3 overflow-hidden">
        
            <input 
            type="text"
            v-model="dbname"
            class="h-full input-style border-0 px-2 bg-transparent text-black"
            name="" id="">

            </input>
            <fa @click=" newSchema = false " class="text-red-600 h-6 p-2 cursor-pointer" icon="xmark" />
        
        </div>
        
        <!-- send -->
        <div
        v-if="!newSchema"
        @click=" newSchema = !newSchema "
        class="cbg-blue-500 cursor-pointer input-style w-16 aspect-square rounded-full cabsolute bottom-20 right-10 flex items-center justify-center">
        
            <fa class="text-xl text-white" icon='plus' />
        
        </div>

        <div
        v-if="newSchema"
        @click="handleSubmit"
        class="cbg-blue-500 cursor-pointer input-style w-16 aspect-square rounded-full cabsolute bottom-20 right-10 flex items-center justify-center">
        
            <fa class="text-xl text-white" icon='arrow-right' />
        
        </div>


    </div>

    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>