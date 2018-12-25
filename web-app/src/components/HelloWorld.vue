<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <kendo-calendar :value="new Date()"></kendo-calendar>
  <kendo-button class="k-primary">Button</kendo-button>
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
