/**
 * Created by liuzhengdong on 2017/7/6.
 */
const path = require('path')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const getVueLoaderConfig = require('./config/vue-loader.conf')

// 版本号
function resolve(dir) {
  return path.resolve(process.cwd(), dir)
}

const vueLoaderConfig = getVueLoaderConfig('prod')

const config = {
  // 入口模块配置
  entry: {
    app: path.join(__dirname, 'lib/ml/index.js'), // 入口
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  // 输出模块配置
  output: {
    // 输出到这个目录下
    path: resolve('release/'),
    // 生成的文件名, [name] 即为entry配置中的key
    filename: 'ml-ui.js',
    libraryTarget: 'umd',   // 输出格式
    umdNamedDefine: true    // 是否将模块名称作为 AMD 输出的命名空间
  },
  // 寻找模块时的一些缺省设置
  resolve: {
    // 补充扩展名
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [vueLoaderConfig, 'eslint-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // 由于mac不区分大小写，linux区分大小写，可能导致mac上正常，在部署时出错，所以强制区分大小写
    new CaseSensitivePathsPlugin(),
    // // js压缩
    new webpack.optimize.UglifyJsPlugin({
      comments: false,        // 去掉注释
      compress: {
        warnings: false, // 不显示警告
        drop_console: false,
      },
    }),
    //  Scope Hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}

module.exports = config