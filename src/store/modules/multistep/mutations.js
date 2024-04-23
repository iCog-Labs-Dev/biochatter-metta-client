export default {

    proceedToNextStep(state, payload) {
        console.log('state',state)
        switch(payload){
            case "personalInfo":
                const latest = {...state, personalInfo: {...payload}, step: state.step + 1 }
                localStorage.setItem('multistep', JSON.stringify(latest))
                console.log("step",latest.step)
               return state = latest

            case "plan":
                const snapshot = {...state, plan: {...payload}, step: state.step + 1 }
                localStorage.setItem('multistep', JSON.stringify(snapshot))
                console.log("step",snapshot.step)
                return state = snapshot

            case "addon":
                const current = {...state, addons: [...payload], step: state.step + 1 }
                localStorage.setItem('multistep', JSON.stringify(current))
               return state = current

            default:
                break;
        }
    },
    goToPrevStep(state,payload) {
        const current = {...state, step: state.value.step - 1 }
        localStorage.setItem('multistep', JSON.stringify(current))
        return state = current
    },
    goToPlanUI(state,payload) {
        const current = {...state, step: 1}
        localStorage.setItem('multistep', JSON.stringify(current))
        return state = current

    },
    completeStep(state,payload) {
        const current = {...state, step: 4, isCompleted: true}
        localStorage.setItem('multistep', JSON.stringify(current))
        return state = current

    },
    seekStep(state, payload) {
        const current = {...state, step: payload}
        localStorage.setItem('multistep', JSON.stringify(current))
        state = current
        // console.log(state)
        return state
    },
    saveStep(state,payload){
        return state = payload
    }
}