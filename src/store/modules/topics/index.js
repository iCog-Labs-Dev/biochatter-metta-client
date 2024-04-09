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
            submittedForms: [],
            topics:null
        //     topics: [
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //         "How to connect langchain to search engines with serpapi?",
        //                 ],
            // rock: null,
            // paginationDataRocks: null,
            // searchResults:null,
            // singleRock: null
          
        }
       
    },

}