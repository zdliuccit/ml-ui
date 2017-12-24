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
          link: '/docs/button',
          label: 'Button 按钮',
        },
        {
          link: '/docs/radio',
          label: 'Radio 单选',
        },
        {
          link: '/docs/checkbox',
          label: 'Checkbox 多选',
        },
        {
          link: '/docs/slide',
          label: 'Slide 幻灯片',
        },
        {
          link: '/docs/tab',
          label: 'Tab 选项卡',
        },
        {
          link: '/docs/progress',
          label: 'Progress 进度条',
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
