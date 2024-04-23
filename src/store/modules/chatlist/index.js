import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    getters,
    mutations,
    actions,
    state() {
        return {
            chatList:null,
            chat:[],
            searchResults:null,
            isWaiting:true          
        }
       
    },

}