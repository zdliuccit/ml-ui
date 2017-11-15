import Button from './components/button/button.vue'

const components = [
  Button
]

const install = function (Vue) {
  components.map(component => Vue.component(`ml-${component.name}`, component))
}

module.exports = {
  version: '1.0.1',
  install,
}
