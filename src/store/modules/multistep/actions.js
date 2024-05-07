
import utils from "../../../utils/index.js"


const errorHandler = utils.errorHandler;

const proceedToNextStep = errorHandler(async (context, data) => {
  console.log("proceedToNextStep", data)
  context.commit("proceedToNextStep", data);
 })

const seekStep = errorHandler(async (context, data) => {
  console.log("seek step", data)
  context.commit("seekStep", data);
 })

 const goToPrevStep = errorHandler(async (context) => {
  console.log("go to the prev. step")
  context.commit("goToPrevStep");
 }) 

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
  saveStep, seekStep, goToPrevStep, proceedToNextStep
}