<template>
  <div class="wrap classification">
    <div class="classification_check">
      <div class="classification_check_line flexRow">
        <div>
          <my-select v-model="movieMsg" title="分类" :arr="movieTypeArr" />
        </div>
      </div>
      <div class="classification_check_line flexRow">
        <div>
          <my-select v-model="areaMsg" title="地区" :arr="areaTypeArr" />
        </div>
      </div>
      <div class="classification_check_line flexRow">
        <div>
          <my-select v-model="typeMsg" title="类型" :arr="typeArr" />
        </div>
      </div>
      <div class="classification_check_line flexRow">
        <div>
          <my-select v-model="timeMsg" title="年代" :arr="timeTypeArr" />
        </div>
      </div>
      <div class="classification_check_line flexRow">
        <div>
          <my-select v-model="moneyMsg" title="资费" :arr="moneyTypeArr" />
        </div>
      </div>
      <div class="classification_check_line flexRow">
        <div>
          <my-select v-model="sortMsg" title="排序" :arr="sortTypeArr" />
        </div>
      </div>
    </div>
    <div class="classification_content">
      <div v-for="content in videoArr" :key="content.id">
        <pic-box :data="content" />
      </div>
    </div>
    <div class="classification_content" />
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      movieMsg: 'movie',
      areaMsg: 'inland',
      typeMsg: 'comedy',
      timeMsg: 'news',
      moneyMsg: 'free',
      sortMsg: 'newArrival',
      movieTypeArr: [
        {
          name: 'movie',
          title: '电影'
        },
        {
          name: 'varietyShow',
          title: '综艺节目'
        },
        {
          name: 'tv',
          title: '电视剧'
        }
      ],
      areaTypeArr: [
        {
          name: 'inland',
          title: '内地'
        },
        {
          name: 'hk',
          title: '港台'
        },
        {
          name: 'europe',
          title: '欧洲'
        },
        {
          name: 'movie1',
          title: '美国'
        },
        {
          name: 'us',
          title: '日本'
        },
        {
          name: 'korea',
          title: '韩国'
        },
        {
          name: 'thailand',
          title: '泰国'
        },
        {
          name: 'other',
          title: '其他'
        }
      ],
      typeArr: [
        {
          name: 'comedy',
          title: '喜剧'
        },
        {
          name: 'war',
          title: '战争'
        },
        {
          name: 'art',
          title: '文艺'
        },
        {
          name: 'terror',
          title: '恐怖'
        },
        {
          name: 'family',
          title: '家庭'
        },
        {
          name: 'youth',
          title: '青春'
        },
        {
          name: 'fantasy',
          title: '奇幻'
        },
        {
          name: 'action',
          title: '动作'
        },
        {
          name: 'adventure',
          title: '冒险'
        },
        {
          name: 'love',
          title: '爱情'
        },
        {
          name: 'record',
          title: '纪录'
        }
      ],
      timeTypeArr: [
        {
          name: 'news',
          title: '最新'
        },
        {
          name: '19s',
          title: '2019'
        },
        {
          name: '18s',
          title: '2018'
        },
        {
          name: '17s',
          title: '2017'
        },
        {
          name: '16s',
          title: '2016'
        },
        {
          name: '15s',
          title: '2015'
        },
        {
          name: '14s',
          title: '2014-2010'
        },
        {
          name: '10s',
          title: '2010-2000'
        },
        {
          name: '90s',
          title: '90年代'
        },
        {
          name: '80s',
          title: '80年代'
        },
        {
          name: 'earlier',
          title: '更早'
        }
      ],
      moneyTypeArr: [
        {
          name: 'free',
          title: '免费'
        },
        {
          name: 'vip',
          title: 'VIP'
        },
        {
          name: 'ticket',
          title: '用券'
        }
      ],
      sortTypeArr: [
        {
          name: 'newArrival',
          title: '最新上架'
        },
        {
          name: 'mostPlay',
          title: '最多播放'
        },
        {
          name: 'popular',
          title: '最受好评'
        }
      ],
      videoArr: [
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
          score: 8.9,
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
  },
  computed: {},
  watch: {
    movieMsg (newVal, oldVal) {
      console.log('新旧值', this.movieMsg)
      console.log('新旧值', this.areaMsg)
      console.log('新旧值', this.typeMsg)
      console.log('新旧值', this.timeMsg)
      console.log('新旧值', this.moneyMsg)
      console.log('新旧值', this.sortMsg)
    }
  },
  created () {},
  mounted () {
    console.log(this.radio1)
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.classification {
  &_check {
    padding: 23px;
    background-color: #F7F7F7;
    margin: 20px 0 36px 0;
    &_line:nth-child(n+2){
      margin: 30px 0 0 0;
    }
  }
  &_content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
