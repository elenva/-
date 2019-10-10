// components/mediaType/mediaType.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    media: String,
    short:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    dictMap:{
      2:{
        str: "音频", icon:"/images/index/icon_voice.png"
      },
      1: {
        str: "视频", icon: "/images/index/icon_video.png"
      },
      3: {
        str: "图文", icon: "/images/index/icon_pic.png"
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
