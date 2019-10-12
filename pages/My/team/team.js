// pages/My/team/team.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null,
    list:[
      {src:"/images/team/pic2.png",name:"张三四"},
      { src: "/images/team/pic3.png", name: "张三四" },
      { src: "/images/team/pic4.png", name: "张三四" },
      { src: "/images/team/pic5.png", name: "张三四" },
      { src: "/images/team/pic6.png", name: "张三四" }
    ],
    userAccountInfo:null
  },
  //申请提现
  put(){
    wx.navigateTo({
      url: "/pages/My/put/put",
    })
  },
  code(){
    wx.navigateTo({
      url: '/pages/My/code/code',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user:app.globalData.userInfo,
      userAccountInfo: app.globalData.userAccountInfo
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