import axios from "axios";
import urls from "../../../urls/index.js"
import utils from "../../../utils/index.js"


const url = urls.exampleUrl;
const errorHandler = utils.errorHandler;

const loadExamples = errorHandler(async(context) => {

  console.log("examples")
  console.log({url})
  const response = await axios({
    method: "get",
    url
  });
  console.log('loadExamples');
  console.log(response.data.results);
  context.commit("saveExample", response.data.results);
  
  })


export default {
  loadExamples
};