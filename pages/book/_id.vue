<template>
  <div v-if="GET_BOOK">
    <nav class="flex-nav">
      <div class="container">
        <div class="grid menu">
          <div class="column-xs-8 column-md-6">
            <nav>
              <ol class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item"><a>Books</a></li>
                <li class="breadcrumb-item active">{{ GET_BOOK.name }}</li>
              </ol>
            </nav>
          </div>
          <div class="column-xs-4 column-md-6">
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container">
        <div class="grid second-nav">
          <div class="column-xs-12"></div>
        </div>
        <div class="grid product">
          <div class="column-xs-12 column-md-7">
            <div class="product-gallery">
              <v-img :src="GET_BOOK.image"/>
            </div>
          </div>
          <div class="column-xs-12 column-md-5">
            <h1>{{ GET_BOOK.name }}</h1>
            <h3>
              <v-icon>fa-regular fa-pen-nib</v-icon>
              By : {{ GET_BOOK.author }}
            </h3>
            <h3>
              <v-icon>fa-regular fa-typewriter</v-icon>
              Publisher : {{ GET_BOOK.publisher }}
            </h3>
            <h2>
              <v-icon>fa-regular fa-money-bill-wave</v-icon>
              ${{ GET_BOOK.price }}
            </h2>
            <v-rating
              background-color="warning lighten-1"
              color="warning"
              empty-icon="fa-regular fa-star"
              full-icon="fa-solid fa-star"
              length="5"
              readonly
              size="19"
              :value="GET_BOOK.rate"
            ></v-rating>
            <div class="description">
              <p>{{ GET_BOOK.Description }}</p>
            </div>
            <button class="add-to-cart">Add To Cart</button>
          </div>
        </div>
        <div class="related-products">
          <div class="column-xs-12">
            <h2> <v-icon color="black">fa-regular fa-books</v-icon> You may also like</h2>
          </div>
          <v-row>
            <v-col v-if="randomKey && GET_PRODUCT" v-for="item in randomKey" :key="item" sm="12" md="4" xl="4" cols="12">
              <product-card :item="GET_PRODUCT[item]"/>
            </v-col>
          </v-row>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "id",
  data() {
    return {
      randomKey:[]
    }
  },
  methods: {
    ...mapActions('Products', ['GetBook','GetBooks']),
    suggestionItem() {
      for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * 9) + 1;
      let result = this.randomKey.find(item => item === index)
        if (!result){
          this.randomKey.push(index)
        }
      else{
          this.randomKey.push(index - 1)

        }
      }

    }
  },
  computed: {
    ...mapGetters('Products', ['GET_BOOK', 'GET_PRODUCT'])
  },
  mounted() {
    this.GetBook(this.$route.params.id)
    if(!this.GET_PRODUCT){
      this.GetBooks()
    }
    this.suggestionItem()
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pontano+Sans");

.container {
  margin: auto;
  padding: 0 1rem;
  max-width: 71.25rem;
  width: 100%;
}
.related-products{
  margin:60px 0
}
.related-products h2{
  margin:30px 0
}

.grid {
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
}

.grid > [class*=column-] {
  display: block;
}
.column-xs-4 {
  flex-basis: 33.3333333333%;
  max-width: 33.3333333333%;
}

.column-xs-8 {
  flex-basis: 66.6666666667%;
  max-width: 66.6666666667%;
}

.column-xs-12 {
  flex-basis: 100%;
  max-width: 100%;
}


@media (min-width: 62rem) {
  .column-md-5 {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .column-md-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .column-md-7 {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
  }
}


@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
  .grid > [class*=column-] {
    margin: 0;
    max-width: 100%;
  }
  .column-xs-4 {
    grid-column-start: span 4;
    grid-column-end: span 4;
  }


  .column-xs-8 {
    grid-column-start: span 8;
    grid-column-end: span 8;
  }


  .column-xs-12 {
    grid-column-start: span 12;
    grid-column-end: span 12;
  }

  @media (min-width: 62rem) {
    .column-md-5 {
      grid-column-start: span 5;
      grid-column-end: span 5;
    }

    .column-md-6 {
      grid-column-start: span 6;
      grid-column-end: span 6;
    }

    .column-md-7 {
      grid-column-start: span 7;
      grid-column-end: span 7;
    }
  }
}

* {
  box-sizing: border-box;
}

*::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: "Pontano Sans", sans-serif;
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  color: #888;
  background: #fff;
  text-rendering: optimizeLegibility;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul li {
  margin: 0 1.75rem 0 0;
}

a {
  color: #888;
  text-decoration: none;
  transition: all 0.2s ease;
}

a:hover {
  color: #333;
}

a.active {
  color: #333;
}

h1, h2, h3, h4 {
  color: #333;
  font-weight: normal;
}


h2 {
  font-size: 2.125rem;
  margin: 0;
}


h4 {
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
}

section {
  display: block;
}

img {
  max-width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
}

nav {
  display: block;
}

nav li {
  font-size: 1.125rem;
  margin: 0;
}

.flex-nav ul {
  position: absolute;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  display: none;
  width: 100%;
  left: 0;
  padding: 1rem;
  background: #fff;
  text-align: center;
}

.flex-nav ul.active {
  display: flex;
}

.flex-nav ul li {
  margin: 0.5rem 0;
}

.toggle-nav {
  display: flex;
  justify-content: flex-end;
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 1rem 0;
}

.toggle-nav i {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0 0 0 0.5rem;
}

#highlight {
  color: #333;
  font-size: 1.125rem;
  text-transform: uppercase;
}

.price {
  margin: 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 1rem 0 0 0;
  list-style: none;
}

.breadcrumb-list li {
  font-size: 0.85rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
}

.breadcrumb-item.active {
  color: #333;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding: 0 0.5rem;
  color: #d5d5d5;
}

.description {
  border-top: 0.0625rem solid #e3dddd;
  margin: 2rem 0;
  padding: 1rem 0 0 0;
}

.add-to-cart {
  position: relative;
  display: inline-block;
  background: #62ab00;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 1.25rem 2.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transform: translateZ(0);
  transition: color 0.3s ease;
  letter-spacing: 0.0625rem;
}

.add-to-cart:hover::before {
  transform: scaleX(1);
}

.add-to-cart::before {
  position: absolute;
  content: "";
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #565657;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform 0.3s ease-out;
}

.container {
  margin: auto;
  padding: 0 1rem;
  max-width: 75rem;
  width: 100%;
}

.grid > [class*=column-] {
  padding: 1rem;
}

.grid.menu, .grid.product {
  border-bottom: 0.0625rem solid #e3dddd;
}

.grid.menu > [class*=column-] {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

.grid.product {
  padding: 0 0 1.5rem 0;
}

.grid.second-nav > [class*=column-] {
  padding: 0.5rem 1rem;
}

footer {
  padding: 1rem 0;
  text-align: center;
}

.product-image {
  display: none;
}

.image-list li {
  margin: 0;
}

@media (min-width: 62rem) {
  .product-image img, .image-list img {
    width: 100%;
  }

  .product-image {
    display: block;
  }

  .product-image img {
    height: 52vh;
  }

  .product-image img.active {
    display: block;
    margin: 0 0 0.75rem 0;
  }

  .image-list {
    display: flex;
    overflow: hidden;
  }

  .image-list li {
    margin: 0 0.75rem 0 0;
    flex-basis: 100%;
  }

  .image-list li:nth-child(3) {
    margin: 0;
  }

  .image-list img {
    height: 10rem;
    width: 100%;
    transition: opacity 0.3s ease;
    cursor: pointer;
  }

  .image-list img:hover {
    opacity: 0.7;
  }

  nav ul {
    justify-content: flex-end;
  }

  .toggle-nav {
    display: none;
  }

  .flex-nav {
    display: block;
  }

  .flex-nav ul {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: flex-end;
  }

  .flex-nav ul li {
    font-size: 1.125rem;
    margin: 0 1.5rem 0 0;
  }

  .flex-nav ul li:nth-child(4) {
    margin: 0;
  }
}

@-webkit-keyframes fadeImg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeImg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
