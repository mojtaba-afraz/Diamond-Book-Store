const BaseURL = ''
export const state = () => ({
  user:{
    userName:'Diamond_User',
    Password:'Diamond_User'
  }
})

export const getters = {
  GET_USER(state){
    return state.user
  }
}

export const mutations = {
  SET_PRODUCTS(state,data){
    state.products = data
  },
}

export const actions = {
  async GetBooks({commit, state }) {
    const books = await this.$axios.get(`${BaseURL}`)
    commit("SET_PRODUCTS", books.data);
  },

}
