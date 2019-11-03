// pages/i&t/i&t.js
const  app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    showSelect:false,
    command:null,//当前课程
    title:"",
    url:'',//当前浏览课程的链接
  },
  maskTap(e){
    this.setSelect();
  },
  setSelect(){
    const { showSelect } = this.data;
    this.setData({ showSelect: !showSelect})
  },
  chooseItem(e){
    const {item} = e.currentTarget.dataset;
    const { url,list } = this.data;
    if(url === item.url) return;
    list.map(el => el.isActive = false)
    const tarObj = list.find(el => el.id === item.id);
    tarObj.isActive = true
    this.setData({ title: item.name, url: item.url, list})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkCommand();
  },
  checkCommand(){
    const { currentCommand } = app.globalData;
    app.request({
      url: `/course/getCourseIsBuy/${app.globalData.openid}/${currentCommand.id}`,
      success:res => {
        if(res.success) {
          let command = res.datas

          command.courseVos[0].isActive = true
          //是否显示购买面板
          command.showBuyWrap = (command.isfree === 2 && command.isBuy === 2);

          if (command.isBuy === 2) {
            if (command.buyTypeList) {
              const obj = { unit: '', long: '' };
              command.buyTypeList.map(item => {
                if (item.buyType == 1) {
                  //按次数购买
                  const str = `${item.money}元/${item.num === 1 ? '' : item.num}次`
                  obj.unit = str;
                } else if (item.buyType == 2) {
                  //按时长购买
                  const str = `${item.money}元/${item.num === 1 ? '' : item.num}天`
                  obj.long = str;
                }
              })
              this.setData({ price: obj })
              command.price = obj;
              app.globalData.currentCommand = command;
            }
          }

          this.setData({ command, list: res.datas.courseVos})
          if (command.isBuy === 1){
            if (res.datas.courseVos.length) {
              this.setData({
                title: res.datas.courseVos[0].name,
                url: res.datas.courseVos[0].url,
              })
            }
          }
        }
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