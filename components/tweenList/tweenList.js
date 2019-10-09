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
        url: `/pages/productList/productList?typeId=${item.id}&title=${item.name}`,
      })
    },
    setCurrentData(data) {
      const { menu } = this.data;
      const _data = data || menu;
      _data.map(item => {
        if (item.active) {
          this.setData({ currentData: item.children })
        }
      })
    },
    menuChange(e) {
      const { item, idx } = e.currentTarget.dataset;
      const newObj = {
        ...item, idx
      }
      this.triggerEvent('menuChange', newObj);
    },
  },
  ready(){
    //当前列表类容
    this.setCurrentData()
  },
  //监听传入的值
  observers:{
    'menu': function (newV){
      this.setCurrentData(newV);
    }
  }
})
