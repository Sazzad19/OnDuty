<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h6>Monthly Budget</h6>
        </div>
      </div>
      <div class="row budget-list">
        <div class="col-xl-12 col-md-12">
          <div class="row">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StatsCard from "src/components/Cards/StatsCard.vue";
export default {
  components: {
    StatsCard
  }
  // data() {
  //   return {
  //     editTooltip: "Edit Task",
  //     deleteTooltip: "Remove",
  //     pieChart: {
  //       data: {
  //         labels: ["40%", "20%", "40%"],
  //         series: [40, 20, 40]
  //       }
  //     },
  //     random_pct: 0,
  //     increasing_pct: 0,
  //     decreasing_pct: 100,
  //     is_paused: false,
  //     lineChart: {
  //       data: {
  //         labels: [
  //           "9:00AM",
  //           "12:00AM",
  //           "3:00PM",
  //           "6:00PM",
  //           "9:00PM",
  //           "12:00PM",
  //           "3:00AM",
  //           "6:00AM"
  //         ],
  //         series: [
  //           [287, 385, 490, 492, 554, 586, 698, 695],
  //           [67, 152, 143, 240, 287, 335, 435, 437],
  //           [23, 113, 67, 108, 190, 239, 307, 308]
  //         ]
  //       },
  //       options: {
  //         low: 0,
  //         high: 800,
  //         showArea: false,
  //         height: "245px",
  //         axisX: {
  //           showGrid: false
  //         },
  //         lineSmooth: true,
  //         showLine: true,
  //         showPoint: true,
  //         fullWidth: true,
  //         chartPadding: {
  //           right: 50
  //         }
  //       },
  //       responsiveOptions: [
  //         [
  //           "screen and (max-width: 640px)",
  //           {
  //             axisX: {
  //               labelInterpolationFnc(value) {
  //                 return value[0];
  //               }
  //             }
  //           }
  //         ]
  //       ]
  //     },
  //     barChart: {
  //       data: {
  //         labels: [
  //           "Jan",
  //           "Feb",
  //           "Mar",
  //           "Apr",
  //           "Mai",
  //           "Jun",
  //           "Jul",
  //           "Aug",
  //           "Sep",
  //           "Oct",
  //           "Nov",
  //           "Dec"
  //         ],
  //         series: [
  //           [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
  //           [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  //         ]
  //       },
  //       options: {
  //         seriesBarDistance: 10,
  //         axisX: {
  //           showGrid: false
  //         },
  //         height: "245px"
  //       },
  //       responsiveOptions: [
  //         [
  //           "screen and (max-width: 640px)",
  //           {
  //             seriesBarDistance: 5,
  //             axisX: {
  //               labelInterpolationFnc(value) {
  //                 return value[0];
  //               }
  //             }
  //           }
  //         ]
  //       ]
  //     },
  //     tableData: {
  //       data: [
  //         {
  //           title:
  //             'Sign contract for "What are conference organizers afraid of?"',
  //           checked: false
  //         },
  //         {
  //           title:
  //             "Lines From Great Russian Literature? Or E-mails From My Boss?",
  //           checked: true
  //         },
  //         {
  //           title:
  //             "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  //           checked: true
  //         },
  //         {
  //           title: "Create 4 Invisible User Experiences you Never Knew About",
  //           checked: false
  //         },
  //         { title: 'Read "Following makes Medium better"', checked: false },
  //         { title: "Unfollow 5 enemies from twitter", checked: false }
  //       ]
  //     }
  //   };
  // },
  // computed: {
  //   version() {
  //     return VERSION;
  //   },
  //   header_cls() {
  //     return "db mt5 pb3 dark-gray hover-blue lh-1 no-underline";
  //   },
  //   box_cls() {
  //     return "db pt3 pb4 ph3 ph0-l relative";
  //   },
  //   box_style() {
  //     return "min-height: 100px";
  //   },
  //   label_cls() {
  //     return "mb4 f6 fw6 dark-gray";
  //   },
  //   cell_cls() {
  //     return "ph1 pv1 ba b--moon-gray";
  //   }
  // },
  // mounted() {
  //   setInterval(() => {
  //     if (this.is_paused) return;

  //     this.random_pct = Math.ceil(Math.random() * 100);
  //     this.increasing_pct = Math.min(this.increasing_pct + 2, 100);
  //     this.decreasing_pct = Math.max(this.decreasing_pct - 2, 0);
  //   }, 2000);
  // },
  // methods: {
  //   goToAddDutisPage() {
  //     this.$router.push("/add-duties");
  //   },
  //   goToDeleteDutisPage() {
  //     this.$router.push("/delete-duties");
  //   }
  // }
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
