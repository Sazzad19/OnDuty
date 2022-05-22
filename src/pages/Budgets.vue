<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div>
          <h6>Monthly Budget</h6>
        </div>
        <div>
          <button type="button" class="btn btn-success" @click="addBudgetPage">
            Add Budget
          </button>
        </div>
      </div>
      <div class="row budget-list">
        <div class="col-xl-12 col-md-12">
          <div class="row">
            <div
              class="col-xl-12 col-md-12"
              v-for="budget in budgets"
              :key="budget.id"
            >
              <stats-card>
                <div slot="header" class="icon-warning " style="height: 15px;">
                  <div class="row justify-content-between budget-header">
                    <div>
                      <h6 class="budget-text">{{ budget.category }}</h6>
                      <h6 class="budget-text">Spent: {{ budget.spent }}$</h6>
                    </div>
                    <div>
                      <h6 class="budget-text">Budget: {{ budget.budget }}$</h6>
                      <h6 class="budget-text">
                        {{ budget.budget - budget.spent }}$ Left
                      </h6>
                    </div>
                  </div>
                </div>
                <div slot="footer">
                  <div class="row">
                    <div class="col-12">
                      <div class="progress progress-custom">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          :style="{ width: calculatePercent(budget) + '%' }"
                          :aria-valuenow="calculatePercent(budget)"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {{ calculatePercent(budget) }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </stats-card>
            </div>
            <!-- <div class="col-xl-12 col-md-12">
              <stats-card>
                <div slot="header" class="icon-warning " style="height: 15px;">
                  <div class="row justify-content-between budget-header">
                    <div>
                      <h6 class="budget-text">Eating Out</h6>
                      <h6 class="budget-text">Spent: 4$</h6>
                    </div>
                    <div>
                      <h6 class="budget-text">Buget: 100$</h6>
                      <h6 class="budget-text">96$ Left</h6>
                    </div>
                  </div>
                </div>
                <div slot="footer">
                  <div class="row">
                    <div class="col-12">
                      <div class="progress progress-custom">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 40%;"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </stats-card>
            </div>
            <div class="col-xl-12 col-md-12">
              <stats-card>
                <div slot="header" class="icon-warning " style="height: 15px;">
                  <div class="row justify-content-between budget-header">
                    <div>
                      <h6 class="budget-text">Eating Out</h6>
                      <h6 class="budget-text">Spent: 4$</h6>
                    </div>
                    <div>
                      <h6 class="budget-text">Buget: 100$</h6>
                      <h6 class="budget-text">96$ Left</h6>
                    </div>
                  </div>
                </div>
                <div slot="footer">
                  <div class="row">
                    <div class="col-12">
                      <div class="progress progress-custom">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 40%;"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </stats-card>
            </div>
            <div class="col-xl-12 col-md-12">
              <stats-card>
                <div slot="header" class="icon-warning " style="height: 15px;">
                  <div class="row justify-content-between budget-header">
                    <div>
                      <h6 class="budget-text">Eating Out</h6>
                      <h6 class="budget-text">Spent: 4$</h6>
                    </div>
                    <div>
                      <h6 class="budget-text">Buget: 100$</h6>
                      <h6 class="budget-text">96$ Left</h6>
                    </div>
                  </div>
                </div>
                <div slot="footer">
                  <div class="row">
                    <div class="col-12">
                      <div class="progress progress-custom">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 40%;"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </stats-card>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <sign-up-modal :showModal="show"></sign-up-modal>
  </div>
</template>
<script>
import StatsCard from "src/components/Cards/StatsCard.vue";
export default {
  components: {
    StatsCard
  },
  data() {
    return {
      show: false,
      budgets: this.$store.state.budgets
    };
  },
  methods: {
    calculatePercent(budget) {
      return Math.ceil((budget.spent / budget.budget) * 100);
    },
    addBudgetPage() {
      this.$router.push("/add-budget");
    }
  },
  mounted(){
       if(!this.$store.state.loggedIn){
      console.log('not login');
      this.show = true;
      
    }
  }
};
</script>
<style lang="scss" scoped>
.duties-category-btn {
  margin-bottom: 20px;
  margin-left: 15px;
}
button {
  margin-right: 20px;
}
</style>
