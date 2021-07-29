<template>
<v-row class="header" justify="center">
      <v-col cols="4">
        <img width="30%" alt="logo" src="@/assets/image/logo.png"/>
      </v-col>
      <v-col cols="8">
        <ul class="list">
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </v-col>
</v-row>
</template>

<script>
export default {
name: "mainHeader"
}
</script>

<style scoped>
.Header{
  width: 100%;
  height: 10px;
  box-shadow: 0px 22px 28px -12px rgba(0,0,0,0.58);
}
.list li{
  display:inline;
}

</style>
