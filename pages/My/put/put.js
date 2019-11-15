// pages/My/put/put.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    puting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //字符串中有多少个匹配字符
  numInStr(str,k){
    let num = 0;
    str.split('').map(item => {
      if (item === k) num++
    })
    return num;
  },
  //表单submit事件
  submit(e){
    const { extractIntegration } = app.globalData.userAccountInfo;
    const { scale } = app.globalData;
    const {value} = e.detail;
    //可提现金额
    const cash = extractIntegration * scale;

    for(const k in value){
      const item = value[k];
      if (item === '' && k !=='remark') {
        wx.showToast({
          title: '请输入正确的信息',
          icon:'none'
        })
        return;
      }
      if (k === 'extractNum'){
        const res = this.numInStr(item,'.')
        if (res>1) {
          wx.showToast({
            title: '请输入正确的信息',
            icon: 'none'
          })
          return;
        }
        if (item * 1 > cash){
          wx.showToast({
            title: '提现金额过大',
            icon: 'none'
          })
          return;
        }
      }
    }
    value.openId = app.globalData.openid;
    value.extractIntegration = value.extractNum / scale
    //调用提现接口
    app.request({
      url:`/extract/saveExtract`,
      method:'post',
      data: value,
      success:res=> {
        app.getUserAccountInfo();
        const {scale} = app.globalData;
        this.setData({ 
          puting: true, cash: value.extractNum})
      }
    })
  },
  puting(){
    this.setData({ puting:true})
  },
  putlog(){
    wx.navigateTo({
      url: "/pages/My/putlog/putlog",
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