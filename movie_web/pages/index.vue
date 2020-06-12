<template>
  <div class="container">
    <div>{{ counter }}</div>
    <tabs :list-arr="['1','2']" />
    <nuxt-link to="/home">
      首页
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'counter'
    ])
  },
  beforeCreate () {
    this.$router.replace('/home')
  },
  mounted () {
    this.$myInjectedFunction('test')
  }
}
</script>
<style>
@import "@/assets/font/font.css";
body{
    font-family: SourceHanSansCN-Normal;
}
</style>
