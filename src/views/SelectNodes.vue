<script setup>
import {  createLogger, useStore } from 'vuex';
import { computed,onMounted, ref, watch } from 'vue';
import ButtonContainer from '../components/ButtonContainer.vue';

const store = useStore();
const multiStep = computed(() => store.state.multiStep);
const atomspaces = computed(() => store.state.atomspaces);

const nodes = computed(() => store.state.atomspaces.schema.nodes);
const edges = computed(() => store.state.atomspaces.schema.edges);

const selectedNodes = ref(Array(nodes.length).fill(false));
const selectedEdges = ref(Array(edges.length).fill(false));

const selectedNodeFile = ref(null);
const selectedEdgeFile = ref(null);

const handleSubmit = ()=>{

    let nodeList = []
    let edgeList = []
    
    
    selectedNodes._rawValue.map((_,index)=>{ nodeList.push(nodes.value[index])})
    selectedEdges._rawValue.map((_,index)=>{ edgeList.push(edges.value[index])})
    // formData.append('node_metta_file', selectedNodeFile.value[0].files[0])
    // formData.append('edge_metta_file', selectedEdgeFile.value[0].files[0])
    // formData.append('nodes', JSON.stringify(nodeList))
    // formData.append('edges', JSON.stringify(edgeList))
    

    store.dispatch("proceedToNextStep",{
        node_metta_file:selectedNodeFile.value[0].files[0],
        edge_metta_file:selectedEdgeFile.value[0].files[0],
        nodes:JSON.stringify(nodeList),
        edges:JSON.stringify(edgeList),
        })
        console.log(multiStep)
    store.dispatch('submitAtomspaces',multiStep.value.formData)
}

onMounted(()=>{
    console.log('multiStep',multiStep)
    if(multiStep){

        store.dispatch('loadAtomspaces')
        store.dispatch('loadSchema')
        console.log(store.state)
    }
})


</script>

<template>

    <div class="w-full sticky top-0 flex outline outline-1 justify-start">
            
            <!-- <p> {{ atomspaces.schema }} </p> -->
            <!-- <p>
                {{ typeof(nodes) }}fhfgh
            </p> -->
        <label 
            v-for="(i, index) in ['Select All Nodes', 'Select All Edges']" 
            for={{index}}  
            class="w-full outline p-5">
                
            <input 
                type="checkbox"
                :checked="true"
                class="check-box"
                id={{index}} />

            <!-- <p @click="index==0 ? selectAllNodes : selectAllEdges"> {{i}} </p>     -->
            <p> {{i}} </p>    
        
        </label>

    </div>

    <div class="w-full flex flex-row flex-1">
        
        <div v-for="(i) in ['nodes']" class="flex-1 relative">

            <label
            :for="'node_file_' + i"
            class="absolute bg-white z-50 text-black bottom-0 cright-4 cursor-pointer input-style w-full h-10 aspect-square crounded-full flex items-center justify-center">

                <input 
                class="hidden" 
                ref="selectedNodeFile" 
                type="file" :name="i" :id="'node_file_' + i">
                    <p>
                        <fa class="inline"icon="folder"/>
                        Upload file for {{i}} 
                    </p>
            </label>
   
            <div class="overflow-y-scroll h-[430px]">

                <div v-for="(j,index) in nodes" class="flex flex-1">

                    <label 
                    :for="'node_' + index"
                    class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full coutline outline-1 outline-white px-5 py-3">
                        
                        <input 
                        type="checkbox"
                        class="mr-5 check-box" 
                        name=""
                        v-model="selectedNodes[index]"
                        :id="'node_' + index"
                        >
                        
                        <p> {{j}} </p>
                        
                    </label>

                </div>

            </div>

        </div>

        <div v-for="(i) in ['edges']" class="flex-1 relative">

            <label
            :for="'edge_file'"
            class="absolute bg-white z-50 text-black bottom-0 cright-4 cursor-pointer input-style w-full h-10 aspect-square crounded-full flex items-center justify-center">

                <input 
                class="hidden" 
                type="file"
                ref="selectedEdgeFile" 
                :name="i" 
                :id="'edge_file'">
                    <p>
                        <fa class="inline"icon="folder"/>
                        Upload file for {{i}} 
                    </p>
            </label>

            <div class="overflow-y-scroll h-[430px]">

                <div v-for="(j,index) in edges" class="flex flex-1">

                    <label
                    :for="'edge_' + index"
                    class="cursor-pointer hover:bg-white/30 h-full flex capitalize justify-start w-full coutline outline-1 outline-white px-5 py-3">
                        
                        <input 
                        type="checkbox"
                        class="mr-5 check-box" 
                        name="" 
                        v-model="selectedEdges[index]"
                        :id="'edge_' + index"
                        >
                        
                        <p> {{j}} </p>
                        
                    </label>

                </div>

            </div>

        </div>

    </div>

    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>