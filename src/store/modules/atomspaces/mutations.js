export default {
    /**
     * Updates the atomspaces in the state with the provided payload.
     *
     * @param {object} state - The Vuex state object.
     * @param {array} payload - The new atomspaces to be saved.
     */
    saveAtomspaces(state, payload) {
        state.atomspaces = payload;
    },
    /**
 * Adds the given payload to the atomspaces array in the state.
 *
 * @param {object} state - The Vuex state object.
 * @param {any} payload - The payload to be added to the atomspaces array.
 */
    addAtomspaces(state, payload) {
        state.atomspaces.push(payload);
    },
        /**
     * Updates the schema in the state with the provided payload.
     *
     * @param {object} state - The Vuex state object.
     * @param {any} payload - The new schema to be saved.
     */
    saveSchema(state, payload) {
        state.schema = payload;
    },
}