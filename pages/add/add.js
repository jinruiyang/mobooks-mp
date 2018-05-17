// pages/post/post.js

const app = getApp()

Page({

  data: {

  },

  // Uploda Cover Image
  uploadCoverImage: function () {
    let that = this
    
    console.log("test button")
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({ imagePath : tempFilePaths})
      }
    })
  },

  // Bind Submit
  bindSubmit: function(e) {
    // console.log(3423423,this.data)
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1000
    })
    let title = e.detail.value.title;
    let author = e.detail.value.author;
    let description = e.detail.value.description;
    // in the form, it's called image
    let cover = e.detail.value.image;
    let id = this.data.id;

    let book = {
      title: title,
      author: author,
      description: description,
      cover: this.data.imagePath[0]
    };

    app.globalData.newbook = book
    
    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/books`,
      method: 'POST',
      data: book,
      success() {
        // set data on index page and show
       wx.reLaunch({
         url: '/pages/mybooks/mybooks',
       })
      }
    });

  },

  goMybooks: function (e) {
    wx.reLaunch({
      url: '/pages/mybooks/mybooks'
    })
  },

  onLoad: function (options) {
    
  }
})

// bindSubmit: function (e) {
//   let name = e.detail.value.name;
//   let image = e.detail.value.image;
//   let description = e.detail.value.description;
//   let address = e.detail.value.address;
//   let id = this.data.id;


//   let restaurant = {
//     name: name,
//     image: image,
//     description: description,
//     address: address
//   }

//   // Get api data
//   wx.request({
//     url: `http://localhost:3000/api/v1/restaurants`,
//     method: 'POST',
//     data: restaurant,
//     success() {
//       // set data on index page and show
//       wx.redirectTo({
//         url: '/pages/index/index'
//       });
//     }
//   });
// },