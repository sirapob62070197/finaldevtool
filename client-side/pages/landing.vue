<template>

<div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374">
        <v-img
      height="80"
      src="https://www.ais.th/vaccinesforthais/images/vaccines-logo.png"
    ></v-img>
    เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด
Connecting All Thais in the Fight Agianst COVID
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="600"
      src="https://www.ais.th/vaccinesforthais/images/vaccine28-04-2022.png"
    ></v-img>
  </v-card>
  <v-container
    class="d-flex flex-column align-center"
  >
      <div class="align-self-center mb-5">
        <v-btn
          href="/auth/signUp"
          min-width="400"
          class="pa-8 light-green darken-4 white--text text-h5"
          elevation="7"
          rounded>
          ลงทะเบียนจองคิว
        </v-btn>
      </div>
      <v-col>
      </v-col>
  </v-container>
  </div>
</template>
