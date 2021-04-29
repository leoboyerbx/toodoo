import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AvatarList: () => import('../../components/AvatarList.vue' /* webpackChunkName: "components/avatar-list" */).then(c => wrapFunctional(c.default || c)),
  CircleButton: () => import('../../components/CircleButton.vue' /* webpackChunkName: "components/circle-button" */).then(c => wrapFunctional(c.default || c)),
  InteractiveMap: () => import('../../components/InteractiveMap.vue' /* webpackChunkName: "components/interactive-map" */).then(c => wrapFunctional(c.default || c)),
  MainScreenOverlay: () => import('../../components/MainScreenOverlay.vue' /* webpackChunkName: "components/main-screen-overlay" */).then(c => wrapFunctional(c.default || c)),
  MapOverlay: () => import('../../components/MapOverlay.vue' /* webpackChunkName: "components/map-overlay" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
