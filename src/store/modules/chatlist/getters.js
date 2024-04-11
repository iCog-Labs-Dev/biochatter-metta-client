export default {
    chatList(state) {
        return state.chatList;
    },
    chat(state) {
        return state.chat;
    },
    searchResults(state) {
        return state.searchResults
    },
    hasChats(state) {
        return state.chat && state.chatList.length > 0;
    },
}