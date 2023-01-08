import axios from 'axios'


export default {
    state: {
        alapZsalu:[],


    },
    getters: {},


    mutations: {
        setZsalu: (state, payload) => {
            state.alapZsalu = payload
            
        }
    },
    actions: {
        // setZsalu: ({ commit }) => {
    
        getZsalu: ({ commit }) => {

            

            axios.get('http://localhost/monolit/api/public/api/zsaluzas')
            .then(response => { commit('setZsalu', response.data)})
            .catch(error => {console.log(error)})
        }       
    }
}


