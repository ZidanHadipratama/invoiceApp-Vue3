import { createStore } from 'vuex';

export default createStore({
  state: {
    invoiceModal: null,
    modalActive: null,
    invoiceData: []
  },
  getters: {
  },
  mutations: {
    TOGGLE_INVOICE(state){
      state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_MODAL(state){
      state.modalActive = !state.modalActive
    }
  },
  actions: {
  },
  modules: {
  }
})
