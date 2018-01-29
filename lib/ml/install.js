function setIosOnePx() {
  const u = navigator.userAgent
  /*eslint-disable*/
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    const cssStyle = document.createElement('style')
    const cssString = `
    @media screen and (-webkit-min-device-pixel-ratio: 2) {
      .ml-border { border-width: 0.5px !important; }
    }
    @media screen and (-webkit-min-device-pixel-ratio: 3) {
      .ml-border { border-width: 0.333333px !important;}
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
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function(components, globalServices) {
  /**
   * The Vue installer.
   *
   * @param {Object} Vue
   * @return {void}
   * @author Seven Du <shiweidu@outlook.com>
   */
  return function(Vue) {
    setIosOnePx()

    // Register all ML-UI components.
    Object.values(components).forEach(function(component) {
      Vue.component(component)
    })

    // Register all ML-UI Services.
    Object.assign(Vue.prototype, globalServices)
  }
}
