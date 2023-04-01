<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.ajanlat')" />
        <div class="separator mb-5">
        </div>

      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" v-for="filteredAlapzsalu in filteredAlapzsalu" :key="filteredAlapzsalu.id">
          <b-button class="vs btn btn-danger" @click="deleteAlapZsalu(filteredAlapzsalu.id)">
            <i class="simple-icon-close"></i>
          </b-button>
          <b-card-header class="card">
            <div class="v1">
              <b-card-text class="col-1 v2">Tétel</b-card-text>
              <b-card-text class="col v2">Mennyiség</b-card-text>
              <b-card-text class="col v2">Anyag egység</b-card-text>
              <b-card-text class="col v2">Díj egység</b-card-text>
            </div>
          </b-card-header>
          <b-card-body class="card">
            <div class="v1">
              <b-card-title class="col-3">{{ filteredAlapzsalu.tetel }}</b-card-title>
              <div class="col-9 v1">
                <b-card-text class="col-2 v2">
                  <b-form-input v-model="filteredAlapzsalu.mennyiseg" class="" placeholder="0" />
                  {{ filteredAlapzsalu.mertekegyseg }}
                </b-card-text>
                <b-card-text class="col-2 v2">{{ filteredAlapzsalu.anyagegysegar }} Ft</b-card-text>
                <b-card-text class="col-2 v2">{{ filteredAlapzsalu.dijegysegar }} Ft</b-card-text>
              </div>
            </div>
          </b-card-body>
        </b-card>
        <b-card-body class="card">
          <div class="v1">
            <b-button class="btn btn-primary" @click="filterAlapZsalu()">
              <i class="simple-icon-refresh"> Lista vissza állítás</i>
            </b-button>
            <b-button class="btn btn-primary" @click="addAlapZsalu()">
              <i class="simple-icon-plus"> uj tétel</i>
            </b-button>
            <b-button class="btn btn-success" @click="addtask()">
              <i class="simple-icon-check"> Mentés</i>
            </b-button>
          </div>
        </b-card-body>
      </b-colxx>
    </b-row>
  </div>
</template>



<script>

import router from '../../../router'




const item = 'alapZsalu'



export default {
  name: 'Colop',

  data() {
    return {
      alapZsalu: [],
      filteredAlapzsalu: []
    };
  },
  computed: {

  },

  created() {

    if (localStorage.getItem(item) === null) {
      this.$store.dispatch("getAlapZsalu")

      this.alapZsalu = JSON.parse(localStorage.getItem("alapZsalu"));
      this.filterAlapZsalu();

    } else {
      this.alapZsalu = JSON.parse(localStorage.getItem("alapZsalu"));
      this.filterAlapZsalu();
    }

  },

  methods: {

    filterAlapZsalu() {
      const { params } = this.$route;
      const { id } = params;

      if (id === "cölöp") {
        // cölöp specifikus szűrési feltételek
        this.filteredAlapzsalu = this.alapzsaluk.filter((alapzsalu) => {
          return alapzsalu.szint === "cölöp";
        });
      } else if (id === "gerenda") {
        // gerenda specifikus szűrési feltételek
        this.filteredAlapzsalu = this.alapzsaluk.filter((alapzsalu) => {
          return alapzsalu.szint === "gerenda";
        });
      } else if (id === "alaplemez") {
        // alaplemez specifikus szűrési feltételek
        this.filteredAlapzsalu = this.alapzsaluk.filter((alapzsalu) => {
          return alapzsalu.szint === "alaplemez";
        });
      } else {
        // ha nincs érvényes id paraméter, visszaadja az összes alapzsalut
        this.filteredAlapzsalu = this.alapzsaluk;
      }

      console.log("szürés",this.filteredAlapzsalu);
    }


  },



  deleteAlapZsalu(id) {
    console.log(id)
    this.filteredAlapzsalu = this.filteredAlapzsalu.filter(
      filteredAlapzsalu => filteredAlapzsalu.id !== id,
      localStorage.setItem("alapZsalu", JSON.stringify(this.filteredAlapzsalu),
      )
    );
  },

  addAlapZsalu() {
    router.push('/app/basis/create', item);
    /* this.filteredAlapzsalu.push({
      id: this.filteredAlapzsalu.length + 1,
      szint: "colop",
      tetel: "uj tétel",
      mennyiseg: 0,
      mertekegyseg: "m2",
      anyagegysegar: 0,
      dijegysegar: 0
      */
  },

  addtask() {
    localStorage.setItem("alapZsalu",
      JSON.stringify(this.filteredAlapzsalu)
    );
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

.vs {
  margin-left: 95%;
  margin-right: 5%;
  margin-bottom: 15px;
  margin-top: 1px;

}


b-kard-title {
  font-size: 5em;
  align-items: center;
}

.form-control {
  font-size: 20px;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin: 10px;
  border-radius: 1rem;
}

.btn-danger {
  background-color: red;

}

.btn-success {
  background-color: green;
  margin: 20px;
}

.btn-primary {
  margin: 10px;

}
</style>