export default {

    saveChatList(state, payload) {
        state.chatList = payload;
    },
    appendChat(state,payload) {
        state.chat=[...state.chat,payload]
    },
    saveChat(state, payload) {
        state.chat = payload;
    },
    saveSearchResults(state, payload) {
        state.searchResults = payload
    },
}