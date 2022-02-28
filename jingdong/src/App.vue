<template>
<div>
  <div class="wrapper">
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
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6bb;</div>
      <div class="docker__title">首页</div>
      </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6a0;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe613;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
 </div>
</template>

<style lang="scss">
@import './style/varibles.scss';
@import './style/mixins.scss';
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  padding: 0 .18rem;
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
}
.gap{
  height: .1rem;
  margin: 0 -.18rem;
  background-color: $content-bgColor;
}
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
