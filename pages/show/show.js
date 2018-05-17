// pages/show/show.js
const path = require('../../apiPaths.js')

Page({

  data: {

  },

  onLoad: function (options) {
    this.setData({ bookId: options.id })
    this.fetchBook(path.getBook, this.data.bookId)
  },

  fetchBook: function (url, id) {
    let that = this

    wx.request({
      url: url + id,
      success: function (res) {
        that.setData({ book: res.data })
        console.log(8888, res.data)
      }
    })
  },

  fetchOwner: function (){

  },
  
  goHome: function (e) {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  goContact: function (e) {
    wx.reLaunch({
      url: '/pages/contact/contact'
    })
  },
  goMybooks: function (e) {
    wx.reLaunch({
      url: '/pages/mybooks/mybooks'
    })
  },
  onShow: function () {
    var that = this
    //如果 isBack 为 true，就返回上一页
    if (that.data.isBack) {
      wx.navigateBack()
    }
  }
})