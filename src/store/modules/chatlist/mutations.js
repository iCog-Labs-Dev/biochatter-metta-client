export default {

    saveChatList(state, payload) {
        state.chatList = payload;
    },
    appendChat(state,payload) {
        state.chat=[payload,...state.chat]
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