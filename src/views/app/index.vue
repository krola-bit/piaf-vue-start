<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script>
import AppLayout from "../../layouts/AppLayout";

export default {
  components: {
    "app-layout": AppLayout
  },

 created() {
    if (localStorage.getItem("alapZsalu") === null) {
      this.$store.dispatch("getAlapZsalu");
    }
  }
  

  
};
</script>
