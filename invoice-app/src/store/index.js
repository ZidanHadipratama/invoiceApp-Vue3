import { createStore } from 'vuex';
import { db } from "../firebase/firebaseInit";

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
