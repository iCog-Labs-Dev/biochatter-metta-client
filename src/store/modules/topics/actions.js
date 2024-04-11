import axios from "axios";
import urls from "../../../urls/index.js"

const url = urls.topicUrl;

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

  async startNewChat(context,data){

    console.log("startNewChat")
    console.log({url});
    console.log(url + data.id + '/chats/')
    // console.log('data',data)
    console.log(data)
    await axios({
      method: "post",
      url:url + data.id + '/chats/',
      data:{
        chat_name:data.topic_name
      }
    });
    // console.log('startNewChat');

    // await loadTopics()
    // console.log(response.data.results);
    // context.commit("saveTopics", response.data.results);
    
  },

  async submitTopic(context, formData) {
    console.log(formData)
    console.log(formData.topic_name)
    try {
      const response = await axios({
        method: 'post',
        url: url,
        data: formData
        // data: {
        //   topic_name:formData.topic_name
        // }
      });

      console.log(response)

      // if (response.ok) {
        const responseData = await response.json();
        context.commit('addForm', responseData);
      // } else {
      //   throw new Error('Failed to submit form');
      // }
    } catch (error) {
      // console.error('Error submitting form:', error);
      // throw error;
    }
  },

};