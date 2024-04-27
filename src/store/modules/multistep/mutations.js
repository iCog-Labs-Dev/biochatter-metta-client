export default {

    proceedToNextStep(state, payload) {
        console.log('state',state)
        console.log('payload',payload)

        switch(payload){
            case "dbname":
                state.dbname =  payload
                state. step = state.step + 1 
                localStorage.setItem('multistep', JSON.stringify(state))
                return

            case "entities":
                state.entities =  payload 
                state.step = state.step + 1 
                localStorage.setItem('multistep', JSON.stringify(state))
                return

            case "confirm":
                state.addons = payload
                state.step = state.step + 1 
                localStorage.setItem('multistep', JSON.stringify(state))
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
    seek_step(state, payload) {
        state.step = payload
        localStorage.setItem('multistep', JSON.stringify(state))
    },
    // saveStep(state,payload){
    //     return state = payload
    // }
}