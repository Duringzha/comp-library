<script lang="ts">
import { defineComponent } from 'vue-demi'
export default defineComponent({
  name: 'PlHeader',
  props: {},
  data () {
    return {};
  },
  methods: {
    logoClick () {},
  },
})
</script>

<template>
  <div class="header-container">
    <header class="header-wrapper white">
      <div class="logo-container" @click="logoClick">
        <img src="~assets/images/logo_jpg.jpg" class="logo"/>
      </div>
      <div class="service-hotline">
        <div>平台服务热线：020-38555747</div>
        <div>汽车业务专线：400-8628-090</div>
      </div>
      <div class="spacer">
        <slot name="spacer" />
      </div>
      <slot />
    </header>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
.header-container {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #E7EAF1;
  .header-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1001;
    .spacer {
      flex: 1;
      overflow: hidden;
    }
    .logo-container {
      height: 100%;
      cursor: pointer;
      .logo {
        width: 105px;
        margin: 10px 25px 0 0;
      }
    }
    .service-hotline {
      font-size: 12px;
      flex-shrink: 0;
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      white-space: nowrap;
    }
  }
}
</style>