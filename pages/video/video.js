// pages/video/video.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl:"",
    command:null,
    audioInfo:null,//音频对象
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
            command.price = obj;
            app.globalData.currentCommand = command;
          }
        }
      }
    })
  },
  play(e){
    const { item } = e.currentTarget.dataset;
    console.log(item)
    if(item.type === 2) {
      //音频
      this.createAudio(item)
    }else {
      this.setData({
        videoUrl: item.url,
        name: item.name,
        author: '虞美家课堂'
      })
    }
  },
  playEvt(e){
    if (!this.data.videoUrl) return
    const { command} = this.data;
    if (command.buyType !== 1) return;
    wx.showToast({
      title: '播放超过15秒后将消耗次数',
      icon: 'none',
      duration: 3000
    })
  },
  videoTime(e){
    const currentTime = e.detail.currentTime || e.detail;
    console.log(currentTime)
    const { command } = this.data;
    if (command.buyType !== 1) return;
    if (currentTime > 15 && this.isAllow) {
      this.isAllow = false
      app.request({
        url: `/course/updateCourse/${app.globalData.openid}/${command.orderId}`,
        success: res => {
          wx.showToast({
            title: '已记入次数',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },
  binderror(e){
    console.log(e)
  },
  createAudio(item){
    // const audio = wx.createInnerAudioContext()
    // audio.onTimeUpdate(res => {
    //   console.log(res)
    // })
    // audio.src = url;
    // audio.play();
    this.setData({
      audioInfo:{
        url: item.url,
        author:'虞美家',
        title:item.name
      }
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    //获取课程都基本信息
    this.checkIsFree();
    this.isAllow = true
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