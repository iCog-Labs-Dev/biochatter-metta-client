export default {
/**
 * Retrieves the status from the state.
 *
 * @param {object} state - The state object.
 * @return {any} The status stored in the state.
 */
    status(state) {
        // if(state.isPresent)
            return state.status;
        // else return false
    },

}