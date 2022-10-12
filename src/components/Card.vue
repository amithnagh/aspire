<template>
  <v-container class="card" :class="{ frozen: card.cardFreezed }">
    <v-row
      ><v-col class="card-name">
        <v-img
          class="card-name-width"
          :src="require(`../assets/${card.cardName}`)"
        ></v-img></v-col
    ></v-row>
    <v-row
      ><v-col class="name">{{ fullName }}</v-col></v-row
    >
    <v-row class="card-number"
      ><v-col>{{ card.cardNumber }}</v-col></v-row
    >
    <v-row class="card-expiry">
      <v-col
        >Thru: {{ card.cardExpiryMonth }}/{{ card.cardExpiryYear % 100 }}</v-col
      >
      <v-col>CVV: {{ card.cvv }}</v-col>
    </v-row>
    <v-row>
      <v-col class="card-type"
        ><v-img
          class="card-name-width"
          :src="require('@/assets/visalogo.svg')"
        ></v-img
      ></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    card: {
      cardFreezed: Boolean,
      cardNumber: Number,
      cardName: String,
      firstName: String,
      lastName: String,
      cardExpiryMonth: Number,
      cardExpiryYear: Number,
      cardCVV: Number,
    },
  },
  computed: {
    fullName() {
      return this.card.firstName + " " + this.card.lastName;
    },
  },
};
</script>
<style lang="scss">
.card {
  height: 13.75rem;
  width: 22.375rem;
  background-color: #01d167;
  color: #ffffff;
  font-family: Open Sans, Bold;
  border-radius: 12px;
  .card-name {
    text-align: end;
  }
  .card-name-width {
    width: 74px;
    float: right;
    margin-right: 10px;
  }
  .name {
    font-size: 1.375rem;
    height: 50px;
  }
  .card-number {
    height: 30px;
    letter-spacing: 0.5rem;
    font-size: 0.875rem;
  }
  .card-expiry {
    font-size: 0.8125rem;
    letter-spacing: 2px;
  }
  .card-type {
    text-align: end;
  }
}
.frozen {
  opacity: 50% !important;
}
</style>
