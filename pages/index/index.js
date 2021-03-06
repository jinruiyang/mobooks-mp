// pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goHome: function (e) {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  goAdd: function (e) {
    wx.reLaunch({
      url: '/pages/add/add'
    })
  },
  goMybooks: function (e) {
    wx.reLaunch({
      url: '/pages/mybooks/mybooks'
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
    wx.reLaunch({
      url: '/pages/main/main'
    })
  },

  showBook: function (e) {
    const id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // Save reference to page
    let page = this;

    // if (app.globalData.newbook) {
    //   this.setData({ book: app.globalData.newbook })
    // }
    // console.log(55555, this.data.book)

    // Get api data
    wx.request({
      url: app.globalData.host + `${app.globalData.userId}/books`,
      method: 'GET',
      success(res) {
        const books = res.data.books;

        // Update local data
        page.setData({
          books: books
        });

        wx.hideToast();
      }
    });

  },

  searchBook: function(){

    wx.navigateTo({
      url: `/pages/search/search`,
    })

  }
})