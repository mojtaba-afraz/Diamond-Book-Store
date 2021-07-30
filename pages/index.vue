<template>
  <v-row>
    <v-col cols="12">
      <main-slider/>
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col v-for="(item,i) in items" :key="i" cols="3">
            <card-item :text="item.text" :des="item.des" :icon="item.icon"/>
          </v-col>
          <v-col cols="6">
            <img alt="book" width="100%" src="@/assets/image/shop-book.jpg">
          </v-col>
          <v-col cols="6">
            <img alt="book" width="100%" src="@/assets/image/offer.jpg">
          </v-col>
          <v-col cols="12">
            <v-row justify="center">
              <v-col v-for="(item,i) in GET_PRODUCT" :key="i" sm="6" md="4" xl="3" cols="12">
                <product-card :item="item" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12">
          <v-img src="https://cdn.shopify.com/s/files/1/0070/8991/3908/files/img-bottom-smartbooks1.jpg?v=1552313256"/>
        </v-col>
      </v-row>
    </v-col>
    <add-product v-if="GET_LOGIN" />
  </v-row>
</template>

<script>
import mainSlider from "~/components/Slider/mainSlider";
import CardItem from "~/components/Items/CardItem";
import productCard from "~/components/product/productCard";
import addProduct from "~/components/product/addProduct";
import {mapActions,mapGetters} from 'vuex'
export default {
  components:{
    mainSlider,
    CardItem,
    productCard,
    addProduct
  },
  data () {
    return {
    items:[
      {
        text:"Free Shipping Item",
        icon:'fa-solid fa-truck',
        des:'Orders over $500'
      },
      {
        text:"Guarantee",
        icon:'fa-solid fa-arrow-rotate-left',
        des:'100% money back'
      },
      {
        text:"Cash On Delivery",
        icon:'fa-solid fa-money-bill-wave',
        des:'Lorem ipsum dolor'
      },
      {
        text:"Help & Support",
        icon:'fa-solid fa-life-ring',
        des:'Call us : + 0123.4567.89'
      }
    ]
    }
  },
  methods:{
    ...mapActions('Products',['GetBooks']),
  },
  computed:{
    ...mapGetters('Products',['GET_PRODUCT']),
    ...mapGetters('Profile',['GET_LOGIN'])
  },
  mounted(){
    this.GetBooks()
  }
}
</script>
