// components/mediaType/mediaType.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    media: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    dictMap:{
      voice:{
        str: "音频", icon:"/images/index/icon_voice.png"
      },
      video: {
        str: "视频", icon: "/images/index/icon_video.png"
      },
      tw: {
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
