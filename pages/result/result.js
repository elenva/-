// pages/result/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId:null,
    info:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserAccountInfo();

    const evt = this.getOpenerEventChannel();
    evt.on(`orderId`,res=> {
      this.setData({ orderId: res},()=> {
        app.request({
          url: `/buy/getOrderByOrderId/${res}`,
          success:res=> {
            this.setData({ info:res.datas})
          }
        })
      })
    })
  },
  //查看课程
  queClass(){
    wx.navigateBack({
      delta:2
    })
  },
  //查看已购
  isBuy(){
    wx.navigateTo({
      url: '/pages/My/order/order',
    })
  },
  //查看积分
  integer(){
    wx.navigateTo({
      url: '/pages/My/score/score',
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