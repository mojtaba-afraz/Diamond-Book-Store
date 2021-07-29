<template>
  <v-row>
    <v-col cols="2">
      <navigation-drawer/>
    </v-col>
    <v-col cols="10">
      <v-container>
        <v-row justify="center">
          <v-col v-for="(item,i) in GET_PRODUCT" :key="i" sm="6" md="3" xl="3" cols="12">
            <product-card :item="item" />
          </v-col>
        </v-row>
      </v-container>
      <add-product/>
    </v-col>

  </v-row>
</template>

<script>
import NavigationDrawer from "~/components/Drawer/NavigationDrawer";
import addProduct from "~/components/product/addProduct";
import {mapGetters} from "vuex";
export default {
name: "profile",
  layout:'none',
  components:{
    NavigationDrawer,
    addProduct
  },
  computed:{
    ...mapGetters('Products',['GET_PRODUCT'])
  },
}
</script>

<style scoped>

</style>
