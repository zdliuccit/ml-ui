function setIosOnePx() {
  const u = navigator.userAgent
  /*eslint-disable*/
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    const cssStyle = document.createElement('style')
    const cssString = `
    @media screen and (-webkit-min-device-pixel-ratio: 2) {
      .ml-border { border-width: 0.5px}
    }
    @media screen and (-webkit-min-device-pixel-ratio: 3) {
      .ml-border { border-width: 0.333333px}
    }`
    cssStyle.setAttribute('type', 'text/css')
    cssStyle.appendChild(document.createTextNode(cssString))
    document.getElementsByTagName('head')[0].appendChild(cssStyle)
  }
  /*eslint-disbaled*/
}

/**
 * The install register.
 *
 * @param {Object} components
 * @param {Object} globalServices
 * @return {Function}
 */
export default function (components, globalServices) {
  /**
   * The Vue installer.
   *
   * @param {Object} Vue
   * @return {void}
   */
  return function (Vue) {
    setIosOnePx()

    // Register all ML-UI components.
    Object.keys(components).map(key => Vue.component(components[key].name, components[key]))

    // Register all ML-UI Services.
    Object.assign(Vue.prototype, globalServices)
  }
}
