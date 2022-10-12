<template>
  <v-container class="main-border">
    <v-row class="actions">
      <v-bottom-navigation>
        <slot></slot>
      </v-bottom-navigation>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main-border {
  border-radius: 12px;
  height: 100px;
  left: 0;
  right: 0;
  bottom: 46px;
  position: absolute;
  background-color: #edf3ff;
}
.actions {
  height: 116px;
  margin-top: 5px;
}
.v-item-group.v-bottom-navigation {
  box-shadow: unset;
  background-color: transparent;
}
</style>
