<script setup>
import { computed, ref } from 'vue';
import {  useStore } from 'vuex';

const store = useStore();
const themes = computed(() => store.state.theme.allThemes);
const theme = computed(() => store.state.theme.theme);

const schemaFile = ref(null)

const handleSubmit = () => {
    alert(JSON.stringify(schemaFile._rawValue.value))
    console.log((schemaFile))
    // if(schemaFile.valuefiles[0]){
    //     const data = schemaFile.value[0].files[0]

    //     store.dispatch('newStatus',({statusText:JSON.stringify(data)}))
    //     // store.dispatch('submitSchema', data)
    // }
}

</script>

<template>

        <div class="w-full flex bg-card bg-white/5">
            <div class="boutline outline-red-500 cursor-pointer flex flex-col justify-center gap-3 boutline-1 overflow-y-scroll h-full w-1/2">
                <p class="bg-slate-50/50 p-5 capitalize">General</p>
            </div>
                
            <div class="boutline [height:auto]  border-black border-l-2 outline-1 outline-red-500 overflow-y-scroll p-3 w-full">
                <!-- upload schema -->
                <div class="flex items-center justify-between border-b border-gray-500">
                        <p class="p-6 ">Upload Schema</p>
                        
                        <div class="flex items-center gap-5">
                            
                            <label for="upload_schema">
                                <input ref="schemaFile" class="hidden" type="file" name="" id="upload_schema">
                                <fa
                                class="cursor-pointer px-3 py-1 text-2xl"
                                icon="folder-plus" />
                            </label>
                            <button @click="handleSubmit" class="input-style px-2 rounded-full">Submit</button>
                        
                        </div>
                            
                </div>

                <!-- change theme  -->
                <div class="flex border-b border-gray-500 flex-col justify-between m-4">
                    
                        <p class="p-2">
                            <span> Change Theme </span>
                            <span class="bg-white/50 p-2 capitalize rounded-full ml-2">{{ themes[theme].name }}</span>
                        </p>
                    
                        <div class="flex flex-row justify-around m-4">

                            <img 
                            v-for="(i,index) in themes"
                            :class="theme === index ? 'outline-green-300':''"
                                class="chat-image cursor-pointer outline outline-1 outline-offset-2 p-0 aspect-square rounded-full "
                                :src="i.url" 
                                @click="store.dispatch('toggleTheme',index)"
                                alt="" />
                        <!-- <div  class="cursor-pointer w-10 h-10 outline outline-1 outline-offset-2 p-2 aspect-square rounded-full "></div> -->
                        </div>
                </div>
                <!-- delete all chats -->
                <div class="flex p-6 items-center justify-between ">
                    <p class="">Delete all chats</p>
                    <div class="hover:bg-red-700/80 cursor-pointer bg-white/20 px-3 py-1 rounded-full">
                            <fa icon="broom" />
                    </div>
                </div>
                
            </div>
        </div>

</template>