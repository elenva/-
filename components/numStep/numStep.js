// components/numStep/numStep.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    min(){
      let {value} = this.data;
      const v = value === 1 ? 1 : --value;
      this.setData({
        value:v
      })
    },
    add(){
      let { value } = this.data;
      const v = ++value;
      this.setData({
        value: v
      })
    }
  }
})
