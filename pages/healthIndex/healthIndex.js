// pages/healthIndex/healthIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {
        name:"成年中心",
        list:[
          { src: '/images/healthIndex/yajiankang.png', name:"亚健康音乐疗法"},
          { src: '/images/healthIndex/qingzijiaoyu.png', name: "亲子教育" },
          { src: '/images/healthIndex/yiyulei.png', name: "抑郁类" },
          { src: '/images/healthIndex/shimianlei.png', name: "失眠类" },
        ],
        active:true
      },
      {
        name: "老年中心",
        list: [
          { src: '/images/healthIndex/shimianlei.png', name: "失眠类" },
          { src: '/images/healthIndex/shimianlei.png', name: "失眠类" },
          { src: '/images/healthIndex/shimianlei.png', name: "失眠类" },
          { src: '/images/healthIndex/shimianlei.png', name: "失眠类" },
        ],
        active: false
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        this.setData({
          screenHei: res.windowHeight
        })
      },
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})