<template>
  <div class="index">
    <el-carousel height="460px" arrow="always">
      <el-carousel-item v-for="(item,$index) in imgArr" :key="$index">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
    <div class="index_tabs">
      <tabs :list-arr="tabsArr" />
    </div>
    <div class="index_recommed wrap">
      <div v-for="item in videoList" :key="item.name" class="index_relative">
        <div class="index_recommed_title">
          <div>
            <img src="@/assets/images/tou.jpg">
          </div>
          <span>{{ item.title }}</span>
        </div>
        <div class="index_recommed_movie">
          <div class="index_recommed_movie_picBox" :style="picTransfrom">
            <div v-for="content in item.arr" :key="content.id">
              <pic-box :data="content" />
            </div>
          </div>
        </div>
        <div class="index_recommed_movie_arrowLeft" @click="toLeft">
          <img src="@/assets/images/down.png">
        </div>
        <div class="index_recommed_movie_arrowRight" @click="toRight">
          <img src="@/assets/images/down.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      imgArr: [
        {
          src: require('@/assets/images/22.jpg')
        },
        {
          src: require('@/assets/images/22.jpg')
        },
        {
          src: require('@/assets/images/22.jpg')
        }
      ],
      tabsArr: [
        {
          title: '电影',
          arr: ['内地', '欧美', '战争', '文艺']
        },
        {
          title: '电影',
          arr: ['内地', '欧美', '战争', '文艺']
        },
        {
          title: '电影',
          arr: ['内地', '欧美', '战争', '文艺', '内地', '欧美', '战争', '文艺']
        }
      ],
      videoList: [
        {
          name: 'hot_recommed',
          title: '热门推荐',
          arr: [
            {
              id: 1,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 2,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 3,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 4,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 5,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 6,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 7,
              title: '未闻花名',
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 8,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            }
          ]
        },
        {
          name: 'movies_recommed',
          title: '电影推荐',
          arr: [
            {
              id: 1,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 2,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 3,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 4,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 5,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 6,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 7,
              title: '未闻花名',
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 8,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            }
          ]
        },
        {
          name: 'hot_tv',
          title: '热门电视剧',
          arr: [
            {
              id: 1,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 2,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 3,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 4,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 5,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 6,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 7,
              title: '未闻花名',
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 8,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            }
          ]
        },
        {
          name: 'vip',
          title: 'VIP精选',
          arr: [
            {
              id: 1,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 2,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 3,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 4,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 5,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 6,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 7,
              title: '未闻花名',
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            },
            {
              id: 8,
              title: '未闻花名',
              score: 8.9,
              picUrl: require('@/assets/images/11.jpg'),
              description: '我们仍未知道那天所看见的花的名字'
            }
          ]
        }
      ],
      str: '',
      step: 0,
      index: 0,
      width: 236
    }
  },
  computed: {
    picTransfrom () {
      return this.str
    },
    picBoxWidth () {
      const arrIndex = this.videoList[0].arr.length
      return arrIndex * this.width
    },
    move () {
      const viewHeight = 1700
      return this.picBoxWidth - viewHeight
    }
  },
  watch: {},
  mounted () {
  },
  created () {},
  methods: {
    toRight () {
      console.log(this.move, this.step)
      if (Math.abs(this.step) >= this.move) {
        this.step = -this.move
        return
      }
      this.step -= 10
      this.str = `transform:translateX(${this.step}px)`
    },
    toLeft () {
      console.log(this.move, this.step)
      if (this.step > 0) { return }
      this.step += 10
      this.str = `transform:translateX(${this.step}px)`
    }
  }
}
</script>
<style lang="less" scoped>
img {
  display: block;
  width: 100%;
  margin: 0 auto;
  // height: 100%;
}
.index {
  &_tabs {
    padding: 0 110px;
  }
  &_relative {
    position: relative;
    margin-top: 20px;
  }
  &_recommed {
    &_title {
      display: flex;
      font-size: 26px;
      margin: 0 0 20px 0;
      div {
        width: 25px;
        height: 25px;
        margin: auto 0;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    &_movie {
      display: flex;
      overflow: auto;
      &_picBox {
        display: flex;
        transition: all 0.3s;
      }
      &_arrowLeft,
      &_arrowRight {
        top: 50%;
        transform: translateY(-50px);
        position: absolute;
        width: 50px;
        height: 50px;
        background: rgba(000, 000, 000, 0.5);
        img {
          display: block;
          width: 100%;
        }
      }
      &_arrowLeft {
        left: 0;
        img {
          transform: rotate(90deg);
        }
      }
      &_arrowRight {
        right: 0;
        img {
          transform: rotate(-90deg);
        }
      }
    }
    &_movie::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
}
</style>
