<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-8 col-md-12">
          <div class="row justify-content-center">
            <div
              class="btn-toolbar justify-content-between duties-category-btn"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group" role="group" aria-label="First group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="loadMyDuties"
                >
                  My Duties
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="loadInProgress"
                >
                  In Progress
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="loadCompleteDuties"
                >
                  Complete
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="loadTrash"
                >
                  Trash
                </button>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div
              class="btn-toolbar justify-content-center duties-category-btn"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <button
                type="button"
                class="btn btn-secondary"
                @click="goToAddDutisPage"
              >
                <i class="fa fa-calendar-plus-o"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="goToDeleteDutisPage"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
          <div class="row">
            <div
              class="col-xl-12 col-md-12"
              v-for="duty in dutyArray"
              :key="duty.id"
            >
              <stats-card>
                <div slot="header" class="icon-warning" style="height: 15px;">
                  <div class="row">
                    <div class="col-9">
                      <div>
                        <span class="badge badge-pill badge-primary">{{
                          duty.status
                        }}</span>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon-big">
                        <p class="card-category">3 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div slot="content" @click="selectDuty(duty)">
                  <div class="row text-center">
                    <h4 class="text-center">
                      {{ duty.description }}
                    </h4>
                  </div>
                </div>
                <div slot="footer">
                  <div class="row">
                    <div class="col-12">
                      <div class="progress progress-custom">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          :style="{ width: duty.progress + '%' }"
                          :aria-valuenow="duty.progress"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {{ duty.progress }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </stats-card>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12">
          <div class="row">
            <h5>{{ selectedDuty.startDate }}</h5>
          </div>
          <div class="row">
            <h6>{{ selectedDuty.title }}</h6>
          </div>
          <div class="row">
            <p>
              {{ selectedDuty.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StatsCard from "src/components/Cards/StatsCard.vue";
import { EventBus } from "../../src/event-bus.js";

export default {
  components: {
    StatsCard
  },
  mounted: function() {
    this.dutyArray = this.duties.filter(duty => duty.status != "Trash");
    EventBus.$on("dutyInput", data => {
      if (data != "") {
        this.dutyArray = [];
        this.dutyArray = this.duties.filter(
          duty =>
            duty.title.includes(data) ||
            duty.description.includes(data) ||
            duty.startDate.includes(data) ||
            duty.endDate.includes(data)
        );
      }
    });
  },
  data() {
    return {
      duties: this.$store.state.duties,
      dutyArray: [],
      selectedDuty: {}
    };
  },

  methods: {
    goToAddDutisPage() {
      this.$router.push("/add-duties");
    },
    goToDeleteDutisPage() {
      this.$router.push("/delete-duties");
    },
    loadMyDuties() {
      this.dutyArray = [];
      this.dutyArray = this.duties.filter(duty => duty.status != "Trash");
    },
    loadCompleteDuties() {
      this.dutyArray = [];
      this.dutyArray = this.duties.filter(du => du.status === "Complete");
    },
    loadInProgress() {
      this.dutyArray = [];
      this.dutyArray = this.duties.filter(du => du.status === "In Progress");
    },
    loadTrash() {
      this.dutyArray = [];
      this.dutyArray = this.duties.filter(du => du.status === "Trash");
    },
    selectDuty(duty) {
      this.selectedDuty = duty;
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
.parentDiv {
  height: auto;
}
// html,
// body {
//   font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   font-size: 100%;
// }

// html {
//   height: 100%;
// }

// body {
//   overflow: auto;
//   position: relative;
// }

// .b--moon-gray {
//   border-color: #ccc;
// }

// .flex-fill {
//   flex: 1 1;
//   min-width: 0; /* 1 */
//   min-height: 0; /* 1 */
// }

// .darken-10:hover,
// .darken-10:focus {
//   box-shadow: inset 9999px 9999px rgba(0, 0, 0, 0.1);
// }

// .darken-10:active {
//   box-shadow: inset 9999px 9999px rgba(0, 0, 0, 0.2);
// }

// .lh-1 {
//   line-height: 1;
// }
</style>
