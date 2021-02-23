<template>
  <div class="flex flex-col h-screen debug-screens">
    <nav-bar class="fixed  w-full justify-between flex-wrap  top-0 animated shadow-2xl font-serif"></nav-bar>
    <div class="overflow-y-auto" ref="pageContent" id="w">
      
      <component :is="layout">
        <router-view/>
      </component>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

const default_layout = 'default';

export default {
  components: {
    NavBar
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  }
}
</script>

<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
