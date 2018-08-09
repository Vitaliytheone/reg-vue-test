<template>
    <div v-if="computedArticle">
       <h2>{{computedArticle.title}}</h2>
       <div>{{computedArticle.description}}</div>
       <div>{{computedArticle.text}}</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["storedArticles"]),
    id() {
      return this.$route.params.id;
    },
    computedArticle() {
      return this.storedArticles.find(article => this.id == article.id);
    }
  }
};
</script>
