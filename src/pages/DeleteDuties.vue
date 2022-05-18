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
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />
                Cras justo odio
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Dapibus ac facilisis in
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Morbi leo risus
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Porta ac consectetur ac
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Vestibulum at eros
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
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />
                Cras justo odio
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Dapibus ac facilisis in
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Morbi leo risus
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Porta ac consectetur ac
              </li>
              <li class="list-group-item">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  class="duty-checbox"
                />Vestibulum at eros
              </li>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <button type="button" class="btn btn-danger" @click="deleteDuty">
            Empty Trash
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteDuty() {}
  }
};
</script>

<style></style>
