<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon size="18" v-bind="attrs" v-on="on" class="text-center" color="warning">
        fa-regular fa-pen-to-square
      </v-icon>
    </template>
    <v-card>
      <v-card-title style="background-color:#fb8c00;color:#fff">
        <h4 class="text-center">Editing {{ item.name }} Book</h4>
      </v-card-title>
      <v-card-text>
        <v-row style="margin: 20px 0">
          <v-col cols="4">
            <v-text-field
              label="name"
              placeholder="Enter Book Name"
              outlined
              v-model="Book.name"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Author"
              placeholder="Enter Book Author"
              outlined
              v-model="Book.author"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Publisher"
              placeholder="Enter Book Publisher"
              outlined
              v-model="Book.publisher"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Price"
              placeholder="Enter Book Price"
              outlined
              v-model="Book.price"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Year"
              placeholder="Enter Book Year"
              outlined
              v-model="Book.year"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              :items="rate"
              label="Book Rate"
              outlined
              v-model="Book.rate"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Image URL"
              placeholder="Enter Book Image URL"
              outlined
              v-model="Book.image"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              outlined
              rows="3"
              label="Description"
              placeholder="Enter Book Description"
              v-model="Book.Description"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          @click="edit()"
          elevation="2"
          :loading="loading"
          rounded
          color="#fb8c00"
          block
          dark
        >
          Change !
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "editProduct",
  data () {
    return {
      dialog: false,
      loading : false,
      rate:[1,2,3,4,5],
      Book:{
        "name": null,
        "image": null,
        "Description": null,
        "author": null,
        "price": null,
        "rate": null,
        "year":null,
        "publisher":null,
        "id":null,
      }
    }
  },
  methods:{
    ...mapActions('Products',['editBook']),
    async edit(){
      this.loading = true
      let result = await this.editBook(this.Book)
      if (result){
        this.loading = false
        this.dialog = false
      }
    }
  },
  props:{
    item:{default:''}
  },
  mounted(){
    this.Book.name = this.item.name
    this.Book.image = this.item.image
    this.Book.Description = this.item.Description
    this.Book.author = this.item.author
    this.Book.price = this.item.price
    this.Book.rate = this.item.rate
    this.Book.year = this.item.year
    this.Book.publisher = this.item.publisher
    this.Book.id = this.item.id
  }
}
</script>
