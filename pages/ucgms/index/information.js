
const app = getApp()

Page({
  onLoad: function(options) {
    console.log(options)
    this.setData({
      title: options.title,
      id:options.id
    })
    var that = this    
    
  }

})
