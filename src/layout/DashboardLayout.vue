<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/duties">
        <i class="nc-icon nc-circle-09"></i>
        <p>Duties</p>
      </sidebar-link>
      <sidebar-link to="/calender">
        <i class="nc-icon nc-notes"></i>
        <p>Calender</p>
      </sidebar-link>
      <sidebar-link to="/budget">
        <i class="nc-icon nc-paper-2"></i>
        <p>Budget</p>
      </sidebar-link>
      <sidebar-link to="/setting">
        <i class="nc-icon nc-paper-2"></i>
        <p>Setting</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
    
  </div>
  
</template>
<style lang="scss"></style>
<script>
import DashboardContent from "./Content.vue";
import ContentFooter from "./ContentFooter.vue";
import MobileMenu from "./MobileMenu.vue";
import TopNavbar from "./TopNavbar.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  data(){
return{
  show: false
}
  },
  mounted(){
    if(this.$route.fullPath === '/'){
      this.$router.push('/duties')
    }
    // if(!this.$store.state.loggedIn){
    //   console.log('not login');
    //   this.show = true;
      
    // }
    // if(this.$router)
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
