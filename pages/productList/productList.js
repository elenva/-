// pages/productList/productList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    key:''
  },
  sort(e){
    this.getListByType(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { recommendList } = app.globalData;
    
    if (options.title) {
      if (options.title === '推荐课程'){
        this.setData({ list: recommendList, title: options.title })
      }else if (options.title === '全部课程'){
        this.setData({ title: "" }, () => this.getListByType())
      }else {
        this.setData({ key: options.title || '', typeId: options.typeId || '' }, () => this.getListByType())
      }
    }
    //设置标题
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },
  pro(e){
    const {item} = e.currentTarget.dataset;
    app.globalData.currentCommand = item;

    if (item.type === 3) {
      wx.navigateTo({
        url: '/pages/itw/itw',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },

  getListByType(data){
    const oid = app.globalData.openid
    const { key='', typeId=''} = this.data;
    let params = {key,typeId,page:1}
    if (data) params = { ...params,...data}
    app.request({
      url: `/course/getCourseByTypeOrKey/${oid}`,
      data: params,
      success: res => {
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.emit('requestSuccess', key);
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