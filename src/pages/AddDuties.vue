<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="row"><h5>Add Duty</h5></div>
      <div class="row">
        <div class="alert alert-success" role="alert" v-if="successMessage">
          {{ successMessage }}
        </div>
      </div>
      <form>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="Title"
                v-model="duty.title"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <textarea
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="Title"
                v-model="duty.description"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-12">
            <label for="exampleInputEmail1">Categories</label>
            <multiselect
              v-model="category"
              tag-placeholder="Add this as new category"
              placeholder="Search or add categories"
              label="name"
              track-by="code"
              :options="CatOptions"
              :multiple="true"
              :taggable="true"
              @tag="addCategory"
            ></multiselect>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Start Date</label>
              <date-picker
                v-model="duty.startDate"
                valueType="format"
              ></date-picker>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">End Date</label>
              <date-picker
                v-model="duty.endDate"
                valueType="format"
              ></date-picker>
            </div>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Priority</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="duty.priority"
              >
                <option>Heigh</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Billing Type</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="duty.billable"
              >
                <option>Billable</option>
                <option>Non-Billable</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-12">
            <label for="exampleInputEmail1">Tags</label>
            <multiselect
              v-model="tag"
              tag-placeholder="Add this as new tag"
              placeholder="Search or add tags"
              label="name"
              track-by="code"
              :options="tagOptions"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></multiselect>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Reminder</label>
              <input
                type="text"
                class="form-control"
                id="reminder"
                aria-describedby="reminder"
                billable
                v-model="duty.reminder"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Recurrence</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="duty.recurrence"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div class="row justify-content-between">
        <button type="button" class="btn btn-success" @click="addDuty">
          Add Duty
        </button>
        <button type="button" class="btn btn-warning">
          Save and Add to My Duties
        </button>
        <button type="button" class="btn btn-primary">
          Add More
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

      duty: {
        title: "",
        description: "",
        startDate: null,
        endDate: null,
        status: "My Duty",
        progress: 0,
        reminder: "",
        recurrence: "",
        priority: "",
        billable: ""
      }
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.tagOptions.push(tag);
      this.tag.push(tag);
    },
    addCategory(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.CatOptions.push(tag);
      this.category.push(tag);
    },
    addDuty() {
      this.$store.commit("addDuty", this.duty);
      this.duty = {
        title: "",
        description: "",
        startDate: null,
        endDate: null,
        status: "My Duty",
        progress: 0,
        reminder: "",
        recurrence: "",
        priority: "",
        billable: ""
      };
      this.successMessage = "Duty added successfully.";
    }
  }
};
</script>

<style></style>
