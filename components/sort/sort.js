// components/sort/sort.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lists:{
      type:Array,
      value:[
        {name:'购买情况',options:[
          { label:"全部商品",value:'all'},
          { label: "已解锁", value: '1' },
          { label: "未解锁", value: '2' },
        ]},
        {
          name: '浏览量'
        }
      ]
    }
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
    setCurrent(e){
      let { item } = e.currentTarget.dataset; 
      const _item = JSON.parse(JSON.stringify(item))
      const { current, currentOption} = this.data;
      if (current) {
        item = current.name === item.name? null:item
      }
      this.setData({current:item},()=> {
        const sortData ={
          sort: item ? '升序' : "降序",
          current: _item
        }
        if (!_item.options) this.triggerEvent('sort', sortData);
      })
    },
    setCurrentOption(e){
      const { option } = e.currentTarget.dataset;
      const { current } = this.data;
      this.setData({ currentOption:option},()=> {
        const sortData = {
          currentOption: option,
          current
        }
        this.triggerEvent('sort', sortData)
      })
    },
    maskTap(){
      this.setData({current:null})
    }
  }
})
