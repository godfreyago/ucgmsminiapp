var app = getApp()
Page({
	data: {
		hidden:true,
		currentTab:0,
		cart:[],
		cartTotal:0, 
    	winWidth: 0,  
    	winHeight: 0,  
		customerLimit:[
			{
				customerID:"74959946-5",
				customerName:"百联集团有限公司",
				orgID:"1034",
				orgName:"重庆分行",
				currencyID:"10",
				currency:"人民币",
				approvalLimit:"600000000",
				usedLimit:"300000000",
				updator:"唐虹"
			}
		],
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
				approvalLimit:"600000000",
				usedLimit:"300000000"
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
		dishesList:[
			[
				{
					customerName:"红烧肉",
					price:38,
					num:1,
					id:1
				}
			],
			[
				{
					name:"小炒日本豆腐",
					price:18,
					num:1,
					id:3
				},
				{
					name:"烤鱼",
					price:58,
					num:1,
					id:4
				}
			],
			[
				{
					name:"大拌菜",
					price:18,
					num:1,
					id:5
				},
				{
					name:"川北凉粉",
					price:8,
					num:1,
					id:6
				}
			],
			[]
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