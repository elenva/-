// pages/healthIndex/healthIndex.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取成人中心和老年中心菜单
    this.getMenuList();
  },
  //获取成人中心和老年中心菜单
  getMenuList(){
    const { baseCourseList } = app.globalData;
    const arr = [];
    baseCourseList.map(item=>{
      if(item.name === '成人中心' || item.name === '老年中心'){
        arr.push(item);
      }
    })
    arr[0].active = true;
    this.setData({menu:arr})
  },
  //菜单切换
  menuChange(e){
    const item = e.detail;
    const {menu} = this.data;
    menu.map(item=> item.active=false);
    menu[item.idx].active = true;
    this.setData({menu});
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