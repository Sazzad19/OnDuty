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
            <label for="exampleInputEmail1">Category</label>

            <multiselect
              v-model="category"
              tag-placeholder="Add this as new category"
              placeholder="Search or add categories"
              label="name"
              track-by="code"
              :options="CatOptions"
              :multiple="true"
              :taggable="true"
              @select="addCategory"
              @tag="addCategoryTag"
            ></multiselect>
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

        <button type="button" class="btn btn-danger" @click="cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      category: [{ name: "Health & Medical", code: "hm" }],
      CatOptions: [
        { name: "Health & Medical", code: "hm" },
        { name: "Eating", code: "ea" },
        { name: "Home Decoration", code: "hd" }
      ],
      startDate: null,
      endDate: null,
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
    },
    addCategory(newTag) {
      const tag = {
        name: newTag.name,
        code: newTag.name.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.$nextTick(() => {
        this.category = [];

        this.category.push(tag);
      });

      this.budget.category = newTag.name;
    },
    addCategoryTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.CatOptions.push(tag);
      this.category = [];
      this.$nextTick(() => {
        this.category.push(tag);
      });

      this.budget.category = newTag;
    },
    cancel() {
      this.budget = {
        category: "",
        description: "",
        budget: null,
        spent: null
      };
    }
  }
};
</script>

<style></style>
