<template>
  <v-card>
    <v-card-title>
      {{ formTitle }}
    </v-card-title>

    <v-card-content>
      <v-row>
        <v-col cols="12">
          {{ getFullName }}
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="first"
            label="First Name"
            filled
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="last"
            label="Last Name"
            filled
          />
        </v-col>
        <v-col>
          <v-btn :to="url" large>
            {{ formTitle }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-content>
  </v-card>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
      default: ''
    },

    url: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      first: '',
      last: ''
    }
  },

  computed: {
    getFullName () {
      return `${this.first} ${this.last}`
    }
  }
}
</script>

<style scoped>
</style>
