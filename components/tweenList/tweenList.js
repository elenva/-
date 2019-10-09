// components/tweenList/tweenList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menu:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentData: [],
    screenHei: 500
  },


  /**
   * 组件的方法列表
   */
  methods: {
    navigation(e) {
      const { item } = e.currentTarget.dataset;
      wx.navigateTo({
        url: `/pages/productList/productList?title=${item.name}`,
      })
    },
    setCurrentData() {
      const { menu } = this.data;
      menu.map(item => {
        if (item.active) {
          this.setData({ currentData: item.list })
        }
      })
    },
    menuChange(e) {
      const { item } = e.currentTarget.dataset;
      const { menu } = this.data;
      menu.map(el => {
        el.active = false
        if (el.name === item.name) {
          el.active = true
        }
      });
      this.setData({ menu }, () => {
        this.setCurrentData()
      })
    },
  },
  ready(){
    //当前列表类容
    this.setCurrentData()
  }
})
