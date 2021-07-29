<template>
<v-row class="item" justify="center">
  <v-col cols="4">
    <i style="color:#62ab00;font-size: 1.9rem" :class="icon"></i>
  </v-col>
  <v-col cols="8">
    <h4>{{ text }}</h4>
    <h5 style="color:gray" >{{ des }}</h5>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: "CardItem",
  props:{
    text:{default:''},
    icon:{default:''},
    des:{default:''},
  }
}
</script>

<style scoped>
.item{
  margin: 0 10px;
  border:1px solid #eee
}
h4{
  margin:0 auto;
}

</style>
