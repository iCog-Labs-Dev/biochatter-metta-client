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

const selectedNodeFile = ref('sdfsdf');
const selectedEdgeFile = ref(null);


const handleSubmit = ()=>{

    let nodeList = []
    let edgeList = []


    // check for any selected entities
    // dont upload if none are selected
    if(!selectedNodes._rawValue.includes(true) 
    && !selectedEdges._rawValue.includes(true) ) {
        store.dispatch('newStatus',{statusText:'Please select a node or an edge to continue'} )
        return
    }

    /**
     * Validates the selected entity based on the selected file.
     *
     * @param {object} selectedEntity - The selected entity to validate.
     * @param {object} selectedFile - The selected file to check against.
     * @return {boolean} The validation result (true if valid, false if not).
     */
    function validateEntity(selectedEntity, selectedFile){
        var valid = true 
        selectedEntity._rawValue.map((truthy,_)=>{
        if (truthy) {
            if (selectedFile.value[0].files.length == 0) 
            { valid =  false }
            else 
            { valid =  true }
            }
        })
    return valid
    }

    let validNode = validateEntity(selectedNodes,selectedNodeFile)
    let validEdge = validateEntity(selectedEdges,selectedEdgeFile)

    if(!validNode){ 
        store.dispatch('newStatus',
        {
            statusText:'Please add a node file corresponding to your selected nodes'
        }); return;}
    if(!validEdge){ 
        store.dispatch('newStatus',
        {
            statusText:'Please add an edge file corresponding to your selected edges'
        }); return;}


    if(validNode && validEdge){

        validNode?selectedNodes._rawValue.map((_,index)=>{ nodeList.push(nodes.value[index])}):''
        validEdge?selectedEdges._rawValue.map((_,index)=>{ edgeList.push(edges.value[index])}):''
    
        store.dispatch("proceedToNextStep",{
            node_metta_file:(validNode?selectedNodeFile.value[0].files[0]:undefined),
            nodes:(validNode?JSON.stringify(nodeList):undefined),

            edge_metta_file:(validEdge?selectedEdgeFile.value[0].files[0]:undefined),
            edges:(validEdge?JSON.stringify(edgeList):undefined),
            })

        store.dispatch('submitAtomspaces',multiStep.value.formData)
    }
}

onMounted(()=>{
       store.dispatch('loadAtomspaces')
        store.dispatch('loadSchema')
        console.log('multiStep',atomspaces.schema)
        console.log(store.state)
})
</script>

<template>

        <div class="w-full sticky divide-x top-0 flex outline outline-1 justify-start">

                <label 
                    v-for="(i, index) in ['Select All Nodes', 'Select All Edges']" 
                    :for="i"  
                    class=" w-full outlin p-5">
                        
                    <input 
                        type="checkbox"
                        :checked="true"
                        class="check-box"
                        :id="i" 
                    />
                    <p> {{i}} </p>    
                </label>

        </div>

        <div class="w-full flex flex-row flex-1">
            
            <!-- node list -->
            <div v-for="(i) in ['nodes']" class=" flex-1 relative">

                <!-- list -->
                <div class="overflow-y-scroll h-[150px] md:h-[400px]  pb-10">

                    <div v-for="(j,index) in nodes" class="flex flex-1">

                        <label 
                        :for="'node_' + index"
                        
                        class="cursor-pointer hover:bg-white/30 h-full flex justify-start w-full coutline outline-1 outline-white px-5 py-3">
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

                <!-- file input -->
                <label
                :for="'node_file_' + i"
                class="canimate-bounce absolute bottom-20 right-5 w-16 aspect-square  input-style rounded-full z-50 text-black cursor-pointer  my-auto flex items-center justify-center">
                

                <input 
                    class="hidden" 
                    ref="selectedNodeFile" 
                    type="file" :name="i" :id="'node_file_' + i">
                        <fa class="text-white h-6 p-2 cursor-pointer" icon="folder" />
                        <!-- <fa class="text-white h-6 p-2 cursor-pointer" icon="circle-check" /> -->

                </label>

            </div>

            <!-- edge list -->
            <div v-for="(i) in ['edges']" class="flex-1 relative border border-1">

                <!-- list -->
                <div class="overflow-y-scroll h-[150px] md:h-[400px]  pb-10">

                    <div v-for="(j,index) in edges" class="flex flex-1">

                        <label
                        :for="'edge_' + index"
                        class="cursor-pointer hover:bg-white/30 h-full flex justify-start w-full coutline outline-1 outline-white px-5 py-3">
                            
                            <input 
                            type="checkbox"
                            class="mr-5 check-box" 
                            name="" 
                            @click="console.log(`${selectedEdges[index]}`)"
                            v-model="selectedEdges[index]"
                            :id="'edge_' + index"
                            >
                            
                            <p> {{j}} </p>
                            
                        </label>

                    </div>

                </div>
                
                <!-- file input -->
                <label
                :for="'edge_file'"
                class="absolute bottom-20 right-5 w-16 aspect-square  input-style rounded-full z-50 text-black cursor-pointer  my-auto flex items-center justify-center">

                    <input 
                    class="hidden" 
                    type="file"
                    ref="selectedEdgeFile" 
                    :name="i" 
                    :id="'edge_file'">

                    <fa class="text-white h-6 p-2 cursor-pointer" icon="folder" />
                  
                </label>

            </div>

        </div>
    
    <ButtonContainer :step="multiStep.step" @nextAction="handleSubmit" />

</template>