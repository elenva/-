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
        title:'',
        imgurl:""
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
    },
    pointTouchStart(e){
      const { audioObj} = this.data;
      console.log(audioObj)
      this.setData({
        startObj: {
          ...e.touches[0],
          startTime:audioObj.currentPosition
        }
      })
    },
    pointTouchMove(e){
      const { startObj} = this.data;
      const moveObj = e.touches[0];
      if (!startObj) return;
      console.log(e)
      this.setData({
        moveObj
      })
    },
    pointTouchEnd(e){
      const { moveObj, startObj, audioObj, audio } = this.data;
      if (!moveObj) return;
      const slector = wx.createSelectorQuery().in(this);
      const scale = startObj.clientX - moveObj.clientX;
      const end = moveObj.clientX;
      const progressInner = slector.select('#progressInner')
      progressInner.boundingClientRect(function (rect){
        const nodeWidth = rect.width;
        const nodeLeft = rect.left;
        const _end = end - nodeLeft;
        const percent = _end / nodeWidth;
        const ms = audioObj.duration * percent
        audio.seek(ms)
      }).exec()
      
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