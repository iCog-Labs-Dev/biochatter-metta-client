
import utils from "../../../utils/index.js"


const errorHandler = utils.errorHandler;

/**
 * Toggles the upload status in the Vuex state.
 *
 * @param {Object} state - The Vuex state object.
 * @param {boolean} payload - The new upload status.
 * @return {Promise<void>} A promise that resolves when the upload status is toggled.
 */
const toggleUploadStatus = async (context,payload) => {
  console.log("toggleUploadStatus", payload)
  context.commit("toggleUploadStatus", payload)
}
/**
 * Updates the state to proceed to the next step.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The data object containing the information for the next step.
 * @return {Promise} A Promise that resolves when the next step is processed.
 */
const proceedToNextStep = async (context, data) => {
  console.log("proceedToNextStep", data)
  context.commit("proceedToNextStep", data);
 }
/**
 * Updates the state to seek a specific step.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The data object containing the step information.
 * @return {Promise} A Promise that resolves when the state is updated.
 */
const seekStep = (async (context, data) => {
  console.log("seek step", data)
  context.commit("seekStep", data);
 })
/**
 * Goes to the previous step in the context.
 *
 * @param {Object} context - The Vuex context object.
 * @return {Promise} A Promise that resolves when the previous step is committed.
 */
 const goToPrevStep = (async (context) => {
  console.log("go to the prev. step")
  context.commit("goToPrevStep");
 }) 
/**
 * Saves the current step in the state.
 *
 * @param {Object} context - The Vuex context object.
 * @return {Promise<void>} A Promise that resolves when the step is saved.
 */
const saveStep = errorHandler(async (context) => { 
// const data = {
//   // multiStep:null,
//   step: 0,
//   personalInfo: {
//       name: '',
//       email: '',
//       phone: ''
//   },
//   plan: {
//       planName: '',
//       planAmount: 0,
//       planDuration: 'monthly'
//   },
//   addons: [],
//   total: 0,
//   isCompleted: false
// }
//   context.commit("saveStep", data);
})

export default {
  saveStep, seekStep, goToPrevStep, proceedToNextStep, toggleUploadStatus
}