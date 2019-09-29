// components/pianoPanel/pianoPanel.js
Component({
  options: {
    multipleSlots: true,  //启用slot插槽
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isActive:{
      type:Boolean,value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setActive(){
      const { isActive } = this.data;
      this.setData({ isActive: !isActive});
      this.triggerEvent('setActive',!isActive);
    }
  }
})
