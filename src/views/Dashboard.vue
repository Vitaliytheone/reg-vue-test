<template>
    <div class = 'articles'>
      <nav class="articles--navbar">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/whatever">What ever</a>
      </nav>
      <router-link 
        v-bind:to="'/article/' + article.id"
        v-bind:class="'articles--item ' + article.type"
        v-for="article in storedArticles" :key="article.id"
      >
        {{article.title}}
       </router-link >
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["storedArticles"])
  }
};
</script>
