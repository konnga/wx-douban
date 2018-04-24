// components/rate/rate.js
Component({
  externalClasses: [
    'rate-class'
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    stars: {
      type: String,
      value: '00'
    },
    score: {
      type: String,
      value: 0
    },
    starType: {
      type: String,
      value: 'star light-color'
    }
  },

  /**
   * 组件的初始数据
   */
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
   * 绘制rate评分
  */
  attached: function() {
    let arr = [];
    const x = this.data.stars.slice(0, 1);
    const y = this.data.stars.slice(1);
    for (let i = 0; i < x; i++) {
      arr.push('iconfont icon-star light-color');
    }
    if (y !== "0") {
      arr.push('iconfont icon-star-half light-color');
    }
    const arrLength = 5 - arr.length;
    for (let j = 0; j < arrLength; j++) {
      arr.push('iconfont icon-star gray-color');
    }
    this.setData({
      starsArr: arr
    })
  }
})
