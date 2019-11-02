// pages/My/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:1,
    list:[],
    reportList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  //获取个人报告
  getReport(){
    // // app.globalData.openid
    // const oid = "ols5H42Vvpfo1XOEvz-mZVvHNF7s"
    const oid = app.globalData.openid
    app.request({
      url: `/report/getReportByOpenId/${oid}`,
      success:res=> {
        this.setData({ reportList:res.datas})
      }
    })
  },
  switchTab(e){
    const { flag } = e.currentTarget.dataset;
    this.setData({flag})
  },
  curriculumOne(e){
    const { item } = e.currentTarget.dataset;
    app.globalData.currentCommand = { id: item.courseId};
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  //查看报告详情
  reportDetail(e){
    const {item} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/My/reportDetail/reportDetail',
      success:res => {
        const { eventChannel } = res;
        eventChannel.emit(`reportDetail`,item)
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
    //获取已购买课程
    this.getCommandsList();
    //获取个人报告
    this.getReport();
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