Page({
  data: {
    customerId: 0,
    customerName: 0,
    organization: ['中国', '美国', '巴西', '日本'],
    line: ['企金金融','金融市场','零售业务'],
    orgindex: 0,
    lineindex: 0,
    busiType:0
  },
  bindCustomerIdChange: function(e) {
    console.log('customerId发送输入，携带值为', e.detail.value)
    this.setData({
      customerId: e.detail.value
    })
  },
  bindCustomerNameChange: function(e) {
    console.log('customerName发送输入，携带值为', e.detail.value)
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

    wx.navigateTo({
      url: "limitdetail?customerId=" + this.data.customerId+"&customerName="+ this.data.customerName+"&org="+this.data.organization[this.data.orgindex]+"&line="+this.data.line[this.data.lineindex],
    });
  }
})