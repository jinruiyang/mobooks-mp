// pages/show/show.js
const app = getApp()

Page({

  data: {

  },

  onLoad: function (options) {
    // //find the restaurant id you want to load
    // const id = options.id

    // //get that restaurant with the id from globaldata
    // const data = getApp().globalData.restaurants
    // const restaurant = data.find(r => r.id == id)
    // //set this pages's data to that restaurant
    // this.setData(restaurant)

    let that = this;

    // Get api data
    wx.request({
      url: `https://evening-oasis-94741.herokuapp.com/api/v1/books/331`,
      method: 'GET',
      success(res) {
        const book = res.data;

        // Update local data
        that.setData(
          book
        );

        wx.hideToast();
      }
    });

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