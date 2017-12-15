# ml-ui组件
[在线预览](http://www.zdliu.com)

构建部署环境基于[vue-webpack-config](https://github.com/zdliuccit/vue-webpack-config)

##Usage
Import all components.
```js
import Vue from 'vue'
import MlUi from 'ml-ui'
import 'ml-ui/styles/index.css'

Vue.use(MlUi)
```
Or import specified component. (Use babel-plugin-component)
```js
import { Test } from 'ml-ui'

Vue.component(Test.name, Test)

Vue.prototype[Test.name] = Test

```