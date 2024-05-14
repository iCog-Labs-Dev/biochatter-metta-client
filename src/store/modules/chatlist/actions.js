import axios from "axios";
import urls from "../../../urls/index.js"
import utils from "../../../utils/index.js"
import { useRoute } from "vue-router";

const url = urls.chatUrl;
const errorHandler = utils.errorHandler;

    /**
     * Loads the chat list from the server and commits it to the Vuex store.
     *
     * @param {Object} context - The Vuex context object.
     * @return {Promise<void>} A promise that resolves when the chat list is loaded and committed.
     */
const loadChatList= errorHandler(async (context) => { 
    const response = await axios({
      method: "get",
      url
    });
    context.commit("saveChatList", response.data.results);
  })

/**
 * Deletes a chat by its ID and removes it from the state.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The data object containing the chat ID and index.
 * @param {string} data.id - The ID of the chat to delete.
 * @param {number} data.index - The index of the chat in the state.
 * @return {Promise<void>} A promise that resolves when the chat is deleted and removed from the state.
 */
const delChat= async (context,data) => {

    console.log("del chat")
    console.log(url)
    console.log(data)
    await axios({
      method: "delete",
      url:url + data.id,
    });
    context.commit('remChat',data.index)
  }

  /**
 * Starts a new chat by sending a message and navigating to the chat page.
 *
 * @param {Object} context - The Vuex context object.
 * @param {string} data - The message text to send in the new chat.
 * @return {Promise} A promise that resolves when the new chat is started.
 */
const startNewChat = errorHandler(async(context,data)=>{
  // const router = useRoute()

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
    // router.push({ name: 'chat', params: { id: chat_record.id } })
    
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

/**
 * Sends a chat message.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The data object containing the chat message.
 * @return {Promise} A promise that resolves when the chat message is sent.
 */
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
  })

  /**
 * Retrieves a chat by its ID and saves it to the state.
 *
 * @param {Object} context - The Vuex context object.
 * @param {Object} data - The data object containing the chat ID.
 * @param {string} data.chat_id - The ID of the chat to retrieve.
 * @return {Promise<void>} A Promise that resolves when the chat is retrieved and saved.
 */
const getChat= (async (context,data) => {

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