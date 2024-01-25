<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
  props: {
    compName: String,
    compInfo: Object,
    compProps: Object,
    codeString: String,
    compAttributes: Array<Object>
  }
});
</script>
<template>
  <div class="comp-container">
    <div class="comp-title">
      <h2>示例组件</h2>
      <p>这是一个使用vue2语法编写的兼容vue3的示例组件</p>
    </div>
    <el-divider></el-divider>
    <div class="comp-content">
      <h3>基础用法</h3>
      <p>基础的组件用法</p>
      <component :is="compName" v-bind="compProps"></component>
      <el-collapse>
        <el-collapse-item title="显示代码" name="1">
          <code>{{ codeString }}</code>
        </el-collapse-item>
      </el-collapse>
      <h3>Attributes</h3>
      <el-table :data="compAttributes" style="width: 100%">
        <el-table-column prop="propName" label="参数"></el-table-column>
        <el-table-column prop="propInfo" label="说明"></el-table-column>
        <el-table-column prop="propType" label="类型"></el-table-column>
        <el-table-column prop="propValue" label="可选值"></el-table-column>
        <el-table-column prop="propDefault" label="默认值"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.comp-container {
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
}
</style>