<template>
  <div>
    <MarkdownPreview :initialValue="readme"></MarkdownPreview>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { MarkdownPreview } from 'vue-meditor';
import readme from '../../../README.md?raw';
export default defineComponent({
  data() {
    return {
      readme
    };
  },
  components: {
    MarkdownPreview,
  },
  methods: {
  },
});
</script>
<style lang="scss" scoped>
::v-deep {
  .markdown-preview {
    padding: 0 !important;
  }
}
</style>