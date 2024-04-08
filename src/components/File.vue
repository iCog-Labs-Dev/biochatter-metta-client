<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

let store = useStore()
onMounted(() => {
//   console.log("first")
//   store.dispatch('loadList');
})
</script>

<template>
   <div class="flex flex-col  flex-1 gap-5 w-full h-1/2 p-5 m-auto text-black">

    <div class="">
        <!-- <label for="title">Enter title</label> -->
        <input id="title" class="p-3 w-full outline-none rounded-md"  placeholder="Title" type="text">
        <!-- <div class="relative mb-3" data-twe-input-wrapper-init>
  <input
    type="text"
    class="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInputText"
    placeholder="Example label" />
  <label
    for="exampleFormControlInputText"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
    >Text input
  </label> -->
<!-- </div> -->
    </div>

    <div>
        <!-- <label for="description">Enter description</label> -->
        <!-- <input id="title" class="p-2 w-1/2" placeholder="Description" type="text"/> -->
        <textarea id="title" class="p-3 rounded-md w-full resize-y h-max-content outline-none" placeholder="Description" type="text"/>
    </div>

    <div>
        <label for="file">
            <div class="w-full h-64 p-5 mb-5" >
                <div class=" border border-dashed rounded-lg hover:bg-white/20 w-full h-full border-white relative">
                    <fa icon="plus" class="text-white m-auto inset-0 absolute text-5xl font-bold" />
                </div>
            </div>
        </label>
        <input id="file" class="hidden" type="file">
    </div>
   </div>
</template>