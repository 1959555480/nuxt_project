<template>
  <div class="select">
    <div class="select_title">
      {{ title }}
    </div>
    <div v-for="(item,index) in arr" :key="item.name" class="select_list">
      <div class="select_list_item" :class="cur==index?'class':''" @click="clickItem(item,index)">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  model: {
    prop: 'msg', // 这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 msg
    event: 'parent-event'// 这个字段，是指父组件监听 parent-event 事件
  },
  props: {
    arr: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      cur: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    clickItem (item, index) {
      this.cur = index
      this.$emit('parent-event', item.name)
    }
  }
}
</script>
<style lang="less" scoped>
.select {
  display: flex;
  height: 30px;
  line-height: 30px;
  user-select: none;
  &_title{
    font-weight: bold;
  }
  &_list{
    margin-left: 10px;
    &_item{
      border-radius: 18px;
      font-size: 16px;
      text-align: center;
      padding: 0 20px;
    }
  }
}
.class{
  background-color: #D8ECFF;
  color: #3A81EC;
}
</style>
