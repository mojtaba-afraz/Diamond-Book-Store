<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="400"
    >
      <template v-if="GET_LOGIN === false" v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          rounded
          v-bind="attrs"
          v-on="on"
          color="#62ab00"
        >
          <v-icon left>
            fa-solid fa-right-to-bracket
          </v-icon>
          LogIn
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="background-color:#62ab00;color:#fff">
          <h4 class="text-center">LogIn</h4>
        </v-card-title>
        <v-card-text>
          <v-row style="margin: 20px 0px">
            <v-col cols="12">
              <v-text-field
                label="UserName"
                placeholder="Enter Your UserName"
                outlined
                v-model="user"
              ></v-text-field>
              <v-text-field
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                outlined
                v-model="pass"
              ></v-text-field>
              <h4 class="text-center forgot">I forgot my password !</h4>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            @click="SubmitLogin()"
            elevation="2"
            rounded
            color="#62ab00"
            block
            dark
          >
            LogIn
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  name: "LoginModal",
  data () {
    return {
      dialog: false,
      user:null,
      pass:null,
    }
  },
  computed:{
    ...mapGetters('Profile',['GET_USER','GET_LOGIN'])
  },
  methods:{
    ...mapMutations('Profile',['SET_USER_LOGIN']),
    SubmitLogin(){
      if (this.user == this.GET_USER.userName && this.pass == this.GET_USER.Password){
        this.SET_USER_LOGIN(true)
        this.$toast.show("You have logged in successfully", {
          type: "outline",
          position: "bottom-right",
          duration : 2000
        });
        this.dialog = false
        this.$cookies.set('accessToken','Bearer')

      }
      else{
        this.$toast.show("Wrong username or password", {
          type: "error",
          position: "bottom-right",
          duration : 2000
        });
      }
    }
  }
}
</script>

<style scoped>
.forgot{
  cursor:pointer;
  margin:0 auto;
  transition:.2s;
}
.forgot:hover{
  color: #62ab00;
}

</style>
