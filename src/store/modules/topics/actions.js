import axios from "axios";
import topicUrl from "../../../urls/index.js"

const url = topicUrl

;
export default {
  async loadTopics() {
    console.log("first")
    console.log({url})
    const response = await axios({
      method: "Get",
      url
    });
    console.log('loadTopics');
    console.log({response});

    console.log('loadTopics')
  },

};