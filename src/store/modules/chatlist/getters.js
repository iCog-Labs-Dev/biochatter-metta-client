export default {
        /**
     * Returns the chat list from the Vuex store state.
     *
     * @param {Object} state - The Vuex store state.
     * @return {Array} The chat list.
     */
    chatList(state) {
        return state.chatList;
    },
        /**
     * Retrieves the chat from the state.
     *
     * @param {object} state - The Vuex state object.
     * @return {any} The chat stored in the state.
     */
    chat(state) {
        return state.chat;
    },
    /**
     * Checks if there are any chats in the state.
     *
     * @param {Object} state - The Vuex store state.
     * @return {boolean} True if there are chats in the state, false otherwise.
     */
    hasChats(state) {
        return state.chat && state.chatList.length > 0;
    },
}