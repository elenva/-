// components/voice/voice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:Object,
      value:{
        author:'虞美家',
        url:"",
        title:''
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTime:0,
    playing:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play(){
      const { audio } = this.data;
      audio.play();
    },
    pause(){
      const { audio } = this.data;
      audio.pause();
    }
  },
  ready(){
    const audio = wx.getBackgroundAudioManager();
    this.setData({
      audio
    })
    setInterval(()=>{
      wx.getBackgroundAudioPlayerState({
        success:res=>{
          const now = res.currentPosition;
          this.triggerEvent('currentTime', now)
          this.setData({ audioObj:{
            ...res,
            percent: (res.currentPosition / res.duration*100) + '%'
          }})
        }
      })
    },500)
  },
  observers:{
    'info':function(newV) {
      const { audio } = this.data;
      if (newV && newV.url) {
        if (audio.src === newV.url) return;
        audio.src = newV.url;
        audio.title = newV.title || '未知标题';
      }
    }
  }
})
