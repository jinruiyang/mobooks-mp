// pages/post/post.js

const app = getApp()

Page({

  data: {

  },
  
  // Uploda Cover Image
  uploadCoverImage: function(){
    wx.chooseImage({
      count: 1, // Default 9
      sizeType: ['original', 'compressed'], // Can specify whether it is the original or compressed image, both have defaults
      sourceType: ['album', 'camera'], // Can specify whether the source is an album or camera, both have defaults
      success: function (res) {
        // Returns the local file path list for the selected photo, tempFilePath can be used as the img tag's src attribute to display the image
        var tempFilePaths = res.tempFilePaths
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

  }
})