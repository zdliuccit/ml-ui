const gulp = require('gulp')
const postcss = require('gulp-postcss')
const postcssPluins = require('./config/postcss.conf')
const stylus = require('gulp-stylus')
const cleanCSS = require('gulp-clean-css') // CSS压缩

gulp.task('move-font', function () {
  gulp.src('lib/styles/font/*.ttf')
    .pipe(gulp.dest('release/styles/font'))
})
gulp.task('move-images', function () {
  gulp.src('lib/styles/images/**')
    .pipe(gulp.dest('release/styles/images'))
})

gulp.task('index-stylus', function () {
  gulp.src('lib/styles/index.styl')
    .pipe(stylus())
    .pipe(postcss(postcssPluins()))
    .pipe(cleanCSS({
      level: {
        1: {
          transform: function (propertyName, propertyValue) {
            if (propertyName === 'src' && propertyValue.indexOf('iconfont') > -1) {
              return propertyValue.replace('iconfont', 'font/iconfont')
            }
            if (propertyName === 'background' && propertyValue.indexOf('./../images') > -1) {
              return propertyValue.replace('./../images', 'images')
            }
          },
        },
        2: {
          all: true, // sets all values to `false`
          removeUnusedAtRules: false, // controls duplicate `@font-face` removing; defaults to true
        }
      }
    }))
    .pipe(gulp.dest('release/styles'))
})
gulp.task('single-stylus', function () {
  gulp.src('lib/styles/components/**/*.styl')
    .pipe(stylus())
    .pipe(postcss(postcssPluins()))
    .pipe(cleanCSS({
      level: {
        1: {
          transform: function (propertyName, propertyValue) {
            if (propertyName === 'src' && propertyValue.indexOf('iconfont') > -1) {
              return propertyValue.replace('iconfont', './../font/iconfont')
            }
          },
        },
        2: {
          all: true, // sets all values to `false`
          removeUnusedAtRules: false, // controls duplicate `@font-face` removing; defaults to true
        }
      }
    }))
    .pipe(gulp.dest('release/styles/default'))
})

gulp.task('move-components', function () {
  gulp.src('lib/ml/**/*')
    .pipe(gulp.dest('release/'))
})

gulp.task('default', ['move-font', 'move-images', 'index-stylus', 'single-stylus', 'move-components'])
