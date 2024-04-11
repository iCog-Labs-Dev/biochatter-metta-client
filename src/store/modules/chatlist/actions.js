import axios from "axios";
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

  async sendChat(context,data) {

    try{

      let user_question = {
        is_user_message: true,
        message_text: data.msg,
        message_updated_at: new Date().now,
      }
      context.commit("appendChat", user_question);
      console.log('waiting...')
      const response = await axios({
        method: "post",
        url: url + data.chat_id + '/messages/',
      data:{
        message_text:data.msg
      }
    });

    context.commit("appendChat", response.data.llm_response);
    }
    catch(error){
      let llm_response = {
        // chat_id: 13,
        is_user_message: false,
        // message_created_at: "2024-04-11T10:12:44.994411Z",
        message_text: error,
        message_updated_at: new Date().now,
      }
      context.commit("appendChat", llm_response);
    }
  },

  async getChat(context,data) {

    const response = await axios({
      method: "get",
      url:url + data.chat_id+ '/messages/',
    });
    // console.log('reply',response.data.results);
    context.commit("saveChat", response.data.results);
  }
};