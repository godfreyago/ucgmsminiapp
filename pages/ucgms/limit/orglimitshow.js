var app = getApp()
Page({
	data:{
		orgLimit:[
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
				approvalLimit:"600000000",
				usedLimit:"150000000",
				approvalRisk:"600000000",
				usedRisk:"150000000",
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
				approvalLimit:"600000000",
				usedLimit:"150000000",
				approvalRisk:"600000000",
				usedRisk:"150000000",
				updator:"唐虹",
				updateOrgID:"1034",
				updatorOrg:"重庆分行",
				updateTime:"2016-12-31 15:20:10",
				description:""
			}
		]
	},
	onLoad :function(e) {
		var cur=-1;
		console.log(e);
		for (var i = 0; i < this.data.orgLimit.length; i++) {
			if(this.data.orgLimit[i].customerID==e.customerID&&this.data.orgLimit[i].lineID==e.lineID&&this.data.orgLimit[i].orgID==e.orgID){
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
				showlimit:this.data.orgLimit[cur]
			});
		}
	},
	bindCancel () {
		wx.navigateBack();
	}
})
