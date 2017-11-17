# ml-ui组件

构建部署环境基于[vue-webpack-config](https://github.com/zdliuccit/vue-webpack-config)

##Usage
Import all components.
```js
import Vue from 'vue'
import MlUi from 'ml-ui'
import 'ml-ui/style/index.css'

Vue.use(MlUi)
```
Or import specified component. (Use babel-plugin-component)
```js
import { Test } from 'ml-ui'

Vue.component(test.name, test)
```


### 技术栈
* Webpack3
* Koa2
* Axios
* Vue2 & vue-router
* Babel Es6/7
* Eslint
* stylus postcss


### Configuration tasks/命令
* npm start: 启动开发模式下的server
* npm run prod:  启动生产服务，前提必须 npm run build打包
* npm run build: 打包生产模式的代码
* npm run fix-client: 修复大部分Eslint规则


### Linux环境部署

* git clone 或 git pull 拉取代码
* npm i 安装npm包
* npm run build 打包生产代码
* nohup npm run prod > myLog.log 2>&1 &exit      //启动服务并退出 适用命令窗口，用工具的无视

pkill node   //关闭 node 服务
