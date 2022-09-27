
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    heighestStartScore: 0,
    heighestClassicScore:0,
    heighestExtremeSpeedScore:0,
    longestTime: 0,
    showModalStatus:false,
    maskTitle:'登录',
    email:'',
    password:null,
    userInfo:null,
  },
 
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo : wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo') : ''
      })
    // })
    //todo:页面初始化请求首页个人排名

  },
  onShow(){
    //todo:切换页面请求首页个人排名

  },
  //注册
  loginUp(){
    //打开注册弹窗
    this.setData({
      maskTitle:'注册',
      showModalStatus:true
    })
  },
  //登录
  login(){
    //打开登录弹窗
    this.setData({
      maskTitle:'登录',
      showModalStatus:true
    })
  },
  //弹窗登录操作
  getUserName:function (e){
    this.setData({
      email:e.detail.value
    })
  },
  getPassword:function (e){
    this.setData({
      password:e.detail.value
    })
  },
  reviseTap:async function (){
    //输入款完整校验
    if(!this.data.email || !this.data.password){
      wx.showToast({
        title: '请输入完整的用户名和密码',
        icon: 'none',
        duration: 3000
      });
      return;
    }
    //登录：查询gamer表是否有该用户名，有的话在校验密码，没有直接让去注册
    if(this.data.maskTitle == '登录'){
      //todo:登录逻辑
    }else if(this.data.maskTitle == '注册'){
      //todo:登录逻辑
    //注册：查询gamer表是否有该用户名，有的话提示用户已存在，没有就帮注册再存储用户信息
    }
    this.setData({
      showModalStatus:false
    })
  },
  //登陆成功后查询用户游戏记录
  async getGameSorce(){
    //todo:查询个人最高成绩
  },
  loginOut(){
    wx.removeStorageSync('userInfo');
    this.setData({
      userInfo:null
    })
  },
  //查看排名
  rankings(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goGame: function(event){
    //todo:'请先加入全国队列哦，请登录'提示

    var gameType = event.target.id;
    wx.navigateTo({
      url: '../'+gameType+'/play?email='+this.data.userInfo.email
    })
  },
  close:function (){
    this.setData({
      showModalStatus:false
    })
  },

})
