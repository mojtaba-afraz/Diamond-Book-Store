<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <img @click="()=> this.$router.push('/')" class="cursor-pointer" width="30%" src="@/assets/image/logo.png"/>
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
        <v-menu
          v-if="GET_LOGIN"
          rounded="lg"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              dark
              rounded
              color="#62ab00"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>
                fa-solid fa-user
              </v-icon>
              Hi Admin
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in menu"
              :key="item.text"
              link
              @click="handleMenuFunctions(item.id)"
            >
              <v-list-item-title  v-html="item.text">
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginModal from "~/components/Modals/LoginModal";
import {mapGetters, mapMutations} from "vuex";
export default {
name: "mainHeader",
  data(){
      return{
        menu:[
          {
            id:1,
            text:'<i class="fa-regular fa-right-from-bracket"></i> LogOut'
          }
        ]
      }
  },
  methods:{
  ...mapMutations('Profile',['SET_USER_LOGIN']),
    handleMenuFunctions(data){
      if (data == 1){
        this.$cookies.remove('accessToken')
        this.SET_USER_LOGIN(false)
        this.$toast.show("You have successfully logged out", {
          type: "success",
          position: "bottom-right",
          duration : 2000
        });
      }
    }
  },
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
.cursor-pointer{
  cursor: pointer;
}


</style>
