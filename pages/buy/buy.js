// pages/buy/buy.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickermodel:0,
    pickerData: [{
      label: '按次收费',
      value:'unit'
    }, {
      label: '按时长收费',
      value:'long'
    }],
    currentCommand:null,
    unit:1,//自定义天数或者次数
    score:0,//抵扣积分
    priceBefore:0,//抵扣前总价
    priceAfter:0,//抵扣后应付价格
    userAccountInfo: null,
    scale:0,//全局积分兑换金额比例
    couponsCanUse:0,//可使用的优惠券数量
    currentCoupon:null,//当前选中的优惠券
    dkPrice:0,//总抵扣金额

  },
  pickerChange(e){
    const v = e.detail.value;
    this.setData({ pickermodel: v * 1, currentCoupon:null }, () => this.calcPrice())
  },
  //计算优惠或者积分抵扣以前的价格
  calcPrice(){
    const { buyTypeList } = app.globalData.currentCommand;
    const { pickermodel, pickerData, unit} = this.data;
    //获取单价
    const priceObj = buyTypeList.find(item => item.buyType == pickermodel+1);
    const unitPrice = priceObj.money;
    //抵扣前总价
    const priceBefore = unitPrice * unit;
    this.setData({ priceBefore }, () => this.cacalAfterPrice())
  },
  //计算优惠后的价格
  cacalAfterPrice(){
    // priceAfter
    const { priceBefore, score, currentCoupon,scale } = this.data;
    //获取积分抵扣金额
    const scorePrice = score * scale;
    //获取优惠券金额
    const couponPrice = currentCoupon?currentCoupon.keyword1:0;
    //获取总抵扣金额
    const dkPrice = couponPrice + scorePrice;
    //获取最终价格
    const price = priceBefore - dkPrice;
    this.setData({
      dkPrice, priceAfter: price
    })
  },
  //获取自定义天数或者次数
  getUnit(e){
    this.setData({
      unit: e.detail
    },()=> {
      this.calcPrice();
    })
  },
  //获取自定义积分
  getScore(e){
    this.setData({
      score: e.detail
    }, () => this.cacalAfterPrice())
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //清除全局优惠券
    app.globalData.currentCoupon = null
    //获取可用的优惠券
    const coupons = [];
    app.globalData.userAccountInfo.couponUserVoList.map(item=> {
      if (item.status === 1) coupons.push(item);
    })
    this.setData({
      userAccountInfo: app.globalData.userAccountInfo,
      scale: app.globalData.scale,
      couponsCanUse: coupons.length
    })

    //获取信息
    this.getAllInfo();
  },
  getAllInfo(){
    const { currentCommand } = app.globalData;
    this.setData({ currentCommand},()=> {
      this.calcPrice();
    })
  },
  // result(){
  //   wx.navigateTo({
  //     url: '/pages/result/result',
  //     success:res=> {
  //       console.log(res)
  //       const evt = res.eventChannel;
  //       const { score } = this.data;
  //       evt.emit('result', score)
  //     }
  //   })
  // },
  //跳转至优惠券页面
  coupon(){
    const { couponsCanUse, priceAfter } = this.data;
    if (!couponsCanUse) return;
    wx.navigateTo({
      url: `/pages/My/coupon/coupon?isBuy=${priceAfter}`,
    })
  },
  //开始购买
  buy(){
    const data = this.data;
    const params = {
      buyType: data.pickermodel + 1,
      couponId: data.currentCoupon ? data.currentCoupon.couponId:'',
      couponType: data.currentCoupon ? data.currentCoupon.type : '',
      courseId: data.currentCommand.id,
      courseNum: data.unit,
      integration:data.score,
      openId:app.globalData.openid,
      totalNum:data.priceBefore,
      num:data.priceAfter
    }

    app.request({
      url:`/buy/v1/create`,
      method:'post',
      data: params,
      success:res=> {
        wx.navigateTo({
          url: '/pages/result/result',
          success: res => {
            const evt = res.eventChannel;
            const { priceAfter } = this.data;
            evt.emit('result', priceAfter)
          }
        })
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
    const { currentCoupon } = app.globalData;
    this.setData({ currentCoupon }, () => this.cacalAfterPrice())

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