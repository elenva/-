// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperArray: [
      "banner@2x", "banner@2x", "banner@2x", "banner@2x", "banner@2navgationtox",
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperItemTap(){
      wx.navigateTo({
        url: "/pages/swiperDetail/swiperDetail",
      })
    }
  }
})
