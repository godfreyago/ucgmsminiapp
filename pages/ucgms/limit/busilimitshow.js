var app = getApp()
Page({
	data:{
		busiLimit:[
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				groupID:"GL1234567890",
				groupName:"百联集团有限公司",
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				exchangeRate:"1.0",
				lineID:"2",
				line:"企金条线",
				busiID:"5302",
				busiName:"同业投资",
				approvalLimit:"200000000",
				usedLimit:"100000000",
				approvalRisk:"200000000",
				usedRisk:"100000000",
				updator:"唐虹",
				updateOrgID:"1034",
				updatorOrg:"重庆分行",
				updateTime:"2016-12-31 15:20:10",
				description:""
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				groupID:"GL1234567890",
				groupName:"百联集团有限公司",
				orgID:"1011",
				orgName:"福州分行",
				currencyID:"10",
				currency:"人民币",
				exchangeRate:"1.0",
				lineID:"2",
				line:"企金市场",
				busiID:"1101",
				busiName:"流动资金贷款",
				approvalLimit:"400000000",
				usedLimit:"150000000",
				approvalRisk:"400000000",
				usedRisk:"100000000",
				updator:"娜美",
				updateOrgID:"1011",
				updatorOrg:"福州分行",
				updateTime:"2016-1-17 11:45:37",
				description:""
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				groupID:"GL1234567890",
				groupName:"百联集团有限公司",
				orgID:"1011",
				orgName:"福州分行",
				currencyID:"10",
				currency:"人民币",
				exchangeRate:"1.0",
				lineID:"2",
				line:"企金市场",
				busiID:"5301",
				busiName:"同业投资(CFP通道)",
				approvalLimit:"600000000",
				usedLimit:"150000000",
				approvalRisk:"600000000",
				usedRisk:"150000000",
				updator:"索隆",
				updateOrgID:"1011",
				updatorOrg:"福州分行",
				updateTime:"2016-12-31 15:20:10",
				description:""
			}
		]
	},
	onLoad: function (e) {
		var cur=-1;
		console.log(e);
		for (var i = 0; i < this.data.busiLimit.length; i++) {
			if(this.data.busiLimit[i].customerID==e.customerID&&this.data.busiLimit[i].lineID==e.lineID&&this.data.busiLimit[i].orgID==e.orgID&&this.data.busiLimit[i].busiID==e.busiID){
				cur=i;
			}
		}
		if (cur==-1) {
			wx.showModal({
	            content: '查无对应额度，请联系系统管理员！',
	            showCancel: false,
	            success: function (res) {
	                if (res.confirm) {
	                    wx.navigateBack();
	                }
	            }
        	});
		} else {
			this.setData({
				showlimit:this.data.busiLimit[cur]
			});
		}
	},
	bindCancel () {
		wx.navigateBack();
	}
})
