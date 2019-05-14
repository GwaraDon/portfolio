<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
  <!-- <HelloWorld/> -->
</template>

<script>
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    HelloWorld,
    Footer
  }
};
</script>

