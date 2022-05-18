<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="row"><h5>Add Budget</h5></div>

      <div class="alert alert-success" role="alert" v-if="successMessage">
        {{ successMessage }}
      </div>
      <form>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Category</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="budget.category"
              >
                <option>Health & Beauty</option>
                <option>Transport</option>
                <option>Home Decoration</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <textarea
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="Title"
                v-model="budget.description"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Budget Amount</label>
              <input
                type="text"
                class="form-control"
                id="reminder"
                aria-describedby="reminder"
                v-model="budget.budget"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Spent</label>
              <input
                type="text"
                class="form-control"
                id="reminder"
                aria-describedby="reminder"
                v-model="budget.spent"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="row justify-content-between">
        <button type="button" class="btn btn-success" @click="addBudget">
          Add Budget
        </button>

        <button type="button" class="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: {
    Multiselect,
    DatePicker
  },
  data() {
    return {
      category: [{ name: "Home", code: "ho" }],
      tag: [{ name: "Promotion", code: "pr" }],
      CatOptions: [
        { name: "Home", code: "ho" },
        { name: "Work", code: "wo" },
        { name: "Leisure", code: "le" }
      ],
      tagOptions: [
        { name: "Promotion", code: "ho" },
        { name: "Advert", code: "wo" }
      ],
      startDate: null,
      endDate: null,
      format: "YYYY-MM-DD",
      successMessage: "",

      budget: {
        category: "",
        description: "",
        budget: null,
        spent: null
      }
    };
  },
  methods: {
    addBudget() {
      this.$store.commit("addBudget", this.budget);
      this.budget = {
        category: "",
        description: "",
        budget: null,
        spent: null
      };
      this.successMessage = "Budget added successfully.";
    }
  }
};
</script>

<style></style>
