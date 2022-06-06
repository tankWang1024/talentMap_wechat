// pages/serve/index/index.js

const serveList = [
    {
        title:"人才公共服务",
        bgColor:"rgb(221, 248, 255)",
        color:"rgb(107, 157, 206)",
        imgSrc:"/img/action.png ",
        content:"到档查询，档案转接，出具证..."
    },
    {
        title:"高层次人才服务",
        bgColor:"rgb(228, 247, 225)",
        color:"rgb(107, 206, 157)",
        imgSrc:"/img/action.png ",
        content:"调动、安置、招录人员入户，..."
    },
    {
        title:"创新创业服务",
        bgColor:"rgb(234, 240, 254)",
        color:"rgb(190, 156, 213)",
        imgSrc:"/img/action.png ",
        content:"职称评审，职称认定，双流区..."
    },
    {
        title:"社会化服务",
        bgColor:"rgb(239, 236, 238)",
        color:"rgb(190, 165, 187)",
        imgSrc:"/img/action.png ",
        content:"党组织关系转接，预备党员转..."
    },
    {
        title:"人才安居服务",
        bgColor:"rgb(255, 243, 227)",
        color:"rgb(237, 203, 169)",
        imgSrc:"/img/action.png ",
        content:"毕业接收登记、毕业报道入户..."
    },
    {
        title:"人才认定服务",
        bgColor:"rgb(221, 248, 255)",
        imgSrc:"/img/action.png ",
        content:"到档查询，档案转接，出具证..."
    },
    {
        title:"求职招聘服务",
        bgColor:"rgb(221, 248, 255)",
        imgSrc:"/img/action.png ",
        content:"到档查询，档案转接，出具证..."
    },
    {
        title:"活动日历查询",
        bgColor:"rgb(221, 248, 255)",
        imgSrc:"/img/action.png ",
        content:"到档查询，档案转接，出具证..."
    },
]

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:getApp().globalData.tabbarList,
        serveList:serveList,
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