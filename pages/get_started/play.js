
Page({
  data: {
    typeName: '手残模式',
    noe_list: [],
    ction: false,
    for_index: 0,
    endlessScore: 0,
    email: null
  },
  list(e) {
    var that = this;
    that.setData({
      for_index: 0,
      ction: true,
    })
    that.noe_tab()
    that.terval()
  },
  terval() {
    var that = this,
      noe_list = that.data.noe_list;
    that.data.time_terval = setInterval(function () {
      for (let i = 0; i < 6; i++) {
        if (noe_list[i].top >= 80 && noe_list[i].check != 2) {
          that.failed()
        } else {
          if (noe_list[i].top > 110) {
            noe_list[i].index = Math.floor(Math.random() * 4)
            noe_list[i].check = 1
            noe_list[i].top = -26
            that.setData({
              noe_list: noe_list
            })
          } else {
            if (i == 0 || noe_list[i - 1].top >= -25 || noe_list[i].top > -25) {
              noe_list[i].top += 4
            }
          }
        }
      }
      that.setData({
        noe_list: noe_list
      })
    }, 100)
  },
  block_tab(e) {
    var that = this
    var index = e.currentTarget.dataset.index,
      status = e.currentTarget.dataset.status,
      block_list = that.data.noe_list;
    if (status) {
      block_list[index].arr[e.currentTarget.dataset.cell] = 1
      that.setData({
        noe_list: block_list,
      })
      that.failed()
      return
    }
    block_list[index].check = 2
    that.setData({
      for_index: that.data.for_index + 1
    })
    that.setData({
      noe_list: block_list,
    })
  },
  noe_tab(e) {
    var noe_list = [],
      arr = [];
    for (let i = 0; i < 6; i++) {
      arr = Math.floor(Math.random() * 4) + 1
      noe_list.push({
        index: arr - 1,
        cell: i,
        check: 1,
        arr: [],
        top: -50
      })
      for (let j = 0; j < 4; j++) {
        noe_list[i].arr.push('')
      }
    }
    this.setData({
      noe_list: noe_list,
    })
  },
  async failed(e) {
    var that = this
    clearInterval(that.data.time_terval)
    that.setData({
      ction: false,
    })


  //todo:失败后存储成绩


  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      email: wx.getStorageSync('userInfo').email ? wx.getStorageSync('userInfo').email : null
    })
    wx.setNavigationBarTitle({
      title: that.data.typeName
    });
  }
})
