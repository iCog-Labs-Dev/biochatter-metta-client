import axios from "axios";
import urls from "../../../urls/index.js"

const url = urls.topicUrl

;
export default {
  async loadTopics(context) {
    
    console.log("topics")
    console.log({url})
    const response = await axios({
      method: "get",
      url
    });
    console.log('loadTopics');
    console.log(response.data.results);
    context.commit("saveTopics", response.data.results);
  },

};