<template>
  <home-layout>
    <div :class="{'landing-page': true,'show-mobile-menu': showMobileMenu}">
      <div class="main-container">
        <div class="landing-page-nav">
          <headroom style="height:initial;">
            <nav>
              <div class="container d-flex align-items-center justify-content-between">
                <a class="navbar-logo pull-left" @click="scrollTo('#home')" href="javascript:;">
                  <span class="white"></span>
                  <span class="dark"></span>
                </a>              
              </div>
            </nav>
          </headroom>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";
import { adminRoot } from "../../constants/config";
import router from "../../router";

const valami=1;

export default {
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent,
    headroom: headroom
  },
  data() {
    return {
      showMobileMenu: false,
      adminRoot,
      layouts

    };
  },

  Created() {

  },


  methods: {
  },
  
};

if (valami==1) {
  console.log("valami");
  router.push('/user/login');
}
</script>
