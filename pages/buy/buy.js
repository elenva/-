// pages/buy/buy.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickermodel:0,
    // pickerData: [
    //   { name: '按次收费', value: 0, checked:true },
    //   { name: '按时长收费', value: 1}
    // ],
    pickerData: ['按次收费', '按时长收费']
  },
  pickerChange(e){
    const v = e.detail.value;
    this.setData({ pickermodel:v})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取信息
    this.getAllInfo();
  },
  getAllInfo(){
    const { currentCommand } = app.globalData;
    app.request({
      url: `/extract/getCourseBuyData/${app.globalData.openid}/{currentCommand.id}`,
      method: "post",
      success: res => {
      }
    })
  },
  result(){
    wx.navigateTo({
      url: '/pages/result/result',
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