import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        cardFreezed: false,
        cardNumber: "4234 5678 9123 4567",
        cardName: "cardlogo.svg",
        firstName: "Mark",
        lastName: "Henry",
        cardExpiryMonth: 1,
        cardExpiryYear: 2022,
        cvv: 556,
      },
      {
        cardFreezed: false,
        cardNumber: "4234 5678 9443 4567",
        cardName: "cardlogo.svg",
        firstName: "David",
        lastName: "Henry",
        cardExpiryMonth: 2,
        cardExpiryYear: 2022,
        cvv: 456,
      },
    ],
  },
  mutations: {
    ADD_CARD_MUTATION(state, card) {
      state.cards.push(card);
    },
    FREEZE_CARD_MUTATION(state, card) {
      state.cards.filter((item) => {
        if (item.cardNumber === card.cardNumber) {
          item.cardFreezed = true;
        }
      });
    },
    UNFREEZE_CARD_MUTATION(state, card) {
      state.cards.filter((item) => {
        if (item.cardNumber === card.cardNumber) {
          item.cardFreezed = false;
        }
      });
    },
    CANCEL_CARD_MUTATION(state, card) {
      state.cards = state.cards.filter(
        (item) => item.cardNumber !== card.cardNumber
      );
    },
  },
  actions: {
    addCardAction({ commit }, card) {
      commit("ADD_CARD_MUTATION", card);
    },
    freezeCardAction({ commit }, card) {
      commit("FREEZE_CARD_MUTATION", card);
    },
    unFreezeCardAction({ commit }, card) {
      commit("UNFREEZE_CARD_MUTATION", card);
    },
    cancelCardAction({ commit }, card) {
      commit("CANCEL_CARD_MUTATION", card);
    },
  },
  modules: {},
});
