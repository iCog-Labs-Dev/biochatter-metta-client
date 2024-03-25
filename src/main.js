import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Settings from './views/Settings.vue'
import Chat from './views/Chat.vue'
import Topics from './views/Topics.vue'
import './style.css'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'topics', component: Topics },
      { path: '/about', name: 'chat', component: Chat },
      { path: '/settings', name: 'settings', component: Settings },
    ],
  })

createApp(App).use(router).mount('#app')
