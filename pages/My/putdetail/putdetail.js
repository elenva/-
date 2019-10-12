// pages/My/putdetail/putdetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPutlog:null,
    status: [
      { str: '审核中', color: '' },
      { str: '提现成功', color: '#488AE4' },
      { str: '提现失败', color: '#EB2E25' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { currentPutlog } = app.globalData;
    this.setData({ currentPutlog})
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