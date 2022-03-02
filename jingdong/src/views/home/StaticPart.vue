<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe7f1;</span>
    西安邮电大学安美公寓1号楼
    <span class="iconfont position__notice">&#xe601;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe6e1;</span>
    <span class="search__text">山姆会员店</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
  </div>
  <div class="icons">
    <div
    v-for="(item,index) in iconList"
    :key="index"
    class="icons__item">
      <img :src="item.imgUrl" class="icons__item__img"/>
      <p class="icons__item__desc">{{item.desc}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/varibles.scss';
@import '../../style/mixins.scss';
.position{
    color: $content-fontcolor;
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    @include ellipsis;
    .position__icon{
      position:relative;
      top: .01rem;
      font-size: .2rem;
    }
    .position__notice{
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .2rem;
    }
  }
.search{
  margin-bottom: .12rem;
  line-height: .32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius:.16rem;
  .iconfont{
    position:relative;
    top:.02rem;
    font-size:.2rem;
    display: inline-block;
    padding:0 .08rem 0 .16rem;
  }
  &__text{
    display: inline-block;
    font-size: .14rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons{
  margin-top: .16rem;
  display: flex;
  flex-wrap: wrap;
  &__item{
    width: 20%;
    &__img{
      display:block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc{
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap{
  height: .1rem;
  margin: 0 -.18rem;
  background-color: $content-bgColor;
}
</style>
