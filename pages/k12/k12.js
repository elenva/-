// pages/k12/k12.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置k12列表
    this.setK12Menu();
  },
  setK12Menu(){
    const { baseCourseList } = app.globalData;
    const stuList = baseCourseList.find(item=>item.name==='学生中心').children;
    const k12List = stuList.find(item => item.name === "K12课程").children;
    k12List[0].active = true;
    this.getCourseByPid(k12List[0].id,res=> {
      k12List[0].list = res.datas;
      this.setData({ menu: k12List});
    })
    
  },
  //根据父级id获取子课程
  getCourseByPid(id,call){
    app.request({
      url: `/course/getCourseByPid/${id}?pid=${id}`,
      success:res=> {
        call && call(res);
      }
    })
  },
  //菜单切换
  menuChange(e){
    const { menu } = this.data;
    const item = e.detail;
    if(!item.list) {
      this.getCourseByPid(item.id,res=>{
        console.log(menu)
        return
        menu[item.idx].list = res.datas;
        this.setData({ menu })
      })
    }
    console.log(e)
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