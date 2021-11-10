import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
import VueTyperPlugin from 'vue-typer'


Vue.use(smoothScroll)
Vue.use(VueTyperPlugin)

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHandshake,faCode,faUserCircle,faLink,faPen,faSchool,faHeart,
  faSearch,faEnvelope,
  faBirthdayCake,faImage,faArchive,faToolbox,faFileCode } from '@fortawesome/free-solid-svg-icons'

import { faTwitter,faGithub,faJsSquare,faMastodon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHandshake,faCode,faUserCircle,faLink,faPen,
  faSchool,faHeart,faSearch,faTwitter,faGithub,faMastodon,faEnvelope,
  faBirthdayCake,faJsSquare,faImage,faToolbox,faArchive,faFileCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
