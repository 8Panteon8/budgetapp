<template>
  <div id="app">
    <FormApp />
    <Totalbalance :total="Totalbalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "./components/BudgetList.vue";
import Totalbalance from "./components/Totalbalance.vue";
import FormApp from "./components/FormApp.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    Totalbalance,
    FormApp,
  },
  data: () => ({
    list: {},
  }),
  computed: {
    ...mapGetters("value", ["valueList"]),
    Totalbalance() {
      return Object.values(this.valueList).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.valueList, id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
