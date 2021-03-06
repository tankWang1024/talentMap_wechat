// pages/home/index/index.js
const swiperBannerList = [{
    id: 0,
    url: "/img/tabbar/home-fill.png"
  },
  {
    id: 1,
    url: "/img/tabbar/home-fill.png"
  },
  {
    id: 2,
    url: "/img/tabbar/home-fill.png"
  },
  {
    id: 3,
    url: "/img/tabbar/home-fill.png"
  },
  {
    id: 4,
    url: "/img/tabbar/home-fill.png"
  }
]
const swiperConfig = {
  interval: '4000',
  height: '360rpx'
}
const newsType = {
    0:"政策展示宣传",
    1:"人才焦点资讯",
    2:"人才服务公示"
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: getApp().globalData.tabbarList,
    swiperBannerList,
    swiperConfig,
    
  },
  tabChange(e) {
    getApp().tabChange(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})