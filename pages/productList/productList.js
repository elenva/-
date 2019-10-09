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
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { recommendList } = app.globalData;
    //设置标题
    if (options.typeId){
      //根据类型获取列表
      this.getListByType(options.typeId);
    }else if(options.title) {
      //搜索获取列表
      if (options.title!=='推荐课程') {
        this.searchAjax(options.title);
      }else{
        this.setData({ list: recommendList })
      }
    }
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },
  pro(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  searchAjax(v) {
    const eventChannel = this.getOpenerEventChannel();
    app.request({
      url: `/course/searchCourseByKey?key=${v}`,
      success:res=>{
        eventChannel.emit('requestSuccess',v);
        this.setData({list:res.datas})
      }
    })
  },
  getListByType(type){
    app.request({
      url: `/course/getCourseByType/${type}/${app.globalData.openid}/${1}`,
      success: res => {
        console.log(res)
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