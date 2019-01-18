<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <router-link tag="a" :to="{path:'/how-to-use-alipay'}">充值教程</router-link>
</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello Kendo UI for Vue.js'
      }
    }
  }
</script>
