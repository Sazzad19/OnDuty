
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import budgets from './budgets';
import duties from './duties';
const store = new Vuex.Store({
  state: {
    duties: duties,
    budgets: budgets,
    loggedIn: false
  },
  mutations: {
    addDuty (state, duty) {
      state.duties.push(duty);
    },
    addBudget(state, budget){
      state.budgets.push(budget);

    }, 
    removeDuty(state, duty){
      let index = state.duties.indexOf(dt => duty.id === dt.id);
      state.duties.splice(index, 1);
    }
  }
})
  export default store