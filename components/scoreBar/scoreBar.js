// components/scoreBar/scoreBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showCash:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    score:0,
    cash:0,
    constantMap:null,//比例
    extractIntegration:0//可提现积分
  },
  methods:{
    showInfo(){
      const { score, cash, constantMap, extractIntegration} = this.data
      wx.showModal({
        title: '积分信息',
        content: `积分兑现金比例:${this.numTofixed(constantMap.extractScale)};可提现积分:${extractIntegration}`,
        showCancel:false
      })
    },
    numTofixed(num,x=1){
      return Number(num).toFixed(x);
    }
  },
  ready(){
    // const { userAccountInfo,scale } = app.globalData;
    // this.setData({
    //   score: userAccountInfo.integration,
    //   cash: userAccountInfo.integration*scale
    // })
  },
  pageLifetimes:{
    show:function(){
      const { userAccountInfo, scale } = app.globalData;
      this.setData({
        scale: scale,
        score: userAccountInfo.integration,
        cash: userAccountInfo.extractIntegration * scale,
        constantMap: userAccountInfo.constantMap,
        extractIntegration: userAccountInfo.extractIntegration
      })
    }
  }
})
