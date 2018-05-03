Component({
  externalClasses: [
    'loading-class'
  ],
  properties: {
    load: {
      type: Boolean,
      value: true
    },
    loadText: {
      type: String,
      value: 'Loading...'
    }
  }
})
