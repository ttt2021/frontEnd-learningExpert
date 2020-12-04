// miniprogram/pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        indicatorActiveColor: "#ffffff",
        indicatorColor: "rgba(0, 0, 0, .3)",
        indicatorDots: true,
        autoplay: true,
        duration: 500,
        interval: 3000,
        circular: true,
        img: [
            {
                image: '../../images/1.jpg', 
                title: 'html有哪些特性'
            },
            {
                image: '../../images/2.jpg', 
                title: 'promise有没有解决异步问题'
            },
            {
                image: '../../images/3.jpg', 
                title: 'css伪类与伪元素的区别'
            },
            {
                image: '../../images/4.jpg', 
                title: '说一下事件循环机制'
            },
            {
                image: '../../images/5.jpg', 
                title: '计算属性和普通属性有什么区别'
            }
        ]
    },

    onChange(e) {
        this.setData({
          value: e.detail,
        });
    },
    onSearch() {
        console.log(this.data.value)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})