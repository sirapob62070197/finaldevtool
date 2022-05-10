<template>
  <v-app>
    <v-app-bar v-if="$store.getters['auth/accessToken']" fixed app color="primary">
      {{ title }}
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      Pay Pai
      <span> &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'Paypai'
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>
