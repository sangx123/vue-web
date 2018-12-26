<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import {bus} from "../bus.js";
  export default {
    name: 'App',
    components:{
      appHeader:Header
    },
    create(){
      bus.$on("goto", url => {
        console.log("收到事件")
        if (url === "/login") {
          localStorage.removeItem("access-user");
        }
        this.$router.push(url);
      });
    }
  }
</script>
<style>
</style>
