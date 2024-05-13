import atomspaces from ".";

export default {
        /**
     * Retrieves the atomspaces from the state.
     *
     * @param {object} state - The Vuex state object.
     * @return {array} The array of atomspaces stored in the state.
     */
    atomspaces(state) {
        return state.atomspaces;
    },
    /**
 * Retrieves the schema from the state.
 *
 * @param {object} state - The Vuex state object.
 * @return {any} The schema stored in the state.
 */
    schema(state) {
        return state.schema;
    },
}