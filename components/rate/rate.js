// components/rate/rate.js
Component({
  externalClasses: [
    'rate-class'
  ],
  properties: {
    score: {
      type: Number,
      value: 0
    }
  },
  data: {
    starsArr: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.attached();
  },
  /** 
   * 绘制rate评分，5分制
  */
  attached: function() {
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
    const arrLength = 5 - a.length;
    for (let j = 0; j < arrLength; j++) {
      a.push('iconfont icon-star gray-color');
    }
    this.setData({
      starsArr: a
    })
  }
})
