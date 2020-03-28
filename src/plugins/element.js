import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Input,
  Checkbox,
  Radio,
  Table,
  TableColumn,
  Button,
  Notification,
  Loading,
  Upload,
} from 'element-ui'

Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Loading.directive)

Vue.prototype.$notify = (options) => {
  Notification(Object.assign({
    position: 'top-right',
    duration: 3000,
  }, options))
}
Vue.prototype.$loading = Loading.service