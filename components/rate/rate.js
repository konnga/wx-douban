// components/rate/rate.js
Component({
  externalClasses: [
    'rate-class'
  ],
  properties: {
    score: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        /** 
         * 监听属性变化
         * 绘制rate评分，5分制
        */
        let a = [];
        const list = this.data.score.toString().split(".");
        let digit = Math.floor(parseInt(list[0]) / 2);
        let fraction = list[1] ? Math.floor(parseInt(list[1])) : 0;
        for (let i = 0; i < digit; i++) {
          a.push('iconfont icon-star light-color');
        }
        if (fraction && fraction !== 0) {
          a.push('iconfont icon-star-half light-color');
        }
        for (let j = 0; j < 5 - a.length; j++) {
          a.push('iconfont icon-star gray-color');
        }
        this.setData({
          starsArr: a
        })
      }
    }
  },
  data: {
    starsArr: []
  }
})
