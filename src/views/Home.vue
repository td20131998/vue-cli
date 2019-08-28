<template>
  <div class="home">
    <Header />
    <div class="container">
      <!-- <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
