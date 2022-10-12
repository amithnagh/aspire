<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card flat tile width="100%" class="text-center bg-color" height="56px">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      "mdi-home",
      "mdi-checkbook",
      "mdi-swap-horizontal",
      "mdi-arrow-up-bold-box-outline",
      "mdi-account",
    ],
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "fixed",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-card__text {
  padding-top: 8px;
}
.bg-color {
  background-color: #ffffff;
}
</style>
