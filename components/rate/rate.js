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

    // let arr = [];
    // const x = this.data.stars.slice(0, 1);
    // const y = this.data.stars.slice(1);
    // for (let i = 0; i < x; i++) {
    //   arr.push('iconfont icon-star light-color');
    // }
    // if (y && y !== "0") {
    //   arr.push('iconfont icon-star-half light-color');
    // }
    // const arrLength = 5 - arr.length;
    // for (let j = 0; j < arrLength; j++) {
    //   arr.push('iconfont icon-star gray-color');
    // }
    this.setData({
      starsArr: a
    })
  }
})
