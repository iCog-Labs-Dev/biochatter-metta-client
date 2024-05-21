import store from "../../index";

export default {

/**
 * Toggles the theme in the Vuex state.
 *
 * @param {object} state - The Vuex state object.
 * @param {boolean} payload - The new theme string.
 * @return {void}
 */
    toggleTheme(state,payload) {
        console.log(payload)
        state.theme = payload
    },
}