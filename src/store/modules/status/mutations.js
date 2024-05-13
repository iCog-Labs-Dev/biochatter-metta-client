export default {

    addStatus(state, payload) {
        state.status = payload;
        state.isPresent = true
    },
/**
 * Removes the status from the state by setting the status array to an empty array and setting the isPresent flag to false.
 *
 * @param {Object} state - The state object.
 * @return {void}
 */
    removeStatus(state) {
        state.isPresent = false
        setTimeout(()=>{
            // state.status = []
        }, 10050)
        // state.status= [];
      }
}