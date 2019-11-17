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
    const { globalAuthed ,isIOS} = app.globalData;
    if (isIOS) {
      wx.navigateTo({
        url: '/pages/ios/ios',
      })
      return
    }
    if (!globalAuthed) {
      wx.redirectTo({
        url: '/pages/visitor/visitor',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/buy/buy',
    })
  },
  checkIsFree(){
    const { currentCommand } = app.globalData;
    app.request({
      url: `/course/getCourseIsBuy/${app.globalData.openid}/${currentCommand.id}`,
      success:res=> {
        let command = res.datas;

        //判定是否可试看/试听
        if (command.courseVos && command.courseVos.length) {
          const canBeFreeUse = command.courseVos.some(item => item.freeSecond);
          command.canBeFreeUse = canBeFreeUse;
        }
        //是否显示购买面板
        command.showBuyWrap = (command.isfree === 2 && command.isBuy===2);

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
            this.setData({ price:obj})
            command.price = obj;
            app.globalData.currentCommand = command;
          }
        }

        this.setData({ command })
      }
    })
  },
  play(e){
    const { item } = e.currentTarget.dataset;
    const {command} = this.data;

    //既没买也不可试用
    if (command.isBuy !== 1 && !item.freeSecond) return;

    //样式修改
    command.courseVos.map(el => {
      if (el.id === item.id){
        el.isPlaying = true
      }else{
        el.isPlaying = false
      }
    })
    this.setData({ command }, () => console.log(this.data.command));

    if (command.canBeFreeUse && command.isBuy!==1) {
      if (!item.freeSecond) return;
      //记录试看时间
      this.freeSecond = item.freeSecond;
    }
    if(item.type === 2) {
      //音频
      this.createAudio(item)
    }else {
      this.setData({
        videoUrl: item.url,
        name: item.name,
        author: '易脑永逸',
      })
    }
  },
  playEvt(e){
    if (!this.data.videoUrl) return
    const { command} = this.data;

    //未购买，可试用
    if (command.canBeFreeUse && command.isBuy!==1){
      wx.showToast({
        title: '当前处于试看模式',
        icon: 'none',
        duration: 2000
      })
      return
    }
    
    //不是次数购买
    if (command.buyType !== 1) return;
    // wx.showToast({
    //   title: '播放超过50%后将消耗次数',
    //   icon: 'none',
    //   duration: 3000
    // })
  },
  videoTime(e){
    const currentTime = e.detail.now || e.detail;
    const { command } = this.data;
    const freeDuration = e.detail.duration*0.5

    //试看模式
    if (this.freeSecond) {
      if (currentTime > this.freeSecond) {
        const str = command.type === 2 ? '试听' :"试看"
        wx.showToast({
          title: `${str}完毕`,
          icon: 'none',
          duration: 2000
        })

        const video = wx.createVideoContext('video',this)
        video.stop();
        video.exitFullScreen();

        const voice = this.selectComponent("#voice")
        if (voice) {
          voice.stop();
          this.setData({ audioInfo: null })
        }
        
        //表示已经试用过了
        this.setData({ isUsedFreeSecond:true})

        if (!this.freeSecond) return;
        this.onShow();
        this.freeSecond = null;
      }
      return;
    }

    if (command.buyType !== 1) return;
    if (currentTime > freeDuration && this.isAllow) {
      this.isAllow = false
      if (this.isTaged) return;
      app.request({
        url: `/course/updateCourse/${app.globalData.openid}/${command.orderId}`,
        success: res => {
          this.isTaged = true;//当前已经计入次数
          // wx.showToast({
          //   title: '已记入次数',
          //   icon: 'none',
          //   duration: 2000
          // })
        }
      })
    }
  },
  //点击试看按钮
  freeUse(e){
    const {command} = this.data;
    command.showBuyWrap = false;
    this.setData({ command});
  },
  createAudio(item){
    this.setData({
      audioInfo:{
        url: item.url,
        author:'易脑永逸',
        title:item.name,
        imgurl: item.imgUrl
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