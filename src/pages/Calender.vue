<template>
  <div class="row justify-content-center">
    <calendar :attributes="attributes">
      <div slot="day-popover" slot-scope="{ dayTitle, attributes }">
        <div class="text-xs text-gray-300 font-semibold text-center">
          {{ dayTitle }}
        </div>
        <ul>
          <li v-for="{ key, customData } in attributes" :key="key">
            <div>{{ customData.title }}</div>
            {{ customData.description }}
          </li>
        </ul>
      </div>
    </calendar>
    <sign-up-modal :showModal="show"></sign-up-modal>
  </div>
</template>

<script>
export default {
  data(){
return {
  show: false
}
  },
  computed: {
    attributes() {
      return [
        ...this.$store.state.duties.map(duty => ({
          key: duty.id,
          dates: duty.startDate,
          dot: true,
          popover: {
            label: duty.title,
            visibility: "focus"
          },
          customData: duty
        }))
      ];
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

<style></style>
