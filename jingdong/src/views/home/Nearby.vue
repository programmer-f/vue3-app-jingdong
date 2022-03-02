<template>
  <div class="nearby">
  <h3 class="nearby__title">附近店铺</h3>
  <div
    class="nearby__item"
    v-for="item in nearbyList"
    :key="item.id"
  >
    <img :src="item.imgUrl" class="nearby__item__img">
    <div class="nearby__content">
      <div class="nearby__content__title">{{item.title}}</div>
      <div class="nearby__content__tags">
        <span
          v-for="(innerItem,innerIndex) in item.tags"
          :key="innerIndex"
          class="nearby__content__tag">
        {{innerItem}}
        </span>
      </div>
      <p class="nearby__content__highlight">{{item.desc}}</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送0￥', '基础运费5￥'],
      desc: 'VIP尊享满89减4元'
    },
    {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送0￥', '基础运费5￥'],
      desc: 'VIP尊享满89减4元'
    },
    {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送0￥', '基础运费5￥'],
      desc: 'VIP尊享满89减4元'
    }]
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/varibles.scss';
.nearby{
  &__title{
    margin: .16rem 0 .02rem 0;
    color: $content-fontcolor;
    font-size: .18rem;
    font-weight: normal;
  }
  &__item{
    display: flex;
    padding-top: .12rem;
    &__img{
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
  }
  &__content{
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title{
      color: $content-fontcolor;
      line-height: .22rem;
      font-size: .16rem;
    }
    &__tags{
        line-height: .18rem;
        font-size: .13rem;
        margin-top: .08rem;
        color: $content-fontcolor;
    }
    &__tag{
      margin-right: .16rem;
    }
    &__highlight{
      line-height: .18rem;
      margin: .08rem 0 0 0;
      font-size: .13rem;
      color:#e93b3b
    }
  }
}
</style>
