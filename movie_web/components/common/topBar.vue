<template>
  <header class="video">
    <div class="video_left">
      <nuxt-link to="/">
        <div class="video_left_logo">
          LOGO
        </div>
      </nuxt-link>
      <div class="video_left_vip">
        开通会员
      </div>
    </div>
    <div class="video_center">
      <input type="search" placeholder="绝地战警:疾速追击">
    </div>
    <div class="video_right">
      <div v-for="(item, index) in itemList" :key="index" class="item">
        <div class="item_pic">
          <img src="~/assets/images/icon1.png" alt>
        </div>
        <nuxt-link style="color:#fff" :to="'/'+item.name">
          {{ item.title }}
        </nuxt-link>
        <div class="item_pic">
          <img src="~/assets/images/down.png" alt>
        </div>
      </div>
      <div class="tou">
        <img src="~/assets/images/tou.jpg" alt srcset>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      itemList: [
        {
          title: '电影',
          name: 'classification'
        },
        {
          title: '综艺',
          name: 'variety'
        },
        {
          title: '电视剧',
          name: 'tv'
        },
        {
          title: '观看记录',
          name: 'records'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
@fontColor: #101010;
@backColor: #282828;
@logoColor: #b3b3b3;
.video {
  min-width: 1500px;
  overflow: auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  background-color: @backColor;
  height: 70px;
  line-height: 70px;
  padding: 0 110px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2020;
  &_left,
  &_right {
    display: flex;
  }
  &_center {
    flex: 1;
    color: @fontColor;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      background-color: @logoColor;
      display: block;
      width: 100%;
      height: 40px;
      padding: 0 0 0 14px;
      margin: auto 0;
      border-radius: 40px;
      border: none;
    }
  }
  &_left {
    width: 30%;
    &_logo {
      background-color: @logoColor;
      color: @fontColor;
      font-size: 36px;
      padding: 0 20px;
    }
    &_vip {
      padding: 0 20px;
    }
  }
  &_right {
    width: 40%;
    justify-content: flex-end;
    .item {
      display: flex;
      margin-right: 20px;
      .item_pic {
        width: 16px;
        height: 16px;
        margin: auto 0;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .tou {
      width: 46px;
      height: 46px;
      border-radius: 46px;
      overflow: hidden;
      margin: auto 0;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
