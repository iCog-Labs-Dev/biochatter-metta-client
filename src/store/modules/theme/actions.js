
import utils from "../../../utils/index.js"


const errorHandler = utils.errorHandler;

/**
 * Toggles the theme in the Vuex store.
 *
 * @param {Object} context - The Vuex context object.
 * @param {any} payload - The new theme value to be toggled.
 * @return {Promise<void>} A promise that resolves when the theme is toggled.
 */
const toggleTheme = errorHandler(async (context,payload) => {
  context.commit("toggleTheme", payload)
})

export default {
  toggleTheme
}