<template>
  <div id="app">
    <!-- nav bar -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-4">
          Home
        </router-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div v-if="user&&user.first_name == 'Admin' " class="navbar-item">
            <router-link to="/product/create" class="button is-primary">
              <strong>Add Product</strong>
            </router-link>
          </div>
          <div v-if="user" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-24x24 my-auto">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
              <span class="pl-3">{{ user.first_name }} {{ user.last_name }}</span>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="$router.push('/user/profile')">Profile</a>
              <a class="navbar-item" @click="logOut()">Log out</a>
            </div>
          </div>

          <div v-if="!user" class="navbar-item">
            <a class="button is-light" @click="$router.push('/user/login')">
              Log in
            </a>
          </div>
          <div v-if="!user" class="navbar-item">
            <a class="button is-primary" @click="$router.push('/user/signup')">
              <strong>Register</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" />
  </div>
</template>

<script>
import axios from '@/plugins/axios'
export default {
  data () {
    return {
      user: null
    }
  },
  mounted () {
    this.onAuthChange()
  },
  methods: {
    onAuthChange () {
      const token = localStorage.getItem('token')
      if (token) {
        this.getUser()
      }
    },
    getUser () {
      axios.get('/user/me').then(res => {
        this.user = res.data
      })
    },
    logOut () {
      localStorage.removeItem('token');
      this.user = null;
      this.$router.push({path: '/user/login'})
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
  background: linear-gradient(221deg, #edc7b7, #eee2dc 73%);
}

nav {
  -webkit-box-shadow: 0px 0px 10px 0px #000000; 
  box-shadow: 0px 0px 10px 0px #000000;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navbar{
  padding-left: 50px;
  padding-right: 50px;
}
</style>