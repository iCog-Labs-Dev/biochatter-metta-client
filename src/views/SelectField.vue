<script setup>
import {  createLogger, useStore } from 'vuex';
import { computed,onMounted , ref} from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);
var dbname = ref('')
var newSchema = ref(false)

const handleSubmit = (e) => {
    if (dbname.value !== null && dbname.value !== "" && dbname.value !== undefined) {
        console.log("dbname", dbname.value);
        store.dispatch("proceedToNextStep", dbname.value);
    } else if (e && e.target.textContent.trim() !== "") {
        console.log('its e');
        const data = e.target.textContent.trim();
        store.dispatch("proceedToNextStep", data);
    }
    else{
        store.dispatch('newStatus',{statusText:'database name cannot be empty'} )
        // alert('db name cant be empty')
    }
    newSchema = false;
}

</script>

<template>

    <!-- list of db -->
    <div class="w-full h-96 cpy-10 text-center relative flex flex-col ">
    
                <p class="cbg-white bg-white text-black w-full p-2 text-xl text-start mb-5">List of databse's</p>
                
                <div class="flex h-fit flex-wrap gap-5 p-4 pb-16 justify-start overflow-y-scroll ">
                    
                    <button 
                    @click="(e)=>handleSubmit(e)"
                    v-for="i in 1" 
                    class="cbg-white p-2 px-5   text-start bg-white text-black rounded-full crounded-full hover:text-white hover:bg-white/30 ">
                        Genecode
                    </button>

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
        
        <!-- plus icon  -->
        <div
        v-if="!newSchema"
        @click=" newSchema = !newSchema "
        class="cbg-blue-500 cursor-pointer input-style w-16 aspect-square rounded-full cabsolute bottom-20 right-10 flex items-center justify-center">
        
            <fa class="text-xl text-white" icon='plus' />
        
        </div>

        <!-- send button -->
        <div
        v-if="newSchema"
        @click="handleSubmit()"
        class="cbg-blue-500 cursor-pointer input-style w-16 aspect-square rounded-full cabsolute bottom-20 right-10 flex items-center justify-center">
        
            <fa class="text-xl text-white" icon='arrow-right' />

        </div>

    </div>

    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>