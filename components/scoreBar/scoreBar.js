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
    cash:0
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
        score: userAccountInfo.integration,
        cash: userAccountInfo.integration * scale
      })
    }
  }
})
