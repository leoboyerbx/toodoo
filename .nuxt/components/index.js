import { wrapFunctional } from './utils'

export { default as AvatarList } from '../../components/AvatarList.vue'
export { default as CircleButton } from '../../components/CircleButton.vue'
export { default as InteractiveMap } from '../../components/InteractiveMap.vue'
export { default as MainScreenOverlay } from '../../components/MainScreenOverlay.vue'
export { default as MapOverlay } from '../../components/MapOverlay.vue'

export const LazyAvatarList = import('../../components/AvatarList.vue' /* webpackChunkName: "components/avatar-list" */).then(c => wrapFunctional(c.default || c))
export const LazyCircleButton = import('../../components/CircleButton.vue' /* webpackChunkName: "components/circle-button" */).then(c => wrapFunctional(c.default || c))
export const LazyInteractiveMap = import('../../components/InteractiveMap.vue' /* webpackChunkName: "components/interactive-map" */).then(c => wrapFunctional(c.default || c))
export const LazyMainScreenOverlay = import('../../components/MainScreenOverlay.vue' /* webpackChunkName: "components/main-screen-overlay" */).then(c => wrapFunctional(c.default || c))
export const LazyMapOverlay = import('../../components/MapOverlay.vue' /* webpackChunkName: "components/map-overlay" */).then(c => wrapFunctional(c.default || c))
