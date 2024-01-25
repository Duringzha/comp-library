<script lang="ts">
// import { defineComponent, ref, version, isVue2 } from 'vue-demi'
import { defineComponent, version } from 'vue-demi';
export default defineComponent({
  name: 'PlHelloWorld',
  props: {
    msg: String,
  },
  // setup() {
  //   const count = ref<number>(0)
  //   function increment() {
  //     count.value ++;
  //     console.log('click', count.value);
  //   }
  //   return {
  //     count,
  //     increment,
  //     version
  //   }
  // },
  data() {
    return {
      count: 0,
      version
    };
  },
  methods: {
    increment() {
      this.count ++;
      console.log('click', this.count);
    },
  },
})
</script>

<template>
  <div style="width: 100%; text-align: center;">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="~assets/images/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="~assets/images/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>Vite + Vue{{ version }}</h1>
    <div class="card">
      <el-button type="primary" @click="increment">count is {{ count }}</el-button>
      <p>
        Edit
        <code>eliCopm/HelloWorld.vue</code> to test HMR
      </p>
    </div>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue{{ version }} + Vite starter
    </p>
    <p>
      {{ msg }}
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>
<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

