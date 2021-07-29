<template>
  <v-app>
    <main-header/>
    <nuxt />
  </v-app>
</template>

<script>
import mainHeader from "~/components/Headers/mainHeader";
export default {

  components:{
    mainHeader
  }
}
</script>
