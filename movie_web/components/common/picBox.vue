<template>
  <div class="movie">
    <div class="movie_img">
      <img :src="data.picUrl" alt srcset>
    </div>
    <div class="movie_name">
      <div>{{ data.title }}</div>
      <span>{{ data.score }}</span>
    </div>
    <div class="movie_description">
      {{ data.description }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: {
      type: Object,
      default () {
        return {}
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
<style lang="less" scoped>
.movie {
  margin-right: 16px;
  width: 220px;
  user-select: none;
  &_img {
    overflow: hidden;
    height: 320px;
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  &_name {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: bold;
      color: #ff5838;
    }
  }
  &_description {
    color: #797979;
  }
}
</style>
