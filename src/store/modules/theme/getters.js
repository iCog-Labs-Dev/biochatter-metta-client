export default {

/**
 * Retrieves the current theme from the state.
 *
 * @param {object} state - The Vuex state object.
 * @return {string} The current theme.
 */
    theme(state) {
        return state.theme;
    },
    allThemes(state) {
        return state.allThemes;
    },

}