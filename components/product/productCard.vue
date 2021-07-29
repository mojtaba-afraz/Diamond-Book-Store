<template>
  <div class="wrapper">
    <v-card elevation="3" class="rounded-lg card">
      <v-row>
        <v-col class="img-container" cols="12">
        <img class="img" :src="item.image">
        </v-col>
        <v-col cols="12">
          <h3 class="text-center">{{item.name}}</h3>
          <h5 class="text-center author">{{item.author}}</h5>
        </v-col>
        <v-col cols="12">
          <h3 class="text-center price">$ {{item.price}}</h3>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "productCard",
  props:{
    item:{default:''}
  }
}
</script>

<style scoped>
.price{
  color: #454545;
}
.wrapper{
  padding:15px 0
}
.card{
  width:100%;
  position:relative;
  padding:20px;
  height:300px;
  transition: .2s;
  cursor:pointer;
}
.img{
  width:140px;
  position:absolute;
  top: -20px;
  right: 4.2vw;
  transition: .1s;
}
.card:hover{
  box-shadow:0px 0px 0px 4px #62ab00 !important

}
.card:hover  .img {
  box-shadow: 0px 10px 13px -7px #454545;
  top: -30px;
}
.img-container{
  height:180px
}
.author{
  color: gray;
}
</style>
