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
      "/images/index/banner1.png", "/images/index/banner2.png", "/images/index/banner3.png",
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperItemTap(e){
      const {current} = e.currentTarget.dataset;
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: this.data.swiperArray // 需要预览的图片http链接列表
      })
    }
  }
})
