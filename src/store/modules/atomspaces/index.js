import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    getters,
    mutations,
    actions,
    /**
     * Returns the initial state object with properties.
     *
     * @return {Object} The initial state object with properties
     */
    state() {
        return {
            atomspaces: [],
            schema:''
        }
       
    },

}