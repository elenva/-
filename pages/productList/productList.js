// pages/productList/productList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:new Array(20)
  },
  sort(e){
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置标题
    if(options.title) {
      wx.setNavigationBarTitle({
        title: options.title,
      })
    }
    //搜索获取列表
    this.searchAjax(options.title);
  },
  pro(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  searchAjax(v) {
    app.request({
      url: `/course/searchCourseByKey?key=${v}`,
      success:res=>{
        console.log(res)
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

  }
})