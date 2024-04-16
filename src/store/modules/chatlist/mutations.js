export default {

    saveChatList(state, payload) {
        state.chatList = payload;
    },
    appendChatList(state,payload) {
        state.chatList=[...state.chatList,payload]
    },
    appendChat(state,payload) {
        state.chat=[payload,...state.chat]
    },
    remChat(state,payload) {
        state.chat.splice(payload,1)
    },
    saveChat(state, payload) {
        state.chat = payload;
    },
    saveSearchResults(state, payload) {
        state.searchResults = payload
    },
    toggleWait(state, payload){
      state.isWaiting = payload
    }
}