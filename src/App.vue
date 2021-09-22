<template>
  <div id="app">
    <sidebar-menu width="64px" :menu="menu" />       
    <router-view></router-view>

  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    // components: {
    //   HelloWorld
    // },
    data() {
      return {
        menu: [
          {
            href: '/',
            icon: 'fa fa-user'
          },
          {
            href: '/upload',
            icon: 'fa fa-chart-area',
          }
        ]
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
