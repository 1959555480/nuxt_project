<template>
  <div>
    <h4>吴姗姗</h4>
    <nuxt-link to="/gril/name">
      人名
    </nuxt-link>
    <nuxt-link to="/gril/proto">
      照片
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: '女孩',
      name: '女孩',
      content: '女孩'
    }
  }
}
</script>

<style>
.page-enter-to, .page-leave-to{
  /* transition: all .2s; */
}
.page-enter, .page-leave {
  transform: translate(-500px);
}
.page-enter-active, .page-leave-active{
  transition: all .5s;
}
</style>
