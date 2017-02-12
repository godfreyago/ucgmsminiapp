var app = getApp()
Page({
	data: {
		hidden:true,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				limitId:1,
				name:'客户额度'
			},
			{
				limitId:2,
				name:'条线额度'
			},
			{
				limitId:3,
				name:'机构额度'
			},
			{
				limitId:4,
				name:'品种额度'
			}
		],
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
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
	},
	onLoad () {
		
	}
})