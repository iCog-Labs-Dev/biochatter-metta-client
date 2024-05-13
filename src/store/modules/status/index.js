import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import axios from 'axios'

export default {
    getters,
    mutations,
    actions,
    /**
     * Returns the initial state object for the Vuex module.
     *
     * @return {Object} The initial state object.
     *   - status: An array to store the status information.
     *   - isPresent: A boolean to indicate if the status is present.
     */
    state() {
        return {
            status:[],
            isPresent:false
        }   
    },

}