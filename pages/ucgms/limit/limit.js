Page({
  data: {
    orgSheetHidden: true,
    lineSheetHidden: true,
    custCode: '',
    custName: '',
    custCodeHolder: '请填写客户代码',
    custNameHolder: '请填写客户名称',
    organization: '请选择经办机构',
    line: '请选择业务条线',
    organizations: [
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
    }]
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
  bindCustomerIdChange: function(e) {
    console.log('custId发送输入，携带值为', e.detail.value)
    this.setData({
      customerId: e.detail.value
    })
  },
  bindCustomerNameChange: function(e) {
    console.log('custName发送输入，携带值为', e.detail.value)
    this.setData({
      customerName: e.detail.value
    })
  },
  bindOrgPickerChange: function(e) {
    console.log('orgpicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      orgindex: e.detail.value
    })
  },
  bindLinePickerChange: function(e) {
    console.log('linepicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      lineindex: e.detail.value
    })
  },
  bindSearch: function(e) {
    //console.log(this.data);
    wx.navigateTo({
      url: "limitdetail?custCode=" + this.data.custCode+"&custName="+ this.data.custName+"&organizationId="+this.data.organizationId+"&lineId="+this.data.lineId
    });
  }
})