const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scene:null,
    str:"123"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.scene) {
      app.globalData.scene = options.scene
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  bindRelation(fn){
    const { scene, openid } = app.globalData;
    // wx.showModal({
    //   title: 'bindRelation',
    //   content: `123 ${scene}`,
    // })
    if (!scene) {
      fn();
      return;
    }
    //如果有被邀请人，绑定他们之间的关系
    app.request({
      url:`/invite/saveInvite`,
      data:{
        inviter: scene,
        toInviter: openid
      },
      method:'post',
      success:res=> {
        fn()
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  getSettingAfter(r){
    const authSetting = r.authSetting;

    const boolean = authSetting["scope.userInfo"];

    if (boolean) {
      // 登录
      wx.login({
        // success: res => {
        //   this.login(res.code)
        //   // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // },
        complete:res=> {
          this.login(res.code)
        }
      })
    } else {
      wx.redirectTo({
        url: '/pages/visitor/visitor',
      })
    }
  },
  onShow() {
    wx.getSetting({
      // success: r => {
      //   this.getSettingAfter(r)
      // },
      complete:r=> {
        this.getSettingAfter(r)
      }
    })    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  wxGetUserinfo() {
    wx.getUserInfo({
      lang:'zh_CN',
      // withCredentials:true,
      complete: resInfo => {
        // 可以将 res 发送给后台解码出 unionId
        app.globalData.userInfo = resInfo.userInfo
        app.globalData.accontInfo = resInfo
        if (app.globalData.session_key) {
          app.request({
            url: `/wxUser/decrypt`,
            method: 'post',
            data: {
              "encryptedData": resInfo.encryptedData,
              "iv": resInfo.iv,
              "signature": resInfo.signature,
              "sessionKey": app.globalData.session_key
            },
            success: result => {}
          })
        }
        wx.switchTab({
          url: "/pages/index/index",
        })
      },
    })
  },
  login(code) {
    app.request({
      url: `/wxUser/login`,
      method: 'post',
      data: {
        appKey: "wxcf0e7e19c17ab2ab",
        code
      },
      success: res => {
        app.globalData.openid = res.datas.openId;
        app.globalData.unionId = res.datas.unionId;
        app.globalData.session_key = res.datas.sessionKey;
        this.bindRelation(()=> {
          this.wxGetUserinfo();
          app.getUserAccountInfo();
        });
      }
    })
  },
})