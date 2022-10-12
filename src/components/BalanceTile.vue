<template>
  <v-container>
    <v-row>
      <slot name="tile-label"></slot>
    </v-row>
    <v-row>
      <v-col class="amount-font">
        <slot name="tile-currency"></slot>
        <slot name="tile-value"></slot>
      </v-col>
      <v-col>
        <slot name="tile-actions"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "BalanceTile",
};
</script>
<style lang="scss">
.label-font {
  color: #ffffff;
  font-family: Open Sans;
  font-weight: bold;
  font-size: 0.875rem;
}
.amount-font {
  color: #ffffff;
  font-size: 1.5rem;
  font-family: Open Sans;
  font-weight: bold;
}
</style>
