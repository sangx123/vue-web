<template>
  <div id="app">
    <app-header></app-header>
        主页显示的东西
  </div>
</template>

<script>
  import Header from "@/components/Header"
  export default {
    name: 'App',
    components:{
      appHeader:Header
    }
  }
</script>
<style>
</style>
