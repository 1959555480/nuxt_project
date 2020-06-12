<template>
  <footer class="findex">
    <div class="findex_list">
      <div class="findex_list_left">
        <div v-for="item in listArr" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="findex_code">
      <div class="findex_code_img">
        <img src="@/assets/images/tou.jpg" alt srcset>
      </div>
      <div>扫描二维码关注我们</div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      listArr: [
        '电影分区', '电视剧分区', 'VIP精选', 'VIP特权', '关于我们', '个人中心', '在线客服', '帮助中心'
      ]
    }
  }
}
</script>

<style lang='less' scoped>
@backColor: #282828;
.findex {
  padding: 0 100px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @backColor;
  color: #fff;
  &_list {
    width: 45%;
    &_left{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      div {
        width: 25%;
      }
    }
  }
  &_code {
    &_img {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
