<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Card</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="First name*"
                    required
                    v-model="firstName"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Last name*"
                    required
                    v-model="lastName"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>
              </v-form>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="emitClose()"> Close </v-btn>
          <v-btn color="blue darken-1" :disabled="!valid" text @click="save()">
            Save
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
  data: () => ({
    valid: true,
    firstName: "",
    lastName: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
  methods: {
    emitClose() {
      this.$emit("closeModal", false);
    },
    save() {
      this.$refs.form.validate() && this.submitForm();
    },
    cardNumberGenerator(number) {
      let generatedNumber =
        number.toString().substring(0, 4) +
        " " +
        number.toString().substring(4, 8) +
        " " +
        number.toString().substring(8, 12) +
        " " +
        number.toString().substring(12);
      return generatedNumber;
    },
    randomDateGenerator(start, end) {
      let date = new Date(+start + Math.random() * (end - start));
      return date;
    },
    submitForm() {
      const randomDate = this.randomDateGenerator(
        new Date(),
        new Date(2030, 0, 1)
      );
      const dataObj = {
        cardName: "cardlogo.svg",
        cardFreezed: false,
        firstName: this.firstName,
        lastName: this.lastName,
        cardNumber: this.cardNumberGenerator(
          "4" + Math.floor(Math.random() * 1e15)
        ),
        cardExpiryMonth: randomDate.getMonth(),
        cardExpiryYear: randomDate.getFullYear(),
        cvv: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      };
      this.$emit("onSave", dataObj);
    },
  },
};
</script>
