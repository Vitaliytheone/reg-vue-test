<template>
  <div class="app-layout">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch({
      type: "loadArticles"
    });
  }
};
</script>

<style>
@import "./App.css";
</style>
