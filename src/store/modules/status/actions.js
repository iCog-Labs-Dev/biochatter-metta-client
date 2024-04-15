// import axios from "axios";
// import urls from "../../../urls/index.js"

// const url = urls.topicUrl;

export default {


  async newStatus(context, data) {
    context.commit('addStatus',data)
  },

  async remStatus(context, data) {
    context.commit('removeStatus',data)
  }
}
