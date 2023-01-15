<template>
    <div>
      <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('Új tétel létrehozása') "/>
          <div class="separator mb-5">
          </div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
            <b-card class="mb-4">
                <b-form @submit.prevent="addAlapZsalu">
                    <b-form-group id="input-group-1" label="Tétel:" label-for="input-1">
                        <b-form-input id="input-1" v-model="tetel" required placeholder="Tétel"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Mennyiség:" label-for="input-2">
                        <b-form-input id="input-2" v-model="mennyiseg" required placeholder="Mennyiség"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-3" label="Mértékegység:" label-for="input-3">
                        <b-form-input id="input-3" v-model="mertekegyseg" required placeholder="Mértékegység"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-4" label="Anyag egységár:" label-for="input-4">
                        <b-form-input id="input-4" v-model="anyagegysegar" required placeholder="Anyag egységár"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-5" label="Díj egységár:" label-for="input-5">
                        <b-form-input id="input-5" v-model="dijegysegar" required placeholder="Díj egységár"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Mentés</b-button>
                </b-form>

            </b-card>
        </b-colxx>
      </b-row>
      </div>
    </template>


<script>

export default {
  name: 'Create',
  data() {
    return {
      tetel: '',
      mennyiseg: '',
      mertekegyseg: '',
      anyagegysegar: '',
      dijegysegar: ''
    }
  },
  methods: {
    addAlapZsalu() {
      this.$store.dispatch('basis/addAlapZsalu', {
        tetel: this.tetel,
        mennyiseg: this.mennyiseg,
        mertekegyseg: this.mertekegyseg,
        anyagegysegar: this.anyagegysegar,
        dijegysegar: this.dijegysegar
      })
    }
  }
}

</script>