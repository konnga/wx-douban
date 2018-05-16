Component({
  options: {
    multipleSlots: true
  },
  externalClasses: [
    'card-class'
  ],
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
  }
})
