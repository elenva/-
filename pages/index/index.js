// pages/loading/loading.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArray:[
      "banner@2x", "banner@2x", "banner@2x", "banner@2x", "banner@2x",
    ],
    menuList:[
      { text: '学生中心', src: "/images/index/icon_student.png", page: "/pages/stuIndex/stuIndex" },
      { text: '成人中心', src: "/images/index/icon_man.png", page: "/pages/healthIndex/healthIndex" },
      { text: '老年中心', src: "/images/index/icon_old_man.png", page: "/pages/healthIndex/healthIndex"},
      { text: '全部', src: "/images/index/icon_all.png", page: "/pages/productList/productList" , newPage:true}
    ],
    list:[]
  },
  navgationto(e){
    const { item } = e.currentTarget.dataset;
    if (item.newPage) {
      wx.navigateTo({
        url: item.page,
      })
      return
    }
    wx.switchTab({
      url: item.page,
    })
  },
  navgation(){
    wx.navigateTo({
      url: `/pages/productList/productList?title=推荐课程`,
    })
  },
  detail(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  //获取推荐课程
  getRecommend(){
    app.request({
      url: `/course/getRecommend`,
      success:res=>{
        this.setData({ list: res.datas})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取推荐
    this.getRecommend();
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