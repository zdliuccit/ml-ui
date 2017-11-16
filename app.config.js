/**
 * 项目的一些定制化配置
 */
const path = require('path')
const serverConfig = require('./server.config')
import utils from './config/utils/StringUtils'

// 基于饿了么vue-markdown-loader的组件库开发模式  配置md的加载
const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [require('markdown-it-container'), 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function (tokens, idx) {
        let m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          let description = (m && m.length > 1) ? m[1] : ''
          let content = tokens[idx + 1].content
          let html = utils.convert(utils.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')

          let descriptionHTML = description ? md.render(description) : ''
          return `<demo-block class="demo-box">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`
        }
        return '</div></demo-block>\n'
      }
    }]
  ]
}

module.exports = {
  // 主服务启动端口
  appPort: serverConfig.appPort,
  // 代理配置，可支持多个代理，key为前缀，命中后，会把前缀去掉，转发到代理服务器
  proxy: serverConfig.proxy,
  // webpack的差异化配置
  webpack: {
    entry: {
      app: path.join(__dirname, 'client/index.js'), // 入口
      vendor: ['vue', 'vue-router', 'vue-template-compiler'] // 拆分框架代码
    },
    // 是否对样式启用px到rem的转换,配合config/utils/responsive-design.js适配移动端开发， 默认不开启
    enablePx2Rem: false,
    // 自定义Alias设置
    resolveAlias: {
      '@ml': path.join(__dirname, 'lib'),
    },
    // 扩展rules
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        include: [path.join(__dirname, 'docs')],
        options: vueMarkdown
      }
    ],
    // 扩展css postcss
    postcss: [
      // require('postcss-salad')
    ],
  },
  // 自定义中间件 async await函数写法
  middleWares: []
}
