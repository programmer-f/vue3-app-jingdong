<template>
  <div class="docker">
    <div
    v-for="(item,index) in dockerList"
    :key="item.text"
    :class="{'docker__item':true,'docker__item--active':index === 0}">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
    <p>666</p>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6bb;', text: '首页' },
      { icon: '&#xe6a0;', text: '购物车' },
      { icon: '&#xe613;', text: '订单' },
      { icon: '&#xe600;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/varibles.scss';
.docker{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  color: $content-fontcolor;
  border-top: .01rem solid $content-bgColor;
  display: flex;
  padding: 0 .18rem;
  box-sizing: border-box;
  &__item{
    flex:1;
    text-align: center;
    .iconfont{
      font-size: .18rem;
      margin: .07rem 0 .02rem 0;
    }
    &--active{
      color:#1fa4fc;
    }
  }
  &__title{
    font-size: .2rem;
    transform: scale(.5,.5);
    transform-origin: center top;
  }
}
</style>
