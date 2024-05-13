import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    getters,
    mutations,
    actions,
    /**
 * Returns the initial state for the chatList module.
 *
 * @return {Object} The initial state object with properties:
 *   - chatList: null (representing the list of chats)
 *   - chat: an empty array (representing the current chat)
 *   - searchResults: null (representing the search results)
 *   - isWaiting: true (indicating if the module is waiting for a response)
 */
    state() {
        return {
            chatList:null,
            chat:[],
            searchResults:null,
            isWaiting:false          
        }
       
    },

}