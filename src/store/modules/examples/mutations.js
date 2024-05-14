export default {
    saveExample(state, payload) {
        console.log('payload',payload)
        state.examples = payload;
    }
}