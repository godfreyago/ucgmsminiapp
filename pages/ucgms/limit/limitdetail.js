var app = getApp()
Page({
	data: {
		hidden:true,
		currentTab:0,
		cart:[],
		cartTotal:0, 
    	winWidth: 0,  
    	winHeight: 0,  
		customerID:"74959946-5",
		customerName:"百联集团有限公司",
		orgID:"1034",
		orgName:"重庆分行",
		currencyID:"10",
		currency:"RMB",
		approvalLimit:"600000000",
		usedLimit:"300000000",
		updator:"唐虹",
		lineLimit:[
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"1",
				line:"企金条线",
				approvalLimit:"600000000",
				usedLimit:"300000000",
				updator:"唐虹"
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"2",
				line:"金融市场",
				approvalLimit:"500000000",
				usedLimit:"300000000"
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"3",
				line:"零售条线",
				approvalLimit:"300000000",
				usedLimit:"100000000"
			}
		],
		orgLimit:[
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"2",
				line:"企金条线",
				approvalLimit:"600000000",
				usedLimit:"150000000",
				updator:"唐虹"
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				orgID:"1011",
				orgName:"福州分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"2",
				line:"企金市场",
				approvalLimit:"600000000",
				usedLimit:"150000000",
				updator:"唐虹"
			}
		],
		busiLimit:[
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				busiID:'5302',
				busiName:'同业投资',
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"2",
				line:"企金条线",
				approvalLimit:"200000000",
				usedLimit:"100000000",
				updator:"唐虹"
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				busiID:'1101',
				busiName:'流动资金贷款',
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"2",
				line:"企金条线",
				approvalLimit:"400000000",
				usedLimit:"150000000",
				updator:"唐虹"
			},
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				busiID:'5301',
				busiName:'同业投资(CFP通道)',
				orgID:"1011",
				orgName:"福州分行",
				currencyID:"10",
				currency:"人民币",
				lineID:"2",
				line:"企金市场",
				approvalLimit:"600000000",
				usedLimit:"150000000",
				updator:"唐虹"
			}
		],
		selectedLimit:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},1000)
	},
	swichNav: function( e ) {  
      	var that = this;  
      	if( this.data.currentTab === e.target.dataset.current ) {  
      		return false;  
    	} else {  
      		that.setData( {  
        		currentTab: e.target.dataset.current  
      		})  
    	}  
  	},
  	bindChange: function( e ) {  
    	var that = this;  
    	that.setData( { currentTab: e.detail.current });  
  	},  
	onLoad: function(e) {
		var that = this;  
	    /** 
	     * 获取系统信息 
	     */  
	    wx.getSystemInfo( {  	  
	      success: function( res ) {  
	        that.setData( {  
	          winWidth: res.windowWidth,  
	          winHeight: res.windowHeight  
	        });  
	      }  
	    });  

		this.setData({
			customerID: e.custCode,
			customerName: e.custName,
			organizationId:e.organizationId,
			lineId: e.lineId
		});
    	console.log(this.data);
	}
})