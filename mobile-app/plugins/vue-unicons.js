import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.es'
import {
  uniArrowLeft,
  uniArrowRight,
  uniCheck,
  uniSchedule,
  uniChartGrowthAlt,
} from 'vue-unicons/dist/icons'

Unicon.add([
  uniCheck,
  uniArrowLeft,
  uniSchedule,
  uniChartGrowthAlt,
  uniArrowRight,
])
Vue.use(Unicon)
