// pages/i&t/i&t.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title: "第一课 小学数学一年级入门",
        list: ["第一节 基础入门1", "第二节 基础入门2","第三节 基础入门3"]
      },
      {
        title: "第二课 小学数学一年级提升",
        list: ["第一节 提升篇1", "第二节 提升篇2", "第三节 提升篇3"]
      }
    ],
    showSelect:false
  },
  maskTap(e){
    this.setSelect();
  },
  setSelect(){
    const { showSelect } = this.data;
    this.setData({ showSelect: !showSelect})
  },
  chooseItem(e){
    console.log(e)
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