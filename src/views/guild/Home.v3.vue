<template>
  <div>
    <MdPreview :modelValue="readme"></MdPreview>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { MdPreview } from 'md-editor-v3';
import readme from '../../../README.md?raw';
export default defineComponent({
  data() {
    return {
      readme
    };
  },
  components: {
    MdPreview
  },
  methods: {
  },
});
</script>