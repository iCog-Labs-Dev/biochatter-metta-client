export default {
/**
 * Retrieves the current step from the state.
 *
 * @param {object} state - The Vuex state object.
 * @return {number} The current step.
 */
    step(state) {
        return state.step;
    },
    /**
     * Retrieves the dbname from the state.
     *
     * @param {object} state - The Vuex state object.
     * @return {any} The dbname stored in the state.
     */
    dbname(state) {
        return state.dbname;
    },
/**
 * Retrieves the entities from the state.
 *
 * @param {object} state - The Vuex state object.
 * @return {any} The entities stored in the state.
 */
    entities(state) {
        return state.entities;
    },
    /**
     * Retrieves the stepInfo from the state.
     *
     * @param {object} state - The Vuex state object.
     * @return {any} The stepInfo stored in the state.
     */
    stepInfo(state) {
        return state.stepInfo
    },
/**
 * Retrieves the formData from the state.
 *
 * @param {object} state - The Vuex state object.
 * @return {any} The formData stored in the state.
 */
    formData(state) {
        return state.formData
    },
    /**
     * Retrieves the total from the state.
     *
     * @param {object} state - The Vuex state object.
     * @return {any} The total stored in the state.
     */
    total(state) {
        return state.total;
    },
/**
 * Returns the completion status of the state.
 *
 * @param {object} state - The state object.
 * @return {boolean} The completion status of the state.
 */
    isCompleted(state) {
        return state.isCompleted;
    },
}