export default {
  sidebar: [
    {
      label: '安装',
      link: '/docs/installation',
    },
    {
      label: 'BaseComponents',
      children: [
        {
          link: '/docs/icon',
          label: 'Icon 图标',
        },
        {
          link: '/docs/layout',
          label: 'Layout 布局',
        },
        {
          link: '/docs/slide',
          label: 'Slide 幻灯片',
        },
      ]
    },
    {
      label: 'JsComponents',
      children: [
        {
          link: '/docs/toast',
          label: 'Toast 提示',
        },
        {
          link: '/docs/message',
          label: 'Message 消息',
        },
        {
          link: '/docs/popup',
          label: 'Popup 弹窗',
        },
      ]
    },
  ]
}
