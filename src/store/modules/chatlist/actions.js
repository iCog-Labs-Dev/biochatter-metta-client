import axios from "axios";
// import { chatUrl } from "../../../urls";
import urls from "../../../urls/index.js"

const url = urls.chatUrl;
const Authorization = "";

export default {
  async loadChatList(context) {

    console.log("chat list")
    console.log(url)
    const response = await axios({
      method: "get",
      url
    });
    console.log('loadChatList');
    console.log(response.data.results);
    context.commit("saveChatList", response.data.results);
  },


  async delChat(context,data) {

    console.log("del chat")
    console.log(url)
    console.log(data)
    await axios({
      method: "delete",
      url:url + data.id,
    });
    // console.log(response.data.results);
    // context.commit("delChat", response.data.results);
  },

};