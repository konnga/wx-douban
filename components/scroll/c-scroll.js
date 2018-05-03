Component({
  options: {
    multipleSlots: true
  },
  externalClasses: [
    'scroll-class'
  ],
  properties: {
    boxTitle: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: []
    },
    moreLink: {
      type: String,
      valude: '/pages/list/list?id=1'
    }
  }
})
