// pages/loading/loading.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArray:[
      "banner@2x", "banner@2x", "banner@2x", "banner@2x", "banner@2navgationtox",
    ],
    menuList:[
      { text: '学生中心', src: "/images/index/icon_student.png", page: "/pages/stuIndex/stuIndex" },
      { text: '成人中心', src: "/images/index/icon_man.png", page: "/pages/healthIndex/healthIndex",idx:"0" },
      { text: '老年中心', src: "/images/index/icon_old_man.png", page: "/pages/healthIndex/healthIndex",idx:"1"},
      { text: '全部', src: "/images/index/icon_all.png", page: "/pages/productList/productList?title=全部课程" , newPage:true}
    ],
    list:[]
  },
  navgationto(e){
    const { item } = e.currentTarget.dataset;
    console.log(item)
    //globalData中记录健康中心的active值
    if (item.idx) app.globalData.healthCenterIdx = item.idx;

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
  detail(e){
    const {item} = e.currentTarget.dataset;
    app.globalData.currentCommand = item;
    if(item.type === 3) {
      wx.navigateTo({
        url: '/pages/itw/itw',
      })
      return
    }
    wx.navigateTo({
      url: `/pages/video/video`,
    })
  },
  //获取推荐课程
  getRecommend(){
    app.request({
      url: `/course/getRecommend`,
      success:res=>{
        this.setData({ list: res.datas})
        app.globalData.recommendList = res.datas;
      }
    })
  },
  //获取课程分类
  getBaseCourse(){
    app.request({
      url: `/course/getBaseCourse`,
      success:res=>{
        app.globalData.baseCourseList = res.datas
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取推荐
    this.getRecommend();
    //获取课程分类
    this.getBaseCourse();
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