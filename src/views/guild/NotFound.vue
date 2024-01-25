<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
  methods: {
    goHome() {
      this.$router.push({name: 'Home'});
    }
  },
});
</script>
<template>
  <h2>page not found</h2>
</template>
<style lang="scss" scoped>
.m-not-found {
  width: 1200px;
  margin: 0 auto;
  .m-img {
    display: inline-block;
    vertical-align: top;
  }
  .m-info {
    display: inline-block;
    margin-top: 325px;
    .u-info {
      margin-bottom: 30px;
      font-size: 18px;
      color: #333;
    }
    .u-btn {
      display: inline-block;
      text-align: center;
      border-radius: 3px;
      color: #fff;
      font-size: 16px;
      padding: 0 40px;
      height: 38px;
      line-height: 38px;
      background-color: $themeColor;
    }
  }
}
</style>
