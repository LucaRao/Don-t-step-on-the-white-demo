//logs.js
import { supabase } from '../../lib/supabase'
Page({
  data: {
    logs: [],
    get_started_highscore:null,
    classic_highscore:null,
    extreme_speed_highscore:null,
    userInfo:null
  },
  onShow: function () {
    this.setData({
      userInfo : wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo') : null
    })
    if(this.data.userInfo){
      this.getScore()
    }
  },
  //todo:获取用户排名情况
 async getScore(){

  }
})
