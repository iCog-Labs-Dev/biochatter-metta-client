import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default {
    getters,
    mutations,
    actions,
    state() {
        return {
            stepInfo:[
                {
                    stepNo: 1,
                    stepDesc: 'Choose or Create DB'
                },
                {
                    stepNo: 2,
                    stepDesc: 'upload Files for entities'
                },
                {
                    stepNo: 3,
                    stepDesc: 'Success'
                },
                // {
                //     stepNo: 4,
                //     stepDesc: 'Results'
                // },
            ],
            step: 0,
            dbname: "",
            entities: [{},{}],
            total: 0,
            isCompleted: false
    }
    },

}