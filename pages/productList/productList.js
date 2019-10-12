// pages/productList/productList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  sort(e){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { recommendList } = app.globalData;
    
    if (options.title && options.title === '推荐课程') {
      this.setData({ list: recommendList })
    }else {
      this.setData({ key: options.title || '', typeId: options.typeId||''})
    }
    //设置标题
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },
  pro(e){
    const {item} = e.currentTarget.dataset;
    console.log(item)
    // wx.navigateTo({
    //   url: '/pages/video/video',
    // })
  },

  getListByType(data){
    const oid = app.globalData.openid
    const { key, typeId} = this.data;
    let params = {key,typeId}
    if (data) params = { ...params,...data}
    app.request({
      url: `/course/getCourseByTypeOrKey/${oid}`,
      data: params,
      success: res => {
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.emit('requestSuccess', v);
        this.setData({ list: res.datas })
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