// components/sort/sort.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    view: "",
    lock: '',
    lists: [
      {
        name: '购买情况', key: 'lock', options: [
          { label: "全部商品", value: '', isActive: true },
          { label: "已解锁", value: '1' },
          { label: "未解锁", value: '2' },
        ]
      },
      {
        name: '浏览量', key: 'view', options: [
          { label: "默认排序", value: '', isActive: true },
          { label: "降序", value: '1' },
          { label: "升序", value: '2' },
        ]
      }
    ]
  },
  observers:{
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setCurrent(e){
      let { item } = e.currentTarget.dataset; 
      const data = this.data;
      item.options.map(el=> {
        el.isActive = false
        if (el.value === data[item.key]){
          el.isActive = true
        }
      })
      this.setData({current:item})
    },
    setCurrentOption(e){
      const { option } = e.currentTarget.dataset;
      const { current} = this.data;
      current.options.map(item => {
        item.isActive = false;
        if (item.value === option.value) {
          item.isActive = true;
          this.setData({ [current.key]: item.value})
        }
      })
      this.setData({ current })
      this.triggerEvent('sort', {
        view:this.data.view,
        lock:this.data.lock
      })
    },
    maskTap(e){
      this.setData({current:null})
    }
  }
})
