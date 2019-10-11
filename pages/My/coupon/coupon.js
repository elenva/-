// pages/My/coupon.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    tab:[
      "可用优惠券",
      "不可用优惠券"
    ],
    isBuy:false,
    currentTabIndex:0
  },
  setCurrentTab(e){
    const currentTabIndex = e.currentTarget.dataset.index;
    this.setData({ currentTabIndex }, () => this.setList());
  },
  notuse(){
    app.globalData.currentCoupon = null;
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { userAccountInfo } = app.globalData;
    this.setData({ userAccountInfo, isBuy: options.isBuy})
    this.setList()
  },
  setList(){
    const { couponUserVoList } = this.data.userAccountInfo;
    const { currentTabIndex, isBuy } = this.data;
    const list = [];
    couponUserVoList.map(item => {
      if (!currentTabIndex && item.status === 1 ) {
        //可用状态下
        list.push(item);
      } else if (currentTabIndex && item.status !== 1){
        list.push(item);
      }
    })
    this.setData({list});
  },
  //获取点击的优惠券信息
  getCoupon(e){
    const {isBuy} = this.data;
    const {item} = e.currentTarget.dataset;
    if (!isBuy) return;
    if (isBuy >= item.keyword1) {
      app.globalData.currentCoupon = item;
      wx.navigateBack()
    }else{
      wx.showToast({
        title: '此优惠券金额过大！',
        icon:"none"
      })
    }
    
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