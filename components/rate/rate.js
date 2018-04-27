// components/rate/rate.js
Component({
  externalClasses: [
    'rate-class'
  ],
  properties: {
    score: {
      type: Number,
      value: -1,
      observer: function (newVal, oldVal) {
        this.setStart(newVal, oldVal);
      }
    }
  },
  data: {
    starsArr: []
  },
  methods: {
    setStart (newVal, oldVal) {
      /** 
       * 监听属性变化
       * 绘制rate评分，5分制
      */
      let arr = [];
      const list = newVal.toString().split(".");
      let digit = Math.floor(parseInt(list[0]) / 2);
      let fraction = list[1] ? Math.floor(parseInt(list[1])) : 0;
      for (let i = 0; i < digit; i++) {
        arr.push('iconfont icon-star light-color');
      }
      if (fraction && fraction !== 0) {
        arr.push('iconfont icon-star-half light-color');
      }
      const len = 5 - arr.length;
      for (let j = 0; j < len; j++) {
        arr.push('iconfont icon-star gray-color');
      }
      if (arr.length === 0) {
        for (let s = 0; s < 5; s++) {
          arr.push('iconfont icon-star gray-color');
        }
      }
      this.setData({
        starsArr: arr
      })
    }
  }
})
