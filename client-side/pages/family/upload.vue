<template>
    <div>
        <v-app-bar color="#F90716" dense dark>
            <v-app-bar-nav-icon />
            <v-spacer />
            <v-btn icon>
                <v-icon color="info"> mdi-account-circle </v-icon>
            </v-btn>
            <v-menu left bottom>
                <template #activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="warning"> mdi-email </v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Notifications {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-card class="backgroud">
            <div class="text-center fontpay" justify="center">เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด
Connecting All Thais in the Fight Agianst COVID</div>
            <v-row class="row">
                    <div class="upload text-center">
                        <div class="my-1">
                            <img src="../../static/upload.jpg" alt="">
                        </div>
                    </div>
            </v-row>
                <v-btn class="button" color="primary" :to="url" large href="./paybill">
                    ลงทะเบียนจองคิว
                </v-btn>
        </v-card>
    </div>
</template>
<style scoped>
.backgroud {
  background-color: white;
  padding: 50px;
}
.pay{
    background-color: rgb(88, 86, 86);
    width: 20%;
    border-radius: 10px;
}
.button{
    margin: 5px;
}
.btn-right{
    margin-left: 76%;
}
.line{
    background-color: black;
    width: 20px;
    height: 500px;
}
#c2{
    top: 300px;
}
.triangle{
    width: 60px;
    height: 60px;
    position: relative;
    background-color: rgb(0, 0, 0);
    top: 240px;
    clip-path: polygon(0 0, 0 100%, 100% 50%);
    margin-left: 20px
}
.right{
    min-height: 500px;
    margin-top: 100px;
}
.fontpay {
  font-weight: bold;
  font-size: 50px;
}
a{
    text-decoration: none;
    color: white !important;
}
</style>
<script>
export default {
  methods: {
    Upload (file) {
      return file
    }
  }
}
</script>
