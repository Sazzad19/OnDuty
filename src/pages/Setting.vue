<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="row"><h6>Setting</h6></div>
      <form>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Language</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>English</option>
                <option>Hindi </option>
                <option>Arabic </option>
                <option>Portuguese </option>
                <option>Russian </option>
                <option>Japanese </option>
                <option>French</option>
                <option>Urdu</option>
                <option>Bengali</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Country</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>United Kigdom</option>
                <option>USA</option>
                <option>Canada</option>
                <option>Germany</option>
                <option>France</option>
                <option>Chin</option>
                <option>Russia</option>
                <option>Ukrain</option>
                <option>Bangladesh</option>

                <option>India</option>
                <option>Pakistan</option>
              </select>
            </div>
          </div>
        </div>
        <!-- <div class="row form-row">
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
        </div> -->
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Time Zone</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>United Kigdom</option>
                <option>USA</option>
                <option>Canada</option>
                <option>Germany</option>
                <option>France</option>
                <option>Chin</option>
                <option>Russia</option>
                <option>Ukrain</option>
                <option>Bangladesh</option>

                <option>India</option>
                <option>Pakistan</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Font Size</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>10</option>
                <option>15</option>
                 <option>20</option>
                <option>25</option>
                <option>30</option>

              </select>
            </div>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1" class="button-label"
                >Turn On Notification</label
              >
              <input type="checkbox" data-toggle="toggle" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1" class="button-label"
                >Default OnMyduty</label
              >
              <button class="btn btn-success">Set as Default</button>
            </div>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1" class="button-label"
                >Turn On Dark Mode</label
              >
              <input type="checkbox" data-toggle="toggle" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1" class="button-label"
                >Change My Password</label
              >
              <button class="btn btn-success">Change Password</button>
            </div>
          </div>
        </div>
        <div class="row form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1" class="button-label"
                >Allow Sharing with Exteranl User</label
              >
              <input type="checkbox" data-toggle="toggle" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1" class="button-label"
                >For any Help or Guidence</label
              >
              <button class="btn btn-success">Help/Guidence</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import datePicker from "vue-bootstrap-datetimepicker";
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect,
    datePicker
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
      dateOptions: {
        format: "DD/MM/YYYY h:mm:ss",
        useCurrent: false,
        showClear: true,
        showClose: true
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
    }
  }
};
</script>

<style></style>
