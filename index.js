var app = new Vue({
	el: '#app',
	data: {
		list:
		[
			[{
				id: 1,
				name: 'apple',
				price: 2,
				count: 1,
			},{
				id: 2,
				name: 'banana',
				price: 3,
				count: 1,

			}],
		[
			{
				id: 3,
				name: 'iphone 7',
				price: 6188,
				count: 1,
			},{
				id: 4,
				name: 'iPad pro',
				price: 5888,
				count: 1,
			},
			{
				id: 5,
				name: 'MacBook pro',
				price: 21488,
				count: 1,
			}
		],
		[
				{
					id: 6,
					name: '牛仔裤',
					price: 100,
					count: 1,
				},{
					id: 7,
					name: '连衣裙',
					price: 200,
					count: 1,

				}
		]
			
		],
		selectList:[],
	},
	computed: {
		listLength:function(){
			var listLength = 0;
			for(let i=0; i<this.list.length;i++){
				listLength += this.list[i].length;
			};
			return listLength;			
		},
		totalPrice:function(){
			var total = 0;
			for(var i=0; i<this.selectList.length; i++){
				var item = this.selectList[i];
				total += item.price * item.count;
			};
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods: {
		handleReduce:function(listIndex,index){
			if(this.list[listIndex][index].count == 1) return;
			this.list[listIndex][index].count--;
		},
		handleAdd:function(listIndex,index){
			this.list[listIndex][index].count++;
		},
		handleRemove:function(listIndex,index){
			this.list[listIndex].splice(index,1);
			let item = this.list[listIndex].splice[index];
			this.selectList.splice(item,1);
		},
		selectOne:function(item){
			let idIndex = this.selectList.indexOf(item);
			if(idIndex >= 0){
				this.selectList.splice(idIndex,1);
			}else{
				this.selectList.push(item);
			}
		},
		selectAll:function(){
			debugger
			if(this.selectList.length === this.listLength){
				this.selectList = [];
			}else{
				this.selectList = [];
				for(let index in this.list){
					for(let item in this.list[index]){
						this.selectList.push(this.list[index][item]);
					}
				}
			}
		},

	}
});