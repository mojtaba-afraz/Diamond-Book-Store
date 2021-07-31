<template>
  <div>
  <div @click="GoToProduct()" class="wrapper d-none d-sm-flex">
    <div class="book-card">
      <div class="content-wrapper">
        <v-img :src="item.image" alt="" class="book-card-img"/>
        <div class="card-content">
          <div class="book-name">{{item.name}}</div>
          <div class="book-by"> By :{{item.author}}</div>
          <div class="rate">
            <fieldset class="rating book-rate">
              <v-rating
                background-color="warning lighten-1"
                color="warning"
                empty-icon="fa-regular fa-star"
                full-icon="fa-solid fa-star"
                length="5"
                readonly
                size="12"
                :value="item.rate"
              ></v-rating>
            </fieldset>
          </div>
          <div class="book-sum card-sum">{{item.Description}}</div>
        </div>
      </div>
      <v-row justify="center" v-if="GET_LOGIN" class="likes">
          <v-col class="text-center" cols="1">
            <remove-product :item="item" />
          </v-col>
          <v-col cols="1">
            <edit-product :item="item"/>
          </v-col>
      </v-row>
    </div>
  </div>
    <v-card
      @click="GoToProduct()"
      class="d-flex d-sm-none"
      color="white"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="text-h5"
            v-text="item.name"
          ></v-card-title>
          <v-card-subtitle v-text="item.author"></v-card-subtitle>
          <fieldset class="rating book-rate">
            <v-rating
              background-color="warning lighten-1"
              color="warning"
              empty-icon="fa-regular fa-star"
              full-icon="fa-solid fa-star"
              length="5"
              readonly
              size="12"
              :value="item.rate"
            ></v-rating>
          </fieldset>
          <v-card-actions>
            <div class="book-sum card-sum">{{item.Description}}</div>

          </v-card-actions>
        </div>

        <v-avatar
          class="ma-3"
          size="125"
          tile
        >
          <v-img :src="item.image"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>

<script>
import removeProduct from "@/components/product/removeProduct";
import editProduct from "@/components/product/editProduct";
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "productCard",
  components:{
    removeProduct,
    editProduct
  },
  props:{
    item:{default:''}
  },
  methods:{
    ...mapMutations('Products',['SET_PRODUCT']),
    GoToProduct(){
      this.SET_PRODUCT(null)
      this.$router.push(`/book/${this.item.id}`)
    }
  },
  computed:{
    ...mapGetters('Profile',['GET_LOGIN'])
  }
}
</script>

<style scoped>
.wrapper {
  transition: .1s;
}
.book-card:hover{
  outline: 3px solid #62ab00;
}
.book-card:hover .book-card-img{
  transform: scale(1.04);
}
.rating {
  border: none;
}
.rating > input {
  display: none;
}
.rating > label {
  color: #fff;
  float: right;
}

.book-sum {
  margin-top: 20px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.book-card {
  transition:.1s;
  margin-top: 20px;
  background-color: #fff;
  height: 270px;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0 0 20px 20px;
  color: var(--body-color-light);
}

.book-card-img {
  width: 160px;
  margin-top: -35px;
  border-radius: 2px;
  box-shadow: 0px 1px 7px 2px #c7c9d3;
  border-bottom: 1px solid #dcddde;
  object-fit: cover;
  margin-bottom: 20px;
  transition: 0.3s ease;
}
.book-card-img:hover {
  transform: scale(1.04);
}

.card-content {
  color: var(--body-color);
  padding: 30px;
  overflow: hidden;
  position: relative;
}

.book-name {
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.book-by {
  font-size: 13px;
  color: var(--body-color-light);
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.book-rate > label {
  color: #cccccc;
}

.rate {
  display: inline-block;
  white-space: nowrap;
}


.card-sum {
  font-size: 13px;
  line-height: 1.6em;
  -webkit-line-clamp: 4;
  margin-top: 15px;
}

.content-wrapper {
  display: flex;
  border-bottom: 1px solid #ebedef;
  position: relative;
}
.content-wrapper:before {
  content: "";
  position: absolute;
  background-color: #8f98a9;
  box-shadow: 0 -6px 0 0 #aaaebc, 0 6px 0 0 #aaaebc;
  width: 4px;
  height: 4px;
  border: 0;
  padding: 0;
  right: 12px;
  top: 17px;
  border-radius: 50%;
  margin-left: auto;
}

.like-name span {
  font-weight: 600;
}
</style>
