// pages/loading/loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArray:[
      "banner@2x", "banner@2x", "banner@2x", "banner@2x", "banner@2x",
    ],
    menuList:[
      { text: '学生中心', src: "/images/index/icon_student.png", page: "/pages/stuIndex/stuIndex" },
      { text: '成人中心', src: "/images/index/icon_man.png", page: "/pages/healthIndex/healthIndex" },
      { text: '老年中心', src: "/images/index/icon_old_man.png", page: "/pages/healthIndex/healthIndex"},
      { text: '全部', src: "/images/index/icon_all.png", page: "/pages/productList/productList" , newPage:true}
    ],
    list:[
      {title: '2019精选-成人商务英语从入门到精通', src: "/images/index/ad1.png" },
      {title: '大学水平直达CATTI二级（笔译+口译）| 随到随学，专家级指导...', src: "/images/index/ad2.png" },
      {title: '2021李永乐考研数学全程班数学一/三基础+强化+真题+冲刺', src: "/images/index/ad3.png" },
      { title: '2019精选-成人商务英语从入门到精通', src: "/images/index/ad1.png" },
      { title: '大学水平直达CATTI二级（笔译+口译）| 随到随学，专家级指导...', src: "/images/index/ad2.png" },
      { title: '2021李永乐考研数学全程班数学一/三基础+强化+真题+冲刺', src: "/images/index/ad3.png" },
      { title: '2019精选-成人商务英语从入门到精通', src: "/images/index/ad1.png" },
      { title: '大学水平直达CATTI二级（笔译+口译）| 随到随学，专家级指导...', src: "/images/index/ad2.png" },
      { title: '2021李永乐考研数学全程班数学一/三基础+强化+真题+冲刺', src: "/images/index/ad3.png" },
    ]
  },
  navgationto(e){
    const { item } = e.currentTarget.dataset;
    if (item.newPage) {
      wx.navigateTo({
        url: item.page,
      })
      return
    }
    wx.switchTab({
      url: item.page,
    })
  },
  navgation(){
    wx.navigateTo({
      url: `/pages/productList/productList?title=推荐课程`,
    })
  },
  detail(){
    wx.navigateTo({
      url: '/pages/video/video',
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