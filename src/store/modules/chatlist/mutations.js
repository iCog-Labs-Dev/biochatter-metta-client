export default {
    /**
     * Updates the chat list in the state with the provided payload.
     *
     * @param {Object} state - The Vuex state object.
     * @param {any} payload - The new chat list to be saved.
     * @return {void}
     */
    saveChatList(state, payload) {
        state.chatList = payload;
    },
        /**
     * A function to append a chat list item to the chat list in the state.
     *
     * @param {Object} state - The Vuex state object.
     * @param {any} payload - The chat list item to be appended to the chat list.
     * @return {void}
     */
    appendChatList(state,payload) {
        state.chatList=[...state.chatList,payload]
    },
    /**
 * Appends a chat to the chat list in the state.
 *
 * @param {Object} state - The Vuex state object.
 * @param {Object} payload - The chat to be appended to the chat list.
 * @return {void}
 */
    appendChat(state,payload) {
        state.chat=[payload,...state.chat]
    },
    /**
 * Removes a chat from the state.
 *
 * @param {Object} state - The Vuex state object.
 * @param {number} payload - The index of the chat to be removed.
 * @return {void}
 */
    remChat(state,payload) {
        state.chat.splice(payload,1)
    },
    saveChat(state, payload) {
        state.chat = payload;
    },
        /**
     * Toggles the waiting state in the Vuex store.
     *
     * @param {Object} state - The Vuex state object.
     * @param {boolean} payload - The new waiting state value.
     * @return {void}
     */
    toggleWait(state, payload){
      state.isWaiting = payload
    }
}