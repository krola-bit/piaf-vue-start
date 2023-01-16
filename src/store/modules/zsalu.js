// ez a fájl a store-ban a zsalu modulját tartalmazza
// a store-ban a modulokat a modules-ban kell definiálni
// meghívás: this.$store.getters.getAlapZsalu
// a state-ből való kiolvasás: this.$store.getters.getAlapZsalu




import axios from 'axios'


export default {
    state: {
        alapZsalu:[],
    },
    actions: {
        getAlapZsalu: ({commit})=> {
        

          console.log("getAlapZsalu.axios")
            axios.get('http://localhost/monolit/api/public/api/zsaluzas')

              .then(response => commit('setalapzsalu', response.data))
                
              .catch(error => {
                console.log(error);
              });
          },    
    },
          
    mutations: {
      // a store-ban a state változókat csak a mutationokon keresztül lehet módosítani

      setalapzsalu(state, payload) {  
        state.alapZsalu = payload,
        localStorage.setItem('alapZsalu', JSON.stringify(payload))
        console.log("alapzsalu a sztorban", state.alapZsalu)
      }
    },
    getters: {
      getAlapZsalu: state => state.alapZsalu,
    },

    
}
