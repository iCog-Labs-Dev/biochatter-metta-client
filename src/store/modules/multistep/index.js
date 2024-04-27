import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    getters,
    mutations,
    actions,
    state() {
        return {
            step: 0,
            dbname: "",
            entities: "",
            addons: "",
            total: 0,
            isCompleted: false
    }
    },

}