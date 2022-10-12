<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to Cancel this card?
        </v-card-title>
        <v-card-text
          >Cancelling a card removes the card from the list of
          cards</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="emitDisagree()">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="emitAgree()">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    dialog: Boolean,
  },
  methods: {
    emitDisagree() {
      this.$emit("disagree");
    },
    emitAgree() {
      this.$emit("agree");
    },
  },
};
</script>
