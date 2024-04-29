import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import store from './store/index'
import App from './App.vue'

//views
import Settings from './views/Settings.vue'
import Chat from './views/Chat.vue'
import Topics from './views/Topics.vue'
import './style.css'

//icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas} from '@fortawesome/free-solid-svg-icons'


const app = createApp(App)

library.add(fas)
app.component('fa', FontAwesomeIcon)

//router
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'topics', component: Topics,  },
      { path: '/chat/:id', name: 'chat', component: Chat },
      { path: '/settings', name: 'settings', component: Settings },
    ],
  })

app.use(store).use(router).mount('#app')