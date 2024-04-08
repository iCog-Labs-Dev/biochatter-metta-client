export default {

    saveChatList(state, payload) {
        state.chatList = payload;
    },
    saveChat(state, payload) {
        state.chat = payload;
    },
    saveSearchResults(state, payload) {
        state.searchResults = payload
    },
}