<script lang="ts">
import { defineComponent } from 'vue-demi';
import compTemplate from '../template.vue';
export default defineComponent({
  components: {
    compTemplate
  },
  data() {
    return {
      compProps: {
        msg: '示例组件'
      },

    };
  },
});
</script>
<template>
  <compTemplate
    compName="PlHelloWorld"
    :compProps="compProps"
    codeString='<PlHelloWorld msg="示例组件"></PlHelloWorld>'
    :compAttributes="[{
      propName: 'msg',
      propInfo: '示例组件参数',
      propType: 'String',
      propValue: '-',
      propDefault: '-'
    }]"
  ></compTemplate>
  <!-- <PlHelloWorld msg="示例组件"></PlHelloWorld> -->
</template>