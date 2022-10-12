# aspire-challenge

This project displays a list of cards along with few actions that can be performed for each card(Add card, Freeze, Unfreeze and cancel).

It uses node v14, vue2, vuex and vuetify.

Currently project is available only on the mobile resolutions.

Interactions:
Add Card: Adds a new card to the list of available cards with auto generated card number which starts with 4 and contains 16 digits in total, auto generated card expiry month and year, auto generated cvv. On click of New card it brings up a modal asking first name and last name of the user. Both the fields are required and for ease restricted the total length to less than or equal 10 characters.

Freeze Card: You can navigate to a card via carousel and click on Freeze card to freeze a card. Freezing a card adds the opacity to the selected card.

Unfreeze Card: You can navigate to a card via carousel and click on Unfreeze card to unfreeze a card. Unfreezing a card removes the opactity to the selected card.

Cancel Card: You can navigate to a card via carousel and click on Cancel card to cancel a card. A confirmation dialog will be opened and you need to click on Agree to cancel the card. Cancelling a card removes it from the list of cards.

State Management: I have used VUEX state management to manage the cards. For more information visit https://vuex.vuejs.org/

CSS Framework: I have used Vuetify to ease the stylings. For more information visit https://vuetifyjs.com/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
