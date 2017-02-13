Page({
  data: {
    orgSheetHidden: true,
    lineSheetHidden: true,
    isValidCust:false,
    focus: true,
    custCode: '',
    custName: '',
    custCodeHolder: '请填写客户代码',
    custNameHolder: '请填写客户名称',
    organization: '请选择经办机构',
    line: '请选择业务条线',
    custInfo:[
      {
        customerId:'74959946-5',
        customerName:"百联集团有限公司"
      }
    ],
    organizations: 
    [
      {
        _id: '1032',
        name:'北京分行'
      },
      {
        _id: '1021',
        name: '上海分行'
      },
      {
        _id: '1011',
        name: '福州分行'
      },
      {
        _id: '1034',
        name: '重庆分行'
      }
      ],
      lines: [
      {
        _id: '1',
        name:'企金金融'
      },
      {
        _id: '2',
        name: '金融市场'
      },
      {
        _id: '3',
        name: '零售业务'
      }
    ]
  },
  custCodeInput: function(e) {
    this.setData({
      custCode:e.detail.value
    })
  },
  custNameInput: function(e) {
    this.setData({
      custName:e.detail.value
    })
  },
  orgSheetChange: function(e) {
    this.setData({
      orgSheetHidden: !this.data.orgSheetHidden
    })
  },
  orgSheetTap: function(e) {
    console.log(e);
    this.setData({
      orgSheetHidden: !this.data.orgSheetHidden
    })
  },
  orgSheetItemTap: function(e) {
    var nameAndId=e.currentTarget.id;
    var strs= new Array(); //定义一数组 
    strs=nameAndId.split(","); //字符分割 
    this.setData({
      orgSheetHidden: true,
      organizationId:strs[0],
      organization:strs[1]
    })
  },
  lineSheetChange: function(e) {
    this.setData({
      lineSheetHidden: !this.data.lineSheetHidden
    })
  },
  lineSheetTap: function(e) {
    console.log(e);
    this.setData({
      lineSheetHidden: !this.data.lineSheetHidden
    })
  },
  lineSheetItemTap: function(e) {
    var nameAndId=e.currentTarget.id;
    var strs= new Array(); //定义一数组 
    strs=nameAndId.split(","); //字符分割 
    this.setData({
      lineSheetHidden: true,
      lineId:strs[0],
      line:strs[1]
    })
  },
  custCodeBlur: function(e) {
    //console.log(e);
    for(var i=0;i<this.data.custInfo.length;i++){
      if(this.data.custCode==this.data.custInfo[i].customerId){
        this.setData({
          isValidCust:true,
          custName: this.data.custInfo[i].customerName
        });
        return;
      }
    }
    this.setData({
      isValidCust:false
    });
  },
  bindSearch: function(e) {
    if(!this.data.isValidCust){
      wx.showModal({
        content: '查无客户，请重新输入客户代码！',
        showCancel: false
      });
      this.setData({
        focus:true
      });
      return;
    }
    wx.navigateTo({
      url: "limitdetail?custCode=" + this.data.custCode+"&custName="+ this.data.custName+"&organizationId="+this.data.organizationId+"&lineId="+this.data.lineId
    });
  },
  bindCancel: function(e) {
    wx.navigateBack();
  }
})