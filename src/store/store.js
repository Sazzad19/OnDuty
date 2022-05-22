
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
      let lastId = state.duties.pop().id;
      duty.id = lastId + 1;
      state.duties.push(duty);
    },
    addBudget(state, budget){
      let lastId = state.budgets.pop().id;
      budget.id = lastId + 1;
      state.budgets.push(budget);

    }, 
    removeDuty(state, duty){
      let index = state.duties.indexOf(dt => duty.id === dt.id);
      state.duties.splice(index, 1);
    },
    removeBudget(state, budget){
      let index = state.budgets.indexOf(dt => budget.id === dt.id);
      state.budgets.splice(index, 1);
    }
  }
})
  export default store