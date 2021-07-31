const BaseURL = ''
export const state = () => ({
  LogIn:false,
  user:{
    userName:'Diamond_User',
    Password:'Diamond_User'
  }
})

export const getters = {
  GET_USER(state){
    return state.user
  },
  GET_LOGIN(state){
    return state.LogIn
  }
}

export const mutations = {
  SET_PRODUCTS(state,data){
    state.products = data
  },
  SET_USER_LOGIN(state,data){
    state.LogIn = data
  },
}

export const actions = {

}
