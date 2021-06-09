import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.es'
import {
  uniArrowLeft,
  uniCheck,
  uniSchedule,
  uniChartGrowthAlt,
  uniTimes,
} from 'vue-unicons/dist/icons'

Unicon.add([uniCheck, uniArrowLeft, uniSchedule, uniChartGrowthAlt, uniTimes])
Vue.use(Unicon)
