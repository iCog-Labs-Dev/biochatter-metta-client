import axios from "axios";
import urls from "../../../urls/index.js"
import utils from "../../../utils/index.js"
import store from "../../index.js";

const url = urls.atomspacesUrl;
const schemaUrl = urls.schemaUrl;
const errorHandler = utils.errorHandler;

/**
 * Loads the atomspaces from the server and commits them to the Vuex store.
 *
 * @param {Object} context - The Vuex context object.
 * @return {Promise<void>} A promise that resolves when the atomspaces are loaded and committed.
 */
const loadAtomspaces = errorHandler(async(context) => {
    
    console.log("atomspace")
    console.log({url})
    const response = await axios({
      method: "get",
      url
    });
    console.log('loadAtomspaces');
    console.log(response.data.results);
    context.commit("saveAtomspaces", response.data.results);
  })

/**
 * Loads the schema from the server and commits it to the Vuex store.
 *
 * @param {Object} context - The Vuex context object.
 * @return {Promise<void>} A promise that resolves when the schema is loaded and committed.
 */
const loadSchema = errorHandler(async(context) => {
  
  console.log("schema")
  console.log({schemaUrl})
  const response = await axios({
    method: "get",
    url: schemaUrl
  });
  console.log('loadSchema');
  console.log(response.data);
  context.commit("saveSchema", response.data);
})

/**
 * Submits the atomspaces data to the server.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The data to be submitted.
 * @return {Promise} A promise that resolves when the data is submitted successfully.
 */
const submitAtomspaces = errorHandler(async(context, data) =>{
  console.log({store})
  console.log('ctx.dispatch',context.dispatch)

    // try {
    //   // const response = await axios({
    //   //   method: 'post',
    //   //   url: url,
    //   //   data: data
    //   // });
    //   context.dispatch('toggleUploadStatus',{uploading:false,success:true})

    // } catch (error) {
      store.dispatch('toggleUploadStatus',{uploading:true,success:false})
      store.dispatch('newStatus',({statusText:'upload failed'}))
      // console.error('Error submitting form:', error.message);
      // throw error;
    // }
  })

/**
 * Submits the given schema data to the server.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The schema data to be submitted.
 * @return {Promise<void>} A promise that resolves when the schema is successfully submitted.
 */
const submitSchema = errorHandler(async(context, data) =>{
  console.log(data)

  try {
    const response = await axios({
      method: 'post',
      url: schemaUrl,
      data: data
    });

    console.log(response)

      // const responseData = await response.json();
      // context.commit('res data', responseData);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    // throw error;
  }
})

export default {
  loadAtomspaces, loadSchema, submitAtomspaces, submitSchema
};
