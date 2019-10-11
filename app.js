//app.js
App({
  onLaunch: function () {
    this.getUserInfo();
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              wx.switchTab({
                url: "/pages/index/index",
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              // if (this.userInfoReadyCallback) {
              //   this.userInfoReadyCallback(res)
              // }
            },
          })
        }else{
          //授权信息
          wx.authorize({
            scope: 'scope.userInfo',
          })
        }
      }
    })
  },
  globalData: {
    scale:1,//积分兑换金额的比例 1积分*scale = 金额
    userInfo: null,//用户基本信息
    userAccountInfo:null,//用户账户信息
    openid:1,
    recommendList:[],//推荐课程列表
    baseCourseList:[],//课程分类列表
    currentCommand:null,//当前打开的课程
    currentCoupon:null,//当前选中的优惠券
  },
  getUserInfo(){
    this.request({
      url: `/user/getUserByOpenId/${this.globalData.openid}`,
      success:res=> {
        this.globalData.userAccountInfo = res.datas;
        console.log(res.datas)
      }
    })
  },
  request(obj){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.request({
      ...obj,
      // url: "http://shop.miaomuxia.com:81" + obj.url,
      url: "http://gj26975614.wicp.vip" + obj.url,
      success:res=>{
        if(res.data.success){
          obj.success(res.data);
        }else{
          wx.showToast({
            title: res.data.msg,
            icon:"none"
          })
        }
      },
      complete:res=>{
        wx.hideLoading();
      }
    }) 
  }
})