<template>
  <card class="card-stats">
    <div v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.content">
      <div class="numbers">
        <slot name="content"></slot>
      </div>
    </div>
    <div slot="footer" class="stats" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </card>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "stats-card",
  components: {
    Card
  }
};
</script>
<style></style>
