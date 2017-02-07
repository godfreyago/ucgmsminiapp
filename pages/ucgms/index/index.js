//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
      navItems:[
      {
        name:'额度查询',
        url:'dishes'
      },
      {
        name:'业务信息',
        url:'take',
        isSplot:true
      },
      {
        name:'债券信息',
        url:'out'
      },
      {
        name:'缓释',
        url:'bill'
      },
      {
        name:'客户统一视图',
        url:'bill',
        isSplot:true
      },
      {
        name:'用户操作',
        url:'bill'
      }
    ],
    items: [
      {title:'统一授信',
      sub_title:'上线',
      image:''},
      {title:'统一授信',
      sub_title:'上线',
      image:''},
      {title:'统一授信',
      sub_title:'上线',
      image:''}
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
