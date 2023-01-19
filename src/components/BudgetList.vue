<template>
  <div>
    <div class="button-action">
      <ElButton
        type="danger"
        icon="el-icon-bottom"
        @click="showOutComeValue"
      ></ElButton>
      <ElButton
        type="success"
        icon="el-icon-top"
        @click="showInComeValue"
      ></ElButton>
      <ElButton
        type="primary"
        icon="el-icon-toilet-paper"
        @click="showAllComeValue"
      ></ElButton>
    </div>
    <div class="budget-list-wrap">
      <ElCard :header="header">
        <template v-if="!isEmpty">
          <div v-for="(item, prop) in valueList" :key="prop">
            <template v-if="item.value > 0">
              <div class="list-item" v-show="inComeVisible">
                <i class="el-icon-top"></i>
                <span class="budget-comment">{{ item.comment }}</span>
                <span class="budget-value-in">{{ item.value }}</span>
                <ElButton type="danger" size="mini" @click="deleteItem(item.id)"
                  >Delete</ElButton
                >
              </div>
            </template>
            <template v-else>
              <div class="list-item" v-show="outComeVisible">
                <i class="el-icon-bottom"></i>
                <span class="budget-comment">{{ item.comment }}</span>
                <span class="budget-value-out">{{ item.value }}</span>
                <ElButton type="danger" size="mini" @click="deleteItem(item.id)"
                  >Delete</ElButton
                >
              </div>
            </template>
          </div>
        </template>
        <ElAlert v-else type="info" :title="emtyTitle" :closable="false" />
      </ElCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: "BudgetList",
  data: () => ({
    header: "Budget list",
    emtyTitle: "Empty List",
    outComeVisible: true,
    inComeVisible: true,
  }),
  computed: {
    ...mapGetters("value", ["valueList"]),
    isEmpty() {
      return !Object.keys(this.valueList).length;
    },
  },
  methods: {
    showOutComeValue(){
      if(this.inComeVisible == true ){
        this.inComeVisible = false;
        this.outComeVisible = true;
      }
    },
    showInComeValue(){
      if(this.outComeVisible == true){
        this.outComeVisible = false;
        this.inComeVisible = true;
      }
    },
    showAllComeValue(){
      this.outComeVisible = true;
      this.inComeVisible = true
    },
    deleteItem(id) {
      const isConfirmDelete = confirm(
        `Do you confirm the removal of the object?`
      );
      if (!isConfirmDelete) return;

      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.budget-value-in {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
  color: rgb(4, 215, 4);
}
.budget-value-out {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
  color: red;
}
.el-icon-bottom {
  color: red;
}
.el-icon-top {
  color: rgb(4, 215, 4);
}
</style>
