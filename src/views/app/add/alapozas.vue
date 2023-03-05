<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4">
          <b-form-group class="custom-control" label-for="checkbox-group">
            <b-form-checkbox-group class="mb-4" size="lg" v-model="selectedValues" id="checkbox-group">
              <b-form-checkbox  value="colop">Cölöp</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-checkbox-group class="mb-4" size="lg" v-model="selectedValues" id="checkbox-group">
              <b-form-checkbox value="savalap">Sávalap</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-checkbox-group class="mb-4" size="lg" v-model="selectedValues" id="checkbox-group">
              <b-form-checkbox value="talpgerenda">Talpgerenda</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-checkbox-group class="mb-4" size="lg" v-model="selectedValues" id="checkbox-group">
              <b-form-checkbox value="alaplemez">Alaplemez</b-form-checkbox>
            </b-form-checkbox-group>
            <div class="mt-3">Selected: <strong>{{ selectedValues }}</strong></div>
            <!-- button -->
            <b-button class="btn btn-primary" @click="addMenu">Hozzáad</b-button>
          </b-form-group>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export
  default {
    name: 'alapozas',
    data() {
      return {
        selectedValues: ["alapozas"]
      }
    },

    methods: {
      addMenu() {
        this.$store.commit('addMenu', this.selectedValues)
      }
    } 




  }


</script>

<style scoped>
 


</style>