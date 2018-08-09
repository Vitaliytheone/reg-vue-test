import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  articles: []
};

const mutations = {
  UPDATE_ARTICLES(state, payload) {
    state.articles = payload;
  }
};

const actions = {
  async loadArticles(context) {
    const { data } = await axios.get("/api/tiles");
    context.commit("UPDATE_ARTICLES", data.tiles);
  }
};

const getters = {
  storedArticles: state => state.articles
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
