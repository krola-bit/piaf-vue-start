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
        <b-card class="mb-4" v-for="zsalu in zsalu" :key="zsalu.id">
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
              <b-card-title class="col-3" >{{zsalu.tetel}}</b-card-title>
                <div class="col-9 v1" >
                  <b-card-text class="col-2 v2" >
                    <b-form-input v-model="zsalu.mennyiseg" type="number" min="0" max="100" step="1" class="form-control" />
                     {{   zsalu.mertekegyseg}} 
                    </b-card-text>
                  <b-card-text class="col-2 v2" >{{zsalu.anyagegysegar}} Ft</b-card-text>
                  <b-card-text class="col-2 v2" >{{zsalu.dijegysegar}} Ft</b-card-text>
                </div>
            </div>          
          </b-card-body>       
        </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>



<script>

import axios from 'axios'

export default {
  name: 'Colop',


  data() {
    return {
      
      zsalu: [],
    }
  },

  computed: {
    // a zslu.js-ből a alapzsalu értéket kapja
    alapzsalu() {
      return this.$store.state.zsalu.alapzsalu;
    },

    




  },




  





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
}

</style>