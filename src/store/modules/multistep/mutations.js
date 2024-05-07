import store from "../../index";

export default {

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
                const {node_metta_file, edge_metta_file, nodes, edges} = payload
                
                formData.append('db_name',state.dbname)
                formData.append('node_metta_file', node_metta_file)
                formData.append('edge_metta_file', edge_metta_file)
                formData.append('nodes', nodes)
                formData.append('edges', edges)

                state.formData = formData
            
                state.step = state.step + 1 
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
    goToPrevStep(state) {
        state.step = state.step - 1
        localStorage.setItem('multistep', JSON.stringify(state))
    },
    goToPlanUI(state) {
        state.step = 1
        localStorage.setItem('multistep', JSON.stringify(state))
    },
    completeStep(state) {
        state.step = 4
        localStorage.setItem('multistep', JSON.stringify(state))

    },
    seekStep(state, payload) {
        state.step = payload
        localStorage.setItem('multistep', JSON.stringify(state))
    },
    setDB(state, payload) {
        state.dbname = payload
    },
    setEntities(state, payload) {
        state.entities = payload
    }, 
    // saveStep(state,payload){
    //     return state = payload
    // }
}