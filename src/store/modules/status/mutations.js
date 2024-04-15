export default {

    addStatus(state, payload) {
        state.status = [...state.status,payload];
        state.isPresent = true
    },
    removeStatus(state) {
        state.status= [];
        state.isPresent = false
      }
}