import Vue from 'vue'

const BaseURL = 'https://6102a09f79ed680017482214.mockapi.io/api/v1/Books'
export const state = () => ({
  products:null,
  currentProduct:null
})

export const getters = {
  GET_PRODUCT(state){
    return state.products
  },
  GET_BOOK(state){
    return state.currentProduct
  }
}

export const mutations = {
  SET_PRODUCTS(state,data){
    state.products = data
  },
  SET_PRODUCT(state,data){
    state.currentProduct = data
  },
  SET_NEW_BOOK(state,data){
    state.products.push(data)
  },
  REMOVE_BOOK(state,data){
    state.products = state.products.filter(item => item.id !== data)
  },
  EDIT_BOOK(state,data){
    let index = state.products.findIndex(item => item.id === data.id)
    state.products[index].name = data.name
    state.products[index].Description = data.Description
    state.products[index].author = data.author
    state.products[index].image = data.image
    state.products[index].price = data.price
    state.products[index].publisher = data.publisher
    state.products[index].rate = data.rate
    state.products[index].year = data.year
  },
}

export const actions = {
  async GetBooks({commit, state }) {
    const books = await this.$axios.get(`${BaseURL}`)
    commit("SET_PRODUCTS", books.data);
  },
  async GetBook({commit, state },id) {
    const books = await this.$axios.get(`${BaseURL}/${id}`)
    commit("SET_PRODUCT", books.data);
  },
  async AddBook({commit, state },data) {
    const books = await this.$axios.post(`${BaseURL}`,data)
    if (books){
      commit("SET_NEW_BOOK", books.data);
      this.$toast.show("Book added successfully", {
        type: "success",
        position: "bottom-right",
        duration : 2000
      });
      return true
    }
  },
  async removeBooks({commit, state },data) {
    const books = await this.$axios.delete(`${BaseURL}/${data}`)
    if (books){
      commit("REMOVE_BOOK", data);
      this.$toast.show("The book was successfully deleted", {
        type: "success",
        position: "bottom-right",
        duration : 2000
      });
      return true
    }
  },
  async editBook({commit, state },data) {
    const book = await this.$axios.put(`${BaseURL}/${data.id}`,data)
    if (book){
      commit("EDIT_BOOK", data);
      this.$toast.show("The book was successfully Edited", {
        type: "success",
        position: "bottom-right",
        duration : 2000
      });
      return true
    }
  },

}
