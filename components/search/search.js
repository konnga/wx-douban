Component({
  options: {
    multipleSlots: true
  },
  externalClasses: [
    'search-class'
  ],
  properties: {
    initValue: {
      type: String,
      value: ''
    }
  },
  methods: {
    bindSearch (event) {
      this.triggerEvent('search', event.detail.value)
    },
    bindInput (event) {
      this.triggerEvent('input', event.detail.value)
    }
  }
})
