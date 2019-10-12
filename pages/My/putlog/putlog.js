// pages/My/putlog/putlog.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    status:[
      { str: '审核中', color:''},
      { str: '提现成功', color: '#488AE4' },
      { str: '提现失败', color: '#EB2E25' }
    ]
  },
  putdetail(e){
    const {item} = e.currentTarget.dataset;
    app.globalData.currentPutlog = item;
    wx.navigateTo({
      url: '/pages/My/putdetail/putdetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHistory();
  },
  //获取提现记录
  getHistory(){
    const { openid } = app.globalData;
    app.request({
      url: `/extract/getExtractHis/${openid}`,
      success:res=> {
        this.setData({ list: res.datas})
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
    //清空globalData中选中的currentPutlog
    app.globalData.currentPutlog = null
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