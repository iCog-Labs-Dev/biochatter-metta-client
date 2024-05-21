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
        // const storedData = window.localStorage.getItem('theme')

        return  {
            theme : 2,
            allThemes : [{
                name:'singularity-net',
                url:'/src/assets/bg-logo.png'},
                {
                name:'colorful',
                url:'/src/assets/colorful.png',},
                {
                    name:'Dark',
                    url:'/src/assets/triangles.png'},
                {
                name:'rejuve 1',
                url:'/src/assets/rejuve1.png'},
                {
                name:'rejuve 2',
                url:'/src/assets/rejuve2.png'},
                {
                name:'rejuve 3',
                url:'/src/assets/rejuve3.jpg'},
                
                
            ]
        }
    }
}

// dark_2.png