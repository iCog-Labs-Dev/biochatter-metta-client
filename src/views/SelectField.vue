<script setup>
import {  useStore } from 'vuex';
import { computed,onMounted , ref} from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);

var newSchema = ref(false)

const handleSubmit = ()=>{
    console.log("sdfd")
        store.dispatch("proceedToNextStep","dbname" )
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

    <!-- <p>Select Field</p> -->
    <div class="w-full h-96 cpy-10 text-center relative flex flex-col gap-5">
        
        <!-- <div v-if="newSchema"
        class="cborder border-green-400 w-full h-fit flex items-center cjustify-evenly m-auto p-5 inset-0 absolute">

            <label for="schema"
            class="cbg-white cursor-pointer text-white chover:text-white chover:bg-black/30 capitalize w-fit  mx-auto px-5 py-3 crounded-full">
                Upload Schema
            </label>

            
            <input class="chidden border" id="schema" type="file" />

            <button 
                @click="handleSubmit"
                class="bg-white text-black hover:text-white hover:bg-black/30 capitalize w-fit  mx-auto px-5 py-3 rounded-full cursor-pointer">
                Upload
            </button>
            
        </div> -->
    
        <div>
                <p class="cbg-white text-white w-full p-2 mt-5 text-xl text-start bg-gray-700">List of databse's</p>
                
                <div class="flex flex-col cgap-5 justify-center overflow-y-scroll cborder h-[530px]">
                    <button v-for="i in 100" class="cbg-white p-2 px-5   text-start text-white crounded-full hover:text-white hover:bg-white/30 ">
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
        class="text-black mr-5 transition-all duration-500 origin-right h-full flex items-center input-style  rounded-full px-3 overflow-hidden">
        
            <input 
            type="text"
            class="h-full input-style border-0 px-2 bg-transparent"
            name="" id="" >
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