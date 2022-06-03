// pages/mine/index/index.js

const MineMenuList = [
  {title:"身份认定",image:"/img/mineMenuIcon/idCard.png",location:"/pages/home/index/index"},
  {title:"申报进程",image:"/img/mineMenuIcon/processing.png",location:""},
  {title:"期望岗位",image:"/img/mineMenuIcon/job.png",location:""},
  {title:"简历管理",image:"/img/mineMenuIcon/myFile.png",location:""},
  {title:"权限设置",image:"/img/mineMenuIcon/setting.png",location:""},
]

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:getApp().globalData.tabbarList,
        userInfo: {},
        menu:MineMenuList
    },
    tabChange(e) {
        getApp().tabChange(e);
    },    
    menuItemToDetail(e){
      console.log(e.currentTarget.dataset.location)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(this.data.menu)
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