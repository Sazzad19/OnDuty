import DashboardLayout from '../layout/DashboardLayout.vue'
import AddDuties from '../pages/AddDuties.vue'
import Budgets from '../pages/Budgets.vue'
import Calender from '../pages/Calender.vue'
import DeleteDuties from '../pages/DeleteDuties.vue'
import Duties from '../pages/Duties.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'
import Setting from '../pages/Setting.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '/duties',
        name: 'duties',
        component: Duties,
      },
      {
        path: '/calender',
        name: 'calender',
        component: Calender,
      },
      {
        path: '/budget',
        name: 'budget',
        component: Budgets,
      },
      {
        path: '/setting',
        name: 'setting',
        component: Setting,
      },
      {
        path: '/add-duties',
        name: 'add-duties',
        component: AddDuties,
      },
      {
        path: '/delete-duties',
        name: 'delete-duties',
        component: DeleteDuties,
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
