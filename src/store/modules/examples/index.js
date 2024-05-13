import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import axios from 'axios'

export default {
    getters,
    mutations,
    actions,
    state() {
        return {
            examples:[]
        } 
    },
}