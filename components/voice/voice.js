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
    console.log(audio)
    this.setData({ audio},()=> {
      //缓冲
      audio.onWaiting(()=> clearInterval(this.timer));
      //暂停
      audio.onPause(res => {
        this.setData({ playing: false }, () => clearInterval(this.timer))
      })
      //播放
      audio.onPlay(res => {
        this.timer = setInterval(res => {
          const { currentTime } = this.data;
          this.setData({ currentTime: currentTime + 1, playing: true })
        }, 1000)
      })
      //播放完毕
      audio.onEnded(res => {
        this.setData({ playing: false }, () => clearInterval(this.timer))
      })
      //监听播放进度
      audio.onTimeUpdate(res=> {
        const now = audio.currentTime;
        this.triggerEvent('currentTime', now)
      })
    })
  },
  observers:{
    'info':function(newV) {
      const { audio } = this.data;
      if (newV && newV.url) {
        audio.src = newV.url;
        audio.title = newV.title || '未知标题';
      }
    }
  }
})
