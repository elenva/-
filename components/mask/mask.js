// components/mask/mask.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top:Number,
    bgc:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    maskTap(e){
      this.triggerEvent('maskTap', e)
    },
    touchmove(){
      return true;
    }
  }
})
