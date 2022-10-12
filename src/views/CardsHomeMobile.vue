<template>
  <v-container class="bg-color">
    <BalanceTile>
      <template v-slot:tile-label>
        <v-col class="label-font pb-0"> Account Balance </v-col>
      </template>
      <template v-slot:tile-currency> <div class="currency">SS</div> </template>
      <template v-slot:tile-value>3000</template>
      <template v-slot:tile-actions>
        <v-row>
          <v-col>
            <span class="action-img pointer" @click="openDialog = true">
              <v-img :src="require('../assets/box.svg')" />
            </span>
            <span class="action-description pointer" @click="openDialog = true"
              >New Card</span
            >
          </v-col>
        </v-row>
      </template>
    </BalanceTile>
    <v-tabs background-color="transparent" color="#ffffff">
      <v-tab>My debit cards</v-tab>
      <v-tab>All company cards</v-tab>
      <v-tabs-slider color="#23cefd"></v-tabs-slider>
    </v-tabs>
    <div class="carousel">
      <v-carousel
        v-model="carouselNumber"
        @change="onCourselChange()"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="265"
      >
        <v-carousel-item v-for="(item, i) in cards" :key="i">
          <Card :card="item"
        /></v-carousel-item>
      </v-carousel>
    </div>
    <CardActions :freeze="selectedCard.cardFreezed || false">
      <v-btn @click="freezeUnfreezeCard()">
        <span>{{ freezeText }}</span>
        <v-img class="w-44" :src="require('@/assets/Freezecard.svg')"></v-img>
      </v-btn>

      <v-btn>
        <span>Add to GPay</span>

        <v-img class="w-44" :src="require('@/assets/GPay.svg')"></v-img>
      </v-btn>
      <v-btn>
        <span>Replace card</span>

        <v-img class="w-44" :src="require('@/assets/Replacecard.svg')"></v-img>
      </v-btn>
      <v-btn @click="cancelCard()">
        <span>Cancel card</span>

        <v-img
          class="w-44"
          :src="require('@/assets/Deactivatecard.svg')"
        ></v-img>
      </v-btn>
    </CardActions>
    <Footer />
    <v-snackbar v-model="snackbar" top>
      Card added successfully

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <AddCard
      :dialog="openDialog"
      @closeModal="openDialog = false"
      @onSave="addCard($event)"
    />
  </v-container>
</template>
<script>
import BalanceTile from "../components/BalanceTile.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import CardActions from "../components/CardActions.vue";
import AddCard from "../components/AddCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "CardsHome",
  components: {
    BalanceTile,
    Card,
    Footer,
    CardActions,
    AddCard,
  },
  data: () => ({
    openDialog: false,
    snackbar: false,
    carouselNumber: 0,
    selectedCard: {},
  }),
  computed: {
    freezeText() {
      if (this.selectedCard.cardFreezed) {
        return "Unfreeze card";
      } else {
        return "Freeze card";
      }
    },
    ...mapState({
      cards: (state) => state.cards,
    }),
  },
  mounted() {
    this.selectedCard = this.cards[0];
  },
  methods: {
    ...mapActions([
      "addCardAction",
      "freezeCardAction",
      "unFreezeCardAction",
      "cancelCardAction",
    ]),
    onCourselChange() {
      this.selectedCard = this.cards[this.carouselNumber];
    },
    addCard(card) {
      this.addCardAction(card);
      this.snackbar = true;
      this.openDialog = false;
    },
    freezeUnfreezeCard() {
      this.selectedCard.cardFreezed
        ? this.unFreezeCardAction(this.selectedCard)
        : this.freezeCardAction(this.selectedCard);
    },
    cancelCard() {
      this.cancelCardAction(this.selectedCard);
    },
  },
};
</script>
<style lang="scss">
.w-44 {
  width: 44px;
}
.bg-color {
  height: 100vh;
  width: 100%;
  background-color: #0c365a;
}
.v-tabs {
  .v-tab--active::before {
    opacity: 0 !important;
  }
  .v-tabs-bar .v-tab:not(.v-tab--active) {
    color: #ffffff !important;
    opacity: 50%;
  }
  .v-tabs-bar .v-tab {
    font-size: 10px !important;
  }
}
.currency {
  height: 1.375rem;
  width: 2.5rem;
  font-size: 0.75rem;
  text-align: center;
  background-color: #01d167;
  float: left;
  line-height: 1.4375rem;
  border-radius: 4px;
  margin-top: 6px;
  margin-right: 5px;
}
.action-img {
  height: 1rem;
  width: 1rem;
  float: left;
  margin-left: calc(100% - 90px);
  margin-top: 0.25rem;
}
.action-description {
  padding-left: 0.25rem;
  line-height: 1.1rem;
  color: #23cefd;
  font-size: 0.8125rem;
}
.pb-0 {
  padding-bottom: 0;
}
.carousel {
  margin-top: 10px;
}
.pointer {
  cursor: pointer;
}
</style>
