// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    tabbarList:[
        {
            "text": "首页",
            "pagePath": "../../home/index/index",
            "iconPath": "../../../img/tabbar/home.png",
            "selectedIconPath": "../../../img/tabbar/home-fill.png"
        },
        {
            "text": "政策",
            "pagePath": "../../policy/index/index",
            "iconPath": "../../../img/tabbar/police.png",
            "selectedIconPath": "../../../img/tabbar/police-fill.png"
        },
        {
            "text": "服务",
            "pagePath": "../../serve/index/index",
            "iconPath": "../../../img/tabbar/serve.png",
            "selectedIconPath": "../../../img/tabbar/serve-fill.png"
        },
        {
            "text": "我的",
            "pagePath": "../../mine/index/index",
            "iconPath": "../../../img/tabbar/user.png",
            "selectedIconPath": "../../../img/tabbar/user-fill.png"
        }
    ],
  },
  tabChange:function(e){
    // 放在这里，其他地方也能调用
    wx.redirectTo({
      url: e.detail.item.pagePath,
    })
}
})
