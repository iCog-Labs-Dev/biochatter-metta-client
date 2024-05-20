<script setup>
import ModalContainer from './ModalContainer.vue';

// const{isVisible} = defineProps(['isVisible'])

</script>

<template>

            <div class="w-full flex bg-card bg-white/5">
                <div class="boutline outline-red-500 cursor-pointer flex flex-col justify-center gap-3 boutline-1 overflow-y-scroll h-full w-1/2">
                    <p class="hover:bg-slate-50/50 p-5">General</p>
                    <p class="hover:bg-slate-50/50 p-5">Profile</p>
                    <p class="hover:bg-slate-50/50 p-5">language</p>
                </div>
                
                <div class="boutline [height:auto]  border-black border-l-2 outline-1 outline-red-500 overflow-y-scroll p-3 w-full">
                    <p class="p-6  border-b border-gray-500">Update the Schema</p>
                    <p class="p-6  border-b border-gray-500">Theme</p>
                    <p class="p-6  border-b border-gray-500">Archive Chats</p>
                    <p class="p-6">Delete all chats</p>
                </div>
            </div>

</template>