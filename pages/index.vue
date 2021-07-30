<template>
  <v-row>
    <v-col cols="12">
      <main-slider class="d-none d-md-flex"/>
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col v-for="(item,i) in items" :key="i" md="3" cols="12">
            <card-item :text="item.text" :des="item.des" :icon="item.icon"/>
          </v-col>
          <v-col md="6" cols="12">
            <img alt="book" width="100%" src="@/assets/image/shop-book.jpg">
          </v-col>
          <v-col md="6" cols="12">
            <img alt="book" width="100%" src="@/assets/image/offer.jpg">
          </v-col>
          <v-row>
            <v-col  class="SubHeader" cols="12">
              <v-row>
                <v-col cols="8">
                  <h2>Books</h2>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    color="#62ab00"
                    outlined
                    label="Search"
                    prepend-inner-icon="fa-regular fa-magnifying-glass"
                    v-model="SearchValue"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-row justify="center">
              <v-col v-for="(item,i) in Search" :key="i" sm="6" md="4" xl="3" cols="12">
                <product-card :item="item" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12">
          <v-img  src="https://ricest.ac.ir/wp-content/uploads/2018/02/Book-Banner.jpg"/>
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
import {mapActions, mapGetters, mapMutations} from 'vuex'
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
    ],
    SearchValue:null,
    }
  },
  methods:{
    ...mapActions('Products',['GetBooks']),
    ...mapMutations('Profile',['SET_USER_LOGIN'])
  },
  computed:{
    ...mapGetters('Products',['GET_PRODUCT']),
    ...mapGetters('Profile',['GET_LOGIN']),
    Search: {
      get: function () {
        console.log('this.SearchValue',this.SearchValue)
        if (this.SearchValue){
          return this.GET_PRODUCT.filter(item => (item.name) ? item.name.toLowerCase().includes(this.SearchValue.toLowerCase()) : '')
        }
        if (!this.SearchValue){
          return this.GET_PRODUCT
        }
      },
    }
  },
  mounted(){
    this.GetBooks()
    if(this.$cookies.get('accessToken')){
      this.SET_USER_LOGIN(true)
    }
  }
}
</script>

<style scoped>
.SubHeader{
  color: #515151;
  margin: 20px 0;
}
</style>
