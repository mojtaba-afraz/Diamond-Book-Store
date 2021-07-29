<template>
  <v-app>
    <main-header/>
    <nuxt />
    <main-footer/>
  </v-app>
</template>

<script>
import mainHeader from "~/components/Headers/mainHeader";
import mainFooter from "~/components/Footer/mainFooter";
export default {

  components:{
    mainHeader,
    mainFooter
  }
}
</script>
