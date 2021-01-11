// miniprogram/pages/login/login.js
// const db = wx.cloud.database();
const app = getApp()
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 判断小程序的API，回调、参数、组价等是否可在当前版本使用
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const that = this
		// 查看是否授权登录
		wx.getSetting({
			success(settingRes) {
				// console.log(settingRes);
				// 应经授权
				if (settingRes.authSetting['scope.userInfo']) {
					wx.getUserInfo({ // 获取用户信息
						success(infoRes) {
							// console.log(infoRes);
							app.globalData.userInfo = infoRes.userInfo
							// 调用云函数
							wx.cloud.callFunction({
								name: 'userInfo',
								data: {
									avatarUrl: infoRes.userInfo.avatarUrl,
									name: '',
									nickName: infoRes.userInfo.nickName,
									sex: infoRes.userInfo.gender
								}
							})
							// 用户已经授权，调用微信的wx.login接口，从而获取信息，再直接跳转到主页
							// wx.login({
							// 	success: (res) => {
							// 		// 获取到用户信息
							// 		console.log(res, app)
							// 	},
							// })
							wx.switchTab({
								// url: '/pages/index/index', // 跳转的目标页面的url
								url: '/pages/me/me', // 跳转的目标页面的url
								success: (result) => {
									console.log('授权获取成功，跳转到首页')
								},
								fail: () => {
									wx.showToast({
										title: '亲！授权失败哟，请刷新重新授权哦！！！',
										duration: 1000
									})
								}
							})
						}
					})
				} else {
					// 用户没有授权，显示授权界面，这里不进行操作
					// wx.showToast({
					// 	title: '亲！授权失败哟，请刷新重新授权哦！！！',
					// 	duration: 1000
					// })
				}
			}
		})
	},

	onGetUserInfo: function (e) {
		if (e.detail.userInfo) {
			// 用户按了允许授权的按钮
			const that = this
			// 获取到用户信息
			console.log(e.detail.userInfo)
			wx.switchTab({
				url: '/pages/index/index',
				success: (result) => {
					console.log('授权获取成功，跳转到首页')
				},
				fail: () => {
					Toast.loading({
						message: '授权失败，请刷新重新授权',
						forbidClick: true
					})
				}
			})
		} else {
			// 用户按了拒绝按钮
			wx.showModal({
				title: '警告',
				content: '亲！您拒绝了授权，无法进入小程序，请授权后再进入！',
				showCancel: false,
				confirmText: '返回',
				success: function (res) {
					// 用户没有授权成功，不需要改变 isHide 值
					if (res.confirm) {
						console.log('用户点击了"返回"')
					}
				}
			})
		}
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