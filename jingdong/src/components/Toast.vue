<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Toast",
  props: ["message"],
};
export const useToastEffect = () => {
  const toastData = reactive({
    isShowToast: false,
    toastMessage: "",
  });

  const showToast = (msg, delay = 2000) => {
    toastData.isShowToast = true;
    toastData.toastMessage = msg;
    setTimeout(() => {
      toastData.isShowToast = false;
      toastData.toastMessage = "";
    }, delay);
  };
  const { isShowToast, toastMessage } = toRefs(toastData);
  return { isShowToast, toastMessage, showToast };
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  padding: 10px;
}
</style>
