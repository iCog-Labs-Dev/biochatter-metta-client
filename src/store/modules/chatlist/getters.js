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
    // 
    hasChats(state) {
        return state.chats && state.chatList.length > 0;
    },
    // paginationDataRocks(state) {
    //     return state.paginationDataRocks;
    // },
}