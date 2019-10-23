//app.js
App({
  onLaunch: function (options) {
    console.log(options)
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // 获取用户信息
    
  },
  globalData: {
    scale:1,//积分兑换金额的比例 1积分*scale = 金额
    userInfo: null,//用户基本信息
    accontInfo:null,//通过wx.getuserinfo拿到的信息包含userinfo
    userAccountInfo:null,//用户账户信息
    openid:1,
    unionId:null,
    session_key:null,
    recommendList:[],//推荐课程列表
    baseCourseList:[],//课程分类列表
    currentCommand:null,//当前打开的课程
    currentCoupon:null,//当前选中的优惠券
    currentPutlog:null,//当前点击的提现记录
  },
  request(obj){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.request({
      ...obj,
      url: "http://shop.miaomuxia.com:81" + obj.url,
      // url: "http://gj26975614.wicp.vip" + obj.url,
      success:res=>{
        if(res.data.success){
          obj.success(res.data);
        }else{
          wx.showToast({
            title: res.data.msg || res.data.datas ||'未知错误',
            icon:"none"
          })
        }
      },
      complete:res=>{
        wx.hideLoading();
      }
    }) 
  },
  getUserAccountInfo() {
    this.request({
      url: `/user/getUserByOpenId/${this.globalData.openid}`,
      success: res => {
        this.globalData.userAccountInfo = res.datas;
      }
    })
  }
})