// pages/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // avatarUrl: '../../images/user-unlogin.png',
    userInfo: {},
    // hasUserInfo: false,
    columnItems: [
      {
        Icon: '../../images/rank.png',
        name: '热门排行',
      },
      {
        Icon: '../../images/footer.png',
        name: '最近浏览',
      },
      {
        Icon: '../../images/collection.png',
        name: '我的收藏',
      },
      {
        Icon: '../../images/message.png',
        name: '留言展板',
      },
      {
        Icon: '../../images/idea.png',
        name: '大前端技能栈',
      },
      {
        Icon: '../../images/robot.png',
        name: '智能聊天',
      },
      {
        Icon: '../../images/reward.png',
        name: '赞赏作者',
      },
      {
        Icon: '../../images/feedback.png',
        name: '意见反馈',
      },
      {
        Icon: '../../images/journal.png',
        name: '更新日志',
      }
    ],
    arrowRight: '../../images/arrow-right.png'
  },

  // onGetUserInfo(e) {
  //   console.log(e)
  //   if (e.detail.userInfo) {
  //     app.globalData.userInfo = e.detail.userInfo
  //     this.setData({
  //       avatarUrl: e.detail.userInfo.avatarUrl,
  //       userInfo: e.detail.userInfo,
  //       hasUserInfo: true
  //     })
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    console.log(app.globalData.userInfo)
    self.setData({
      userInfo: app.globalData.userInfo
    })
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
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
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