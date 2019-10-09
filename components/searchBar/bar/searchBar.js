// components/searchBar/searchBar.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isInput:Boolean,
    value:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){

  },

  /**
   * 组件的方法列表
   */
  methods: {
    detail(){
      wx.navigateTo({
        url: '/components/searchBar/detail/detail',
      })
    },
    confirm(e){
      const {value} = e.detail;
      this.triggerEvent('confirm',value)
    }
  }
})
