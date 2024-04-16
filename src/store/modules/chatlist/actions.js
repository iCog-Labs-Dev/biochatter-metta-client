import axios from "axios";
import urls from "../../../urls/index.js"
import utils from "../../../utils/index.js"
import { useRoute } from "vue-router";

const url = urls.chatUrl;
const errorHandler = utils.errorHandler;

const loadChatList= errorHandler(async (context) => { 
    const response = await axios({
      method: "get",
      url
    });
    context.commit("saveChatList", response.data.results);
  })

const delChat= errorHandler(async (context,data) => {

    console.log("del chat")
    console.log(url)
    console.log(data)
    await axios({
      method: "delete",
      url:url + data.id,
    });
    context.commit('remChat',data.index)
  })

const startNewChat = errorHandler(async(context,data)=>{
  const router = useRoute()

    console.log("startNewChat")
    // console.log('data',data)
    console.log('data',data)
    let response = await axios({
      method: "post",
      // url:url + data.id + '/chats/',
      url:url ,
      data:{
        message_text:data
      }
    });
    // console.log('startNewChat');

    // await loadTopics()
    
    console.log(response.data);
    const {chat_record} = (response.data);
    context.commit("appendChatList", chat_record);
    console.log('undef', data)

      let user_question = {
        is_user_message: true,
        message_text: data,
        message_updated_at: new Date().now,
      }
      context.commit("appendChat", user_question);
    router.push({ name: 'chat', params: { id: chat_record.id } })
    
    response = await axios({
      method: "post",
      // url:url + data.id + '/chats/',
      url: url + chat_record.id + '/messages/',
      data:{
        message_text:data
      }
    });
    const {user_record,llm_record} = (response.data);
    context.commit("appendChat", llm_record);

    // context.commit("saveTopics", response.data.results);
    
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
    console.log("getchat",response)
    // console.log('reply',response.data.results);
    context.commit("saveChat", response.data.results);
  })

// };

export default {
  loadChatList,delChat,sendChat,getChat,startNewChat
}