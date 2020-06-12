<template>
  <div class="tabs">
    <div v-for="(item,index) in listArr" :key="index" class="tabs_item">
      <div class="tabs_item_icon">
        <img src="@/assets/images/manage.png" alt="">
      </div>
      <div class="tabs_item_title">
        {{ item.title }}
      </div>
      <div v-for="(content,$index) in item.arr" :key="$index" class="tabs_item_content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    listArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.tabs{
  height: 43px;
  line-height: 43px;
  margin: 40px 0 52px 0;
  display: flex;
  justify-content: space-around;
  &_item{
    display: flex;
    align-items: center;
    background-color: #F4F4F4;
    border-radius: 30px;
    padding: 0 24px;
    &_icon{
      width: 25px;
      height: 25px;
      img{
        display: block;
        width: 100%;
      }
    }
    &_title{
      font-weight: bold;
      margin-left: 12px;
    }
    &_content{
      margin-left: 16px;
      color: rgba(162, 162, 162, 1);
    }
  }
}
</style>
