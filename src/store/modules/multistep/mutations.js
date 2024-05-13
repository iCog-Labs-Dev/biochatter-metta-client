import store from "../../index";

export default {

/**
 * Toggles the isUploading status in the Vuex state.
 *
 * @param {object} state - The Vuex state object.
 * @param {boolean} payload - The new isUploading status.
 * @return {void}
 */
    toggleUploadStatus(state,payload) {
        console.log(payload)
        state = payload
    },
    /**
     * Proceeds to the next step based on the current state.
     *
     * @param {object} state - The Vuex state object.
     * @param {any} payload - The data payload for the next step.
     * @return {void}
     */
    proceedToNextStep(state, payload) {
        let formData = new FormData();
        switch(state.step){

            case 0:
                state.dbname =  payload
                state.step = state.step + 1 
                localStorage.setItem('multistep', JSON.stringify(state))
                return
                
            case 1:
                state.entities =  payload 
                console.log("entities",state.entities)
                const {node_metta_file, edge_metta_file, nodes, edges} = state.entities
                
                formData.append('db_name',state.dbname)
                formData.append('node_metta_file', node_metta_file)
                formData.append('edge_metta_file', edge_metta_file)
                formData.append('nodes', nodes)
                formData.append('edges', edges)

                state.formData = formData
            
                state.step = state.step + 1 
                state.isUploading = true
                localStorage.setItem('multistep', JSON.stringify(state))
                return

            case 2:
                console.log("sdfsdf")


                // state.addons = payload
                // state.step = state.step + 1 
                // localStorage.setItem('multistep', JSON.stringify(state))
               return

            default:
                break;
        }
    },
        /**
         * Decrements the step value in the state by 1 and updates the 'multistep'
         * item in localStorage with the updated state.
         *
         * @param {object} state - The Vuex state object.
         * @return {void}
         */
    goToPrevStep(state) {
        state.step = state.step - 1
        localStorage.setItem('multistep', JSON.stringify(state))
    },
    completeStep(state) {
        state.step = 2
        localStorage.setItem('multistep', JSON.stringify(state))

    },
    /**
     * Updates the step in the state with the provided payload and stores the state in local storage.
     *
     * @param {object} state - The Vuex state object.
     * @param {any} payload - The new step value to be set.
     * @return {void}
     */
    seekStep(state, payload) {
        state.step = payload
        localStorage.setItem('multistep', JSON.stringify(state))
    },
    /**
     * Sets the dbname in the state to the provided payload.
     *
     * @param {any} payload - The new dbname value to be set.
     * @return {void}
     */
    setDB(state, payload) {
        state.dbname = payload
    },
/**
 * Sets the entities in the state to the provided payload.
 *
 * @param {object} state - The Vuex state object.
 * @param {any} payload - The new entities value to be set.
 * @return {void}
 */
    setEntities(state, payload) {
        state.entities = payload
    }, 
    /**
     * Saves the step in the state with the provided payload.
     *
     * @param {object} state - The Vuex state object.
     * @param {any} payload - The new step value to be saved.
     * @return {any} The updated state after saving the step.
     */
    saveStep(state,payload){
        return state = payload
    }
}