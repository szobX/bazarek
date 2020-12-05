export const state = () => ({
  items: [],
  isOpen: false,
})
export const getters = {}
export const mutations = {
  SET_OPEN(state, val) {
    state.isOpen = val
  },
  ADD_PRODUCT(state, product) {
    state.items.push(product)
  },
  REMOVE_PRODUCT(state, product) {
    console.log(product, state)
    state.items = state.items.filter((item) => item.id !== product.id)
  },
}
export const actions = {}
