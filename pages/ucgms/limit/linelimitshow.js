var app = getApp()
Page({
	data:{
		customerLimit:[
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
				approvalLimit:"600000000",
				usedLimit:"300000000",
				approvalRisk:"600000000",
				usedRisk:"300000000",
				updator:"唐虹",
				updateOrgID:"1034",
				updatorOrg:"重庆分行",
				updateTime:"2016-12-31 15:18:10",
				description:""
			}
		],
		lineLimit:[
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
				lineID:"1",
				line:"企金条线",
				approvalLimit:"600000000",
				usedLimit:"200000000",
				approvalRisk:"600000000",
				usedRisk:"200000000",
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
				orgID:"1021",
				orgName:"上海分行",
				currencyID:"10",
				currency:"人民币",
				exchangeRate:"1.0",
				lineID:"2",
				line:"金融市场",
				approvalLimit:"600000000",
				usedLimit:"300000000",
				approvalRisk:"600000000",
				usedRisk:"300000000",
				updator:"路飞",
				updateOrgID:"1021",
				updatorOrg:"上海分行",
				updateTime:"2017-2-1 8:20:10",
				description:""
			}
		]
	},
	onLoad: function (e) {
		var cur=-1;
		console.log(e);
		for (var i = 0; i < this.data.lineLimit.length; i++) {
			if(this.data.lineLimit[i].customerID==e.customerID&&this.data.lineLimit[i].lineID==e.lineID){
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
				showlimit:this.data.lineLimit[cur]
			});
		}
	},
	bindCancel () {
		wx.navigateBack();
	}
})
