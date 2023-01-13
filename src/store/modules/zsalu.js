// ez a fájl a store-ban a zsalu modulját tartalmazza
// a store-ban a modulokat a modules-ban kell definiálni
// meghívás: this.$store.getters.getAlapZsalu
// a state-ből való kiolvasás: this.$store.getters.getAlapZsalu




import axios from 'axios'


export default {
    state: {
        alapZsalu:[],
        filteredAlapzsalu:[]


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

          getfiltered: ({commit})=> {
            console.log("getfiltered")
            commit('getfiltered')
          },
          
      
       

    },

    created() {
        
       

        
        
    },


    mutations: {

      setalapzsalu(state, payload) {  
        state.alapZsalu = payload
        console.log("alapzsalu a sztorban", state.alapZsalu)
      },
      


        
      getfiltered(state) {
        console.log("getfiltered")
        state.filteredAlapzsalu = state.alapZsalu.filter( (alapZsalu) => {
          return alapZsalu.szint === "colop"
        })	
      }

    },
    getters: {
        getAlapZsalu: state => state.alapZsalu,
        getfiltered: state => state.filteredAlapzsalu,
      
      }
}



