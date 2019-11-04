// pages/My/editBasicInfo/editBasicInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    models:{
      phone: "",
      name:"",
      age:'',
      sex:"",
      sexStr:""
    },
    ranges:{
      sex:[
        {label:'男',value:1},
        { label: '女', value: 2 },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userAccountInfo = app.globalData.userAccountInfo;
    let { models } = this.data;
    models.phone = userAccountInfo.phone || ''
    models.name = userAccountInfo.name || ''
    models.age = userAccountInfo.age || 22
    models.sex = userAccountInfo.sex
    models.sexStr = userAccountInfo.sex == 1?'男':'女'
    this.setData({ models })
  },
  getphonenumber(e){
    console.log(e)
    const {detail} = e;
    app.request({
      url: `/wxUser/decrypt?type=getPhoneNumber`,
      method: 'post',
      data: {
        ...detail,
        "sessionKey": app.globalData.sessionKeyPhone
      },
      success: res => { 
        const {models} = this.data;
        this.setData({
          models:{
            ...models,
            phone: res.datas.phoneNumber
          }
        })  
      }
    })
  },
  submit(e){
    const { models} = this.data;
    const {value} = e.detail;
    for (const k in value) {
      const item = value[k];
      if (!item) {
        wx.showToast({
          title: '有信息没有填写！',
          icon:'none'
        })
        return
      }
    }
    app.request({
      url:`/user/updateUser`,
      method:'post',
      data: {
        ...models,
        ...value
      }
    })
  },
  pickerChange(e) {
    const { value } = e.detail;
    const { models, ranges} =  this.data;
    const sexStr = ranges.sex.find(item => (item.value * 1 - 1) == value).label
    models.sex = value * 1 + 1;
    models.sexStr = sexStr;
    this.setData({ models })
  },
  inputChange(e){
    const { label } = e.currentTarget.dataset;
    const { value } = e.detail; 
    let { models } = this.data;
    models[label] = value;
    this.setData({ models})
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