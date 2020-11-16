export default {
    state: {
        posts: []
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        }
    },
    actions: {
        // В actions первый параметр - всегда какой-то контекст
        async fetchPosts({commit, dispatch, getters}, limit = 3) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
            const posts = await res.json();

            dispatch('sayHello');

            commit('updatePosts', posts);
        },
        sayHello() {
            console.log('Hello');
        }
    },
    getters: {
        validatePosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body;
            });
        },
        allPosts(state) {
            return state.posts;
        },
        postsCount(state, getters) {
            return getters.validatePosts.length;
        }
    }
}