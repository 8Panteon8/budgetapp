<template>
  <div class="total-value">
    <template v-if="total > 0">
      <div class="positive-balance">Balance : {{ total }}</div>
    </template>
    <template v-else-if="total === 0">
      <div class="zero-balance">Balance : {{ total }}</div>
    </template>
    <template v-else>
      <div class="negative-balance">Balance : {{ total }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      dafaul: 0,
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.positive-balance{
  color: rgb(4, 215, 4);
}
.zero-balance{
  color: black;
}
.negative-balance{
  color: red;
}

</style>
