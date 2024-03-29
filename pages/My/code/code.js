// pages/My/code/code.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.openid === 1) {
      wx.reLaunch({
        url: `/pages/loading/loading?scene=${options.oid}`,
      })
      return
    }
    this.getImgCode()
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
  },
  getImgCode(){
    
    app.request({
      url: `/user/getQrcode/${app.globalData.openid}`,
      success:res=> {
        console.log(res)
        this.setData({
          code:res.datas
        })
      }
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
    // wx.reLaunch({
    //   url: '/pages/loading/loading',
    // })
  }
})