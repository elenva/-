// pages/stuIndex/stuIndex.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {src:"/images/stuIndex/icon_k12.png",name:"K12课程"},
      { src: "/images/stuIndex/icon_zhili.png", name: "智力课程" },
      { src: "/images/stuIndex/iconnaoli.png", name: "脑力课程" },
      { src: "/images/stuIndex/icon_yanli.png", name: "视力保护" },
      { src: "/images/stuIndex/icon_qita.png", name: "其他" }
    ],
    baseCourseList: app.globalData.baseCourseList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置渲染课程分类
    this.setCourseList();
  },
  //设置渲染课程分类
  setCourseList(){
    const { baseCourseList } = app.globalData;
    const menu = baseCourseList.find(item => item.name === "学生中心");
    this.setData({ menu });
  },
  navigation(e){
    const { item } = e.currentTarget.dataset;
    if (item.name === "K12课程"){
      wx.navigateTo({
        url: '/pages/k12/k12',
      })
    }else{
      wx.navigateTo({
        url: `/pages/productList/productList?typeId=${item.id}&title=${item.name}`,
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