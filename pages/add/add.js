// pages/post/post.js

const app = getApp()

Page({

  data: {

  },
  test: function() {
    console.log(234234242,"test")
  },

  // Uploda Cover Image
  uploadCoverImage: function () {
    console.log("test button")
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  },

  // Bind Submit
  bindSubmit: function (e) {

    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1000
    })
    let title = e.detail.value.title;
    let author = e.detail.value.author;
    let description = e.detail.value.description;

    let item = {
      name: name,
      author: author,
      description: description
    }

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/items`,
      method: 'POST',
      data: item,
      success() {
        // set data on index page and show
        wx.reLaunch({
          url: '/pages/index/index'
        });
      }
    });

  },

  onLoad: function (options) {
    console.log("onLoad test")
  }
})