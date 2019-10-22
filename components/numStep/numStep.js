// components/numStep/numStep.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type:Number,
      value:1
    },
    minV:{
      type:Number,
      value:1
    },
    maxV:{
      type:Number,
      value:99
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
    min(){
      let { value, minV } = this.properties;
      if (value <= minV) return
      const v =  --value;
      this.triggerEvent('getValue', v);
    },
    add(){
      let { value, maxV } = this.properties;
      if (value >= maxV) return
      const v =  ++value;
      this.triggerEvent('getValue', v);
    },
    confirm(e){
      const { maxV, minV } = this.properties;
      let v = e.detail.value ? e.detail.value * 1 : minV;
      if (v > maxV) v = maxV;
      if (v < minV) v = minV;
      this.triggerEvent('getValue', v);
    }
  }
})
