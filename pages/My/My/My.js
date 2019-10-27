// pages/My/My.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: app.globalData.userInfo,
    listItems:[
      { name: "我的团队", src: "/images/my/icon_myteam.png", url: "/pages/My/team/team"},
      { name: "我的邀请码", src: "/images/my/icon_invitation_code.png", url: "/pages/My/code/code" },
      { name: "售后帮助", src: "/images/my/icon_service.png" },
      { name: "在线客服", src: "/images/my/icon_customer_service.png" },
    ]
  },
  coupon(){
    wx.navigateTo({
      url: "/pages/My/coupon/coupon",
    })
  },
  score(){
    wx.navigateTo({
      url: "/pages/My/score/score",
    })
  },
  order(){
    wx.navigateTo({
      url: "/pages/My/order/order",
    })
  },
  navigation(e){
    const { item } = e.currentTarget.dataset;
    wx.navigateTo({
      url: item.url,
    })
  },
  editBasicInfo(){
    wx.navigateTo({
      url: '/pages/My/editBasicInfo/editBasicInfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.setData({ user: app.globalData.userInfo, userAccountInfo: app.globalData.userAccountInfo })
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