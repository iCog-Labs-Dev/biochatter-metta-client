import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    getters,
    mutations,
    actions,
    state() {
        return {
            multiStep:{
            step: 0,
            personalInfo: {
                name: '',
                email: '',
                phone: ''
            },
            plan: {
                planName: '',
                planAmount: 0,
                planDuration: 'monthly'
            },
            addons: [],
            total: 0,
            isCompleted: false
        }
    }
    },

}