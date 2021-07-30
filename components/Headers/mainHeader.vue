<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <img width="30%" src="@/assets/image/logo.png"/>
      </v-col>
      <v-col cols="4">
        <ul>
          <li>Categories</li>
          <li>Authors</li>
          <li>About Us</li>
        </ul>
      </v-col>
      <v-col class="text-right login-container" cols="4">
        <login-modal v-if="!GET_LOGIN"/>
          <v-btn
            v-if="GET_LOGIN"
            dark
            rounded
            color="#62ab00"
          >
            <v-icon left>
              fa-solid fa-user
            </v-icon>
            Hi Admin
          </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginModal from "~/components/Modals/LoginModal";
import {mapGetters} from "vuex";
export default {
name: "mainHeader",
  components:{
    LoginModal
  },
  computed:{
    ...mapGetters('Profile',['GET_LOGIN'])
  }
}
</script>

<style scoped>
ul{
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
}
li{
  list-style-type: none;
  transition:.1s;
  cursor:pointer;
}
li:hover{
  color: #62ab00;
  border-bottom: 1px solid #62ab00;
}
.login-container{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}


</style>
