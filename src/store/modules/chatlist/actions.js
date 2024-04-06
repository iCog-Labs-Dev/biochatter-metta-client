import axios from "axios";
// import { chatUrl } from "../../../urls";
import chatUrl from "../../../urls/index.js"

const url = chatUrl;
const Authorization = "";

export default {
  async loadList() {

    console.log("first")
    console.log({url})
    const response = await axios({
      method: "get",
      url
    });
    console.log('loadList');
    console.log({response});
    // context.commit("saveRocks", response.data);
  },
};