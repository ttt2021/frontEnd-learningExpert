// miniprogram/pages/index/index.js
const dateTime = require("../../base/time.js");
const interviewUrl = require('../../base/interviewUrl.js')
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
		],
		clockDesc: '千里之行，始于足下，快来学习打卡吧',
		natice: '欢迎来到前端圣典！！！',
		clock: 'visible',
		clocked: 'none',
		currentTime: '2020/12/6',
		weekday: '星期日',
		cellHeight: '240rpx',
		items: []
	},

	clickClock (e) {
		// console.log(e)
		this.setData({
			clock: 'none',
			clocked: 'visible',
			clockDesc: '今日打卡第23名，比97%的小伙伴更勤奋'
		})
		// console.log(this.data.clock, this.data.clocked)
		// 获取数据存储中的星期几
		// console.log(that.data.weekday)
		let weekday= this.data.weekday
		let clock = this.data.clock
		let clocked = this.data.clocked
		let clockDesc = this.data.clockDesc
		// console.log(typeof(data))
		wx.setStorage({
			key: 'getData',
			data: {
				'weekday': weekday,
				'clock': clock,
				'clocked': clocked,
				'clockDesc': clockDesc
			}
		})
	},

	// onChange(e) {
	//     this.setData({
	//       value: e.detail,
	//     });
	// },
	// onSearch() {
	//     console.log(this.data.value)
	// },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 获取当前日期和时间，并实时更新
		const that = this
		setInterval(function () {
			// let oldTime = that.data.currentTime.split("")[0]
			let time = dateTime.dateTime(new Date())
			// console.log(time)
			that.setData({
				currentTime: time
			})
			// let newTime = time.toString().split(" ")[0]
			// console.log(oldTime, newTime)
		}, 1000)
		// 获取数据存储中的星期几
		// console.log(that.data.weekday)
		// let data = that.data.weekday.toString()
		// console.log(typeof(data))
		// wx.setStorage({
		// 	key: 'getData',
		// 	data: data
		// })
		// 获取当前是星期几
		// console.log(that.data)
		let oldWeekday = that.data.weekday
		let weekday = that.getWeekday()
		// console.log(oldWeekday, weekday)
		// that.setData({
		// 	weekday: weekday,
		// 	clock: 'visible',
		// 	clocked: 'none'
		// })
		// // console.log(weekday)
		if (oldWeekday !== weekday) {
			that.setData({
				weekday: weekday,
				clock: 'visible',
				clocked: 'none',
				clockDesc: '千里之行，始于足下，快来学习打卡吧'
			})
		}
		console.log(that.data)

		// 宫格
		console.log(interviewUrl.items) // 宫格数据
		let grideItem = []
		let row = []
		let len = interviewUrl.items.length 
		// console.log(len)
		len = Math.floor((len + 2) / 3) * 3
		for (let i = 0; i < len; i++) {
			if ((i + 1) % 3 == 0) {
				row.push(interviewUrl.items[i])
				grideItem.push(row)
				row = []
				continue
			} else {
				row.push(interviewUrl.items[i])
			}
		}
		that.setData({
			items: grideItem
		})
		console.log(that.data.items)
	},

	getWeekday() {
		let today = new Date();
		let currentDate = today.getDay();//获取存储当前日期
		let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		// console.log(weekday[currentDate]);
		return weekday[currentDate]
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
		// 获取当前是星期几
		let that = this
		// console.log(that.data)
		// let weekday = that.getWeekday()
		// console.log(weekday)
		wx.getStorage({
			key: 'getData',
			success (res) {
				// console.log(res.data) // 存储的数据
				// console.log(that.data) // 数据源的数据
				that.setData({
					weekday: res.data.weekday || '星期日',
					clock: res.data.clock || 'visible',
					clocked: res.data.clocked || 'none',
					clockDesc: res.data.clockDesc || '千里之行，始于足下，快来学习打卡吧'
				})
				// if (res.data !== that.data.weekday) {
				// 	that.setData({
				// 		weekday: that.data.weekday,
				// 		clock: 'visible',
				// 		clocked: 'none'
				// 	})
				// }
			}
		})
		// console.log(that.data)
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
		// json文件中
		// "backgroundTextStyle": "dark",
  	// "backgroundColor": "#eeeeee",
		// "enablePullDownRefresh": true
		
		// setTimeout(() => {
		// 	wx.stopPullDownRefresh(); //停止下拉元点
		// }, 1000)
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