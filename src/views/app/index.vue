<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script>
import { createDecipheriv } from "crypto";
import AppLayout from "../../layouts/AppLayout";

export default {
  components: {
    "app-layout": AppLayout,
  },
  created() {
    console.log("created app index");
    this.$store.dispatch("getZsalu"); // ez a zsalu.js-ből jön
  },

 
};
</script>
