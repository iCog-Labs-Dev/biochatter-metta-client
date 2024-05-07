import axios from "axios";
import urls from "../../../urls/index.js"
import utils from "../../../utils/index.js"


const url = urls.atomspacesUrl;
const schemaUrl = urls.schemaUrl;
const errorHandler = utils.errorHandler;

// export default {
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

const submitAtomspaces = errorHandler(async(context, data) =>{
    console.log(data)

    try {
      const response = await axios({
        method: 'post',
        url: url,
        data: data
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // throw error;
    }
  })

const submitSchema = errorHandler(async(context, data) =>{
  console.log(data)

  try {
    const response = await axios({
      method: 'post',
      url: schemaUrl,
      data: data
    });

    console.log(response)

    // if (response.ok) {
      const responseData = await response.json();
      context.commit('res data', responseData);
    // } else {
    //   throw new Error('Failed to submit form');
    // }
  } catch (error) {
    // console.error('Error submitting form:', error);
    // throw error;
  }
})

export default {
  loadAtomspaces, loadSchema, submitAtomspaces, submitSchema
};