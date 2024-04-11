import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import axios from 'axios'

export default {
    getters,
    mutations,
    actions,
    // nameSpaced: true,
    state() {
        return {
            chatList:null,
            chat:[],
            searchResults:null,
            // chatList: [
            //     {
            //         chatName:'Name',
            //         chatTime:'dec 22, 2024',
            //     },
            //     {
            //         chatName:'Name',
            //         chatTime:'dec 22, 2024',
            //     },
            //     {
            //         chatName:'Name',
            //         chatTime:'dec 22, 2024',
            //     },
            //     {
            //         chatName:'Name',
            //         chatTime:'dec 22, 2024',
            //     },
            //     {
            //         chatName:'Name',
            //         chatTime:'dec 22, 2024',
            //     },
            // ],
            // rock: null,
            // paginationDataRocks: null,
            // singleRock: null
          
        }
       
    },

}