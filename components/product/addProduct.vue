<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="add-book"
        color="success"
        fab
        v-bind="attrs"
        v-on="on"
        x-large
        dark
      >
        <v-icon>fa-solid fa-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title style="background-color:#62ab00;color:#fff">
        <h4 class="text-center">Add New Book</h4>
      </v-card-title>
      <v-card-text>
        <v-row style="margin: 20px 0px">
          <v-col cols="12">
            <v-row>
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
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          @click="addBook()"
          elevation="2"
          :loading="loading"
          rounded
          color="#62ab00"
          block
          dark
        >
          Add !
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "addProduct",
  data() {
    return {
      dialog: false,
      loading: false,
      rate: [1, 2, 3, 4, 5],
      Book: {
        "name": null,
        "image": null,
        "Description": null,
        "author": null,
        "price": null,
        "rate": null,
        "year": null,
        "publisher": null
      }
    }
  },
  methods: {
    ...mapActions('Products', ['AddBook']),
    async addBook() {
      if (this.Book.name) {
        if (this.Book.image) {
          if (this.Book.Description) {
            if (this.Book.author) {
              if (this.Book.price) {
                if (this.Book.rate) {
                  if (this.Book.year) {
                    if (this.Book.publisher) {
                      this.loading = true
                      let result = await this.AddBook(this.Book)
                      if (result) {
                        this.dialog = false
                        this.loading = false
                      }
                    }
                    else {
                      this.$toast.show("Please Enter Publisher", {
                        type: "error",
                        position: "bottom-right",
                        duration : 2000
                      });
                    }
                  }
                  else {
                    this.$toast.show("Please Enter Year", {
                      type: "error",
                      position: "bottom-right",
                      duration : 2000
                    });
                  }
                }
                else {
                  this.$toast.show("Please Enter Rate", {
                    type: "error",
                    position: "bottom-right",
                    duration : 2000
                  });
                }
              }
              else {
                this.$toast.show("Please Enter price", {
                  type: "error",
                  position: "bottom-right",
                  duration : 2000
                });
              }
            }
            else {
              this.$toast.show("Please Enter Author", {
                type: "error",
                position: "bottom-right",
                duration : 2000
              });
            }
          }
          else {
            this.$toast.show("Please Enter Description", {
              type: "error",
              position: "bottom-right",
              duration : 2000
            });
          }
        }
        else {
          this.$toast.show("Please Enter Image", {
            type: "error",
            position: "bottom-right",
            duration : 2000
          });
        }
      }
      else {
        this.$toast.show("Please Enter Name", {
          type: "error",
          position: "bottom-right",
          duration : 2000
        });
      }
    }
  }

}
</script>

<style scoped>
.add-book {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

</style>
