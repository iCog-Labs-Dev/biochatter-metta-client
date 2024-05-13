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
        const storedData = window.localStorage.getItem('multistep')

        return  {
            stepInfo:[
                {
                    stepNo: 1,
                    stepDesc: 'Choose or Create DB'
                },
                {
                    stepNo: 2,
                    stepDesc: 'Upload Schema Files'
                },
                {
                    stepNo: 3,
                    stepDesc: 'Confirm'
                },
            ],
            step: 0,
            dbname: "",
            entities: null,
            formData: null,
            total: 0,
            upload:{
                uploading: false,
                success: false,

                
            }
            }
        }
    }