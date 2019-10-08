// components/searchBar/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取storage
    const _history = wx.getStorageSync('history');
    if(_history) this.setData({history:_history})
  },
  confirm(e){
    const value = e.detail
    this.search(value)
  },
  search(v){
    // if(!v) return;
    const {history} = this.data
    const idx = history.findIndex(item => item === v);
    if (idx !== -1) { 
      history.splice(idx, 1);
    }
    history.unshift(v);
    wx.setStorageSync('history', history)
    this.setData({ history })
    wx.navigateTo({
      url: `/pages/productList/productList?title=${v}`,
    })
  },
  close(e){
    const {index} = e.currentTarget.dataset;
    const {history} = this.data;
    history.splice(index,1);
    wx.setStorageSync('history', history)
    this.setData({history})
   },
  historyClick(e){
    const {key} = e.currentTarget.dataset;
    this.search(key);
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