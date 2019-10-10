// pages/video/video.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    command:null,
  },
  setActive(e){
    const value = e.detail;
    const { idx } = e.currentTarget.dataset;
    const { list} = this.data;
    list.map(item => item.isActive =false);
    list[idx].isActive = value;

    this.setData({ list})
  },
  buy(){
    wx.navigateTo({
      url: '/pages/buy/buy',
    })
  },
  checkIsFree(){
    const { currentCommand } = app.globalData;
    app.request({
      url: `/course/getCourseIsBuy/${app.globalData.openid}/${currentCommand.id}`,
      success:res=> {
        console.log(res)
        const command = res.datas;
        this.setData({ command })
        if (command.isBuy === 2) {
          if (command.buyTypeList){
            const obj = {unit:'',long:''};
            command.buyTypeList.map(item => {
              if (item.buyType == 1) {
                //按次数购买
                const str = `${item.money}元/${item.num === 1?'':item.num}次`
                obj.unit = str;
              } else if (item.buyType == 2 ){
                //按时长购买
                const str = `${item.money}元/${item.num === 1 ? '' : item.num}天`
                obj.long = str;
              }
            })
            this.setData({price:obj})
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取课程都基本信息
    this.checkIsFree();
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