<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        type="text"
        placeholder="请输入用户名"
        v-model="username"
        class="wrapper__input__content"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        placeholder="请输入密码"
        v-model="password"
        class="wrapper__input__content"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        placeholder="确认密码"
        v-model="ensurement"
        class="wrapper__input__content"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">
      已有账户去登陆
    </div>
    <Toast v-if="isShowToast" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";

const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const userData = reactive({
    username: "",
    password: "",
    ensurement: "",
  });
  const handleRegister = async () => {
    try {
      let result = await post("/api/user/register", {
        username: userData.username,
        password: userData.password,
      });
      if (result?.errno === 0) {
        //跳转到登陆页面
        router.push({ name: "Login" });
      } else {
        showToast("注册失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  const { username, password, ensurement } = toRefs(userData);
  return {
    username,
    password,
    ensurement,
    handleRegister,
  };
};

const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "Login" });
  };
  return { handleLoginClick };
};

export default {
  name: "Register",
  components: {
    Toast,
  },
  //setup的作用告诉你，代码执行的一个流程，尽量简洁，将业务逻辑都封装在别的地方
  setup() {
    const { isShowToast, toastMessage, showToast } = useToastEffect();
    const { username, password, ensurement, handleRegister } =
      useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();

    return {
      isShowToast,
      toastMessage,
      username,
      password,
      ensurement,
      handleRegister,
      handleLoginClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/varibles.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    box-sizing: border-box;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    height: 0.48rem;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
