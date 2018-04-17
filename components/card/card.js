// components/card/card.js
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: [
    'card-class'
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    linkUrl: {
      type: String,
      value: ''
    },
    imgUrl: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
