<script setup>
import { useStore } from 'vuex';
import { computed, onMounted,ref } from 'vue';

let store = useStore()
// let topic_name = ref('')
let formData = {
    topic_name: '',
    topic_description: '',
    topic_file: null
      }

function submitForm() {
    // const formData = new FormData();
    // formData.append('name', formData.name);
    // formData.append('description', formData.description);
    // formData.append('file', formData.file);
    // store.dispatch('submitFormData', formData);
    
    store.dispatch('submitTopic', formData);
}


function handleFileUpload(event) {
    formData.file = event.target.files[0];
}

// const uploadTopic = (topic_name) => {
//     console.log(topic_name)
//     store.dispatch('uploadTopic',{topic_name})
//     // store.dispatch('loadTopics');
// }

</script>

<template>
   <form 
   @submit.prevent="submitForm"
   class="flex flex-col  flex-1 gap-5 w-full h-1/2 p-5 m-auto text-black">

        <!-- <label for="title">Enter title</label> -->
        <input 
        placeholder="Topic Name" 
        v-model="formData.topic_name"
        id="title" 
        class="p-3 w-full outline-none rounded-md"  
        type="text">
        
        <textarea 
        id="title"
        v-model="formData.topic_description"
        class="p-3 rounded-md w-full resize-y h-max-content outline-none" 
        placeholder="Description" 
        type="text"/>

        <label for="file">
            <div class="w-full h-64 p-5 mb-5 cursor-pointer" >
                <div class=" border border-dashed rounded-lg hover:bg-white/20 w-full h-full border-white relative">
                    <fa icon="plus" class="text-white m-auto inset-0 absolute text-5xl font-bold" />
                </div>
            </div>
        </label>
        <input 
        id="file" 
        class="chidden text-white" 
        type="file" 
        @change="handleFileUpload">
        <button 
        type="submit"
        class="w-full p-4 text-2xl capitalize bg-white rounded-2xl ">upload</button>
    </form>
</template>