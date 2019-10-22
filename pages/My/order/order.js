// pages/My/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:1,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取已购买课程
    this.getCommandsList();
  },
  //获取已购买课程
  getCommandsList(){
    app.request({
      url:`/course/getCoursePlayHis/${app.globalData.openid}`,
      success:res=> {
        this.setData({list:res.datas})
      }
    })
  },
  switchTab(e){
    const { flag } = e.currentTarget.dataset;
    this.setData({flag})
  },
  curriculumOne(){
    wx.navigateTo({
      url: '/pages/video/video',
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