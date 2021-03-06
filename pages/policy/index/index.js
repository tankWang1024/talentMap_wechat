// pages/policy/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: getApp().globalData.tabbarList,
        tabKey: "one",
        tabLine: [{
            name: "产业政策",
        },{
            name: "专家解读",
        },{
            name: "图文解读",
        },{
            name: "答记者问",
        }],
        tabLine2: [{
            name: "爱才政策",
        },{
            name: "专家解读",
        },{
            name: "图文解读",
        },{
            name: "答记者问",
        }],
    },
    tabChange(e) {
        getApp().tabChange(e);
    },
    // 顶部tab切换
    changeTabs(e) {
        console.log(e.detail.activeKey);
        this.setData({
            tabKey: e.detail.activeKey
        })
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