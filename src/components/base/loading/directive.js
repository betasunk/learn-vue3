import Loading from './loading.vue'
import { createApp } from 'vue'

const loadingDirective = {
  mounted(el, binding) {
    console.log('binding>>>', binding)
    console.log('el>>>', el)
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    if (binding.value) {
      el.appendChild(instance.$el)
      const title = binding.arg
      console.log('vnode>>>', instance)
      el.instance.setTitle(title)
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? el.appendChild(el.instance.$el) : el.removeChild(el.instance.$el)
    }
  }
}

export default loadingDirective
