<template>
  <div id="app">
    <PostForm />
    <h1>{{ postsCount }}</h1>
    <div v-for="post in validatePosts" :key="post.id" class="container">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
// Хелперы
import { mapGetters, mapActions } from 'vuex';
import PostForm from '@/components/PostForm';

export default {
  name: 'app',
  components: {
    PostForm
  },
  // Получаем данные с сервера без vuex
  // data() {
  //   return {
  //     posts: []
  //   };
  // },

  // Получаем данные с помощью vuex
  // computed: {
    // Один из методов
    // allPosts() {
    //   return this.$store.getters.allPosts;
    // }
  // },

  // Метод получения, с помощью хелпера
  computed: mapGetters(['validatePosts', 'postsCount']),

  // Получаем данные без vuex
  // async mounted() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  //   const posts = await res.json();
  //   this.posts = posts;
  // }

  // Получаем данные с помощью хелпера
  methods: mapActions(['fetchPosts']),

  // Получаем данные с помощью vuex
  async mounted() {
    // this.$store.dispatch('fetchPosts');
    this.fetchPosts(4);
  },
}
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  width: 95%;
  max-width: 500px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  border: 0.1px solid black;
}
</style>
