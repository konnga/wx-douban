// components/scroll/scroll.js
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: [
    'scroll-class'
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready: function () {
  },
  /**
   * 组件的方法列表
   */
  methods: {
  }
})
