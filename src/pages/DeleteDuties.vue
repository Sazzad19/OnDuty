<template>
  <div class="content" style="background-color:hsl(134deg 10% 61% / 9%)">
    <div class="container-fluid">
      <div class="search-anything">
        <div
          class="row height d-flex justify-content-center align-items-center"
        >
          <div class="col-md-6">
            <div class="form">
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="form-control form-input"
                placeholder="Search duties..."
              />
              <span class="left-pan"><i class="fa fa-microphone"></i></span>
            </div>
          </div>
        </div>
        <div class="row dutis-list">
          <div class="col-12"><h4>Select duties to delete</h4></div>
        </div>
        <div class="row dutis-list">
          <div class="col-12">
            <div class="list-group">
              <li
                class="list-group-item"
                v-for="duty in dutyArray"
                :key="duty.id"
              >
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                  @change="selectDuty($event, duty)"
                />
                {{ duty.title }}
              </li>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <button type="button" class="btn btn-danger" @click="deleteDuty">
            <i class="fa fa-trash"></i>
          </button>
        </div>
        <div class="row dutis-list">
          <div class="col-12"><h4>Trash</h4></div>
        </div>
        <div class="row dutis-list">
          <div class="col-12">
            <div class="list-group">
              <li
                class="list-group-item"
                v-for="trashDuty in dutyTrash"
                :key="trashDuty.id"
              >
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                  @change="selectTrashDuty($event, trashDuty)"
                />
                {{ trashDuty.title }}
              </li>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <button type="button" class="btn btn-danger" @click="deleteTrash">
            Empty Trash
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <sign-up-modal :showModal="show"></sign-up-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dutyArray: [],
      dutyTrash: [],
      dutyToDelete: [],
      dutyToDeleteFromTrash: [],
      show: false
    };
  },
  mounted() {
    this.dutyArray = this.$store.state.duties.filter(
      duty => duty.status != "Trash"
    );
    this.dutyTrash = this.$store.state.duties.filter(
      duty => duty.status === "Trash"
    );
       if(!this.$store.state.loggedIn){
      console.log('not login');
      this.show = true;
      
    }
  },
  methods: {
    deleteDuty() {
      this.dutyToDelete.forEach(duty => {
        let dutyfound = this.$store.state.duties.find(dt => duty.id === dt.id);
        dutyfound.status = "Trash";
        this.deleteFromDutyList(dutyfound);
      });
      this.dutyToDelete = [];
    },
    selectDuty(e, duty) {
      if (e.target.checked) {
        this.dutyToDelete.push(duty);
      } else {
        let index = this.dutyToDelete.findIndex(dt => dt.id == duty.id);
        if (index != -1) {
          this.dutyToDelete.splice(index, 1);
        }
      }
    },
    deleteFromDutyList(duty) {
      let index = this.dutyArray.findIndex(dt => dt.id == duty.id);
      if (index != -1) {
        this.dutyArray.splice(index, 1);
        this.dutyTrash.push(duty);
      }
    },
    selectTrashDuty(e, duty) {
      if (e.target.checked) {
        this.dutyToDeleteFromTrash.push(duty);
      } else {
        let index = this.dutyToDeleteFromTrash.findIndex(
          dt => dt.id === duty.id
        );
        if (index != -1) {
          this.dutyToDeleteFromTrash.splice(index, 1);
        }
      }
    },
    deleteTrash() {
      this.dutyToDeleteFromTrash.forEach(duty => {
        this.$store.commit("removeDuty", duty);
        this.deleteFromTrashList(duty);
      });
      this.dutyToDeleteFromTrash = [];
    },
    deleteFromTrashList(duty) {
      let index = this.dutyTrash.findIndex(dt => dt.id == duty.id);
      if (index != -11) {
        this.dutyTrash.splice(index, 1);
      }
    }
  }
};
</script>

<style></style>
