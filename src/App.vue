<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--  通过观察路由路径的变化来解决组件不更新的问题 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">

</style>
