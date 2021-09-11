import {createApp} from 'vue'
import App from './App.vue'
import components from '@/components/ui'
import store from './store'
import './registerServiceWorker'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store).mount('#app')
