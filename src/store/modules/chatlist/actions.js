import axios from "axios";
import urls from "../../../urls/index.js"
import utils from "../../../utils/index.js"


const url = urls.chatUrl;
const errorHandler = utils.errorHandler;

const loadChatList= errorHandler(async (context) => { 
    // console.log('status', status)
    const response = await axios({
      method: "get",
      url
    });
    context.commit("saveChatList", response.data.results);
  }
  )

const delChat= errorHandler(async (context,data) => {

    console.log("del chat")
    console.log(url)
    console.log(data)
    await axios({
      method: "delete",
      url:url + data.id,
    });
  })

const sendChat= errorHandler(async (context,data) => {

      let user_question = {
        is_user_message: true,
        message_text: data.msg,
        message_updated_at: new Date().now,
      }
    context.commit("appendChat", user_question);
    console.log('waiting...')
    context.commit("toggleWait", true);

      const response = await axios({
        method: "post",
        url: url + data.chat_id + '/messages/',
      data:{
        message_text:data.msg
      }
    });
    console.log('response',response)
    context.commit("appendChat", response.data.llm_response);
    context.commit("toggleWait",false);  
  // }
    // catch(error){
      // const {data,status,statusText} = error.response
      // context.commit("toggleWait");
      // store.dispatch('newStatus',{data,status,statusText})
    // }
  })

const getChat= errorHandler(async (context,data) => {

    const response = await axios({
      method: "get",
      url:url + data.chat_id+ '/messages/',
    });
    // console.log('reply',response.data.results);
    context.commit("saveChat", response.data.results);
  })

// };

export default {
  loadChatList,delChat,sendChat,getChat
}