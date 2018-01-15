# ml-ui使用文档
本文将介绍 ml-ui 的安装方式和基本的用法。

### npm安装

<strong>注:暂不支持单组件引入</strong>

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。
```npm
npm i ml-ui -S
```

使用
```js
import 'ml-ui/styles/index.css'

import mlUI from 'ml-ui'

Vue.use(mlUi)
```



关于事件绑定

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：

例外:`<ml-button></ml-button>`无需加

```html
<ml-component @click.native="click">Click Me</ml-component>
```