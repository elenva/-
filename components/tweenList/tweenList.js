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
    // setCurrentData() {
    //   const { menu } = this.data;
    //   menu.map(item => {
    //     if (item.active) {
    //       this.setData({ currentData: item.list })
    //     }
    //   })
    // },
    menuChange(e) {
      const { item, idx } = e.currentTarget.dataset;
      const newObj = {
        ...el, idx
      }
      this.triggerEvent('menuChange', newObj);
    },
  },
  ready(){
    //当前列表类容
    // this.setCurrentData()
  }
})
