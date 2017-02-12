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
        url:'../limit/limit'
      },
      {
        name:'业务信息',
        url:'../limit/linelimitshow',
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
        name:'用户管理',
        url:'bill'
      }
    ],
    items: [
      {
        _id : '001',
        title : '集团统一授信信息化建设专项工作成功上线',
        sub_title : '风险领域研发团队',
        image : '../../../images/credit_cards.png',
        content : '本行集团统一授信管理信息化建设专项工作自2016年9月启动以来，以集团授信管理体制机制完善、风险数据治理规范、统一授信管理信息系统建设为目标，各项工作有序推进。与此同时，以提高审查审批效率，加强授信额度硬约束为目标，依托现有信息化系统架构，各部门群策群力，提出过渡期方案9项工作任务，并于2016年12月26年全面上线。',
        headimage : '../../../images/banner1.png'
      },
      {
        _id : '002',
        title : '热烈庆祝兴业银行上市十周年',
        sub_title : '',
        image : '../../../images/credit_cards-2.png',
        content : '热烈庆祝兴业银行上市十周年！',
        headimage : '../../../images/cib10.jpg'
      },
      {
        _id : '003',
        title : '非零售统一授信管理系统上线',
        sub_title : '风险领域研发团队',
        image : '../../../images/credit_card-3.png',
        content : '统一授信管理系统与2015年10月21日上线！',
        headimage : '../../../images/banner1.png'
      }
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
