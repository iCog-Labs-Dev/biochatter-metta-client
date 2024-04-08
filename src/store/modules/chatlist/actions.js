import axios from "axios";
// import { chatUrl } from "../../../urls";
import urls from "../../../urls/index.js"

const url = urls.chatUrl;
const Authorization = "";

export default {
  async loadChatList(context) {


    console.log(url)
    const response = await axios({
      method: "get",
      url
    });
    console.log('loadChatList');
    console.log(response.data.results);
    context.commit("saveChatList", response.data.results);
  },
};