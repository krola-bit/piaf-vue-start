<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.fejléc') "/>
      <div class="separator mb-5">
      </div>
    </b-colxx>
  </b-row>



  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" v-for="filteredAlapzsalu in filteredAlapzsalu" :key="filteredAlapzsalu.id">
          <b-card-header class="card">
            <div class="v1">
              <b-card-text class="col-1 v2">Tétel</b-card-text>
              <b-card-text class="col v2">Mennyiség</b-card-text>
              <b-card-text class="col v2">Anyag egység</b-card-text>
              <b-card-text class="col v2">Díj egység</b-card-text>
            </div>
          </b-card-header>
          <b-card-body class="card">
            <div class="v1" >
              <b-card-title class="col-3" >{{filteredAlapzsalu.tetel}}</b-card-title>
                <div class="col-9 v1" >
                  <b-card-text class="col-2 v2" >
                    <b-form-input v-model="filteredAlapzsalu.mennyiseg" type="number" min="0" max="100" step="1" class="form-control" />
                     {{   filteredAlapzsalu.mertekegyseg}} 
                    </b-card-text>
                  <b-card-text class="col-2 v2" >{{filteredAlapzsalu.anyagegysegar}} Ft</b-card-text>
                  <b-card-text class="col-2 v2" >{{filteredAlapzsalu.dijegysegar}} Ft</b-card-text>
                </div>
            </div>          
          </b-card-body>       
        </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>



<script>

// $store.getters.getAlapZsalu 
// $store.getters.getfilteredAlapzsalu



import store from '@/store'


export default {
  name: 'Colop',

  data() {
    return {
      alapZsalu: [],
      filteredAlapzsalu: [],
    }
  },
  computed: {
  
  },
  
  
  
  created() {
    console.log('created')
    
    store.dispatch('getAlapZsalu')
    .then( () => {
      this.alapZsalu = store.getters.getAlapZsalu
      
    })
    .then( () => {
      this.getfiltered(this.alapZsalu)
      console.log('this.filteredAlapzsalu', this.filteredAlapzsalu)
     
    })
    
  },


  methods: {
    
  getfiltered(payload) {
    console.log('getfiltered/cölöp.vue', payload)
    this.filteredAlapzsalu = payload.filter( (alapZsalu) => {
      return alapZsalu.szint === "colop"})	
    }
  
  }
}



</script>

<style scoped>



.v1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}

.v2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 20px;
  align-items: center;

  
}

b-kard-title {
  font-size: 5em ;
  align-items: center;
}

.form-control {
  font-size: 20px;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin: 10px;
  border-radius: 1rem;
}

</style>