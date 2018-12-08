Vue.component('vTable',{
	props:{
		columns: {
			type: Array,
			default: function(){
				return [];
			}
		},
		data: {
			type: Array,
			default: function(){
				return [];
			}
		},
		currentWidth: {
			type: Array,
			default: function(){
				return [];
			}
		},

	},
	data: function(){
		return {
			currentColumns: [],
			currentData: [],
			starChange: false,
			startX: 0
		}
	},
	render: function(h){
		var _this = this;
		var ths = [];
		var trs = [];
		var cols = [];
		this.currentData.forEach( function(row,index) {
			var tds = [];
			_this.currentColumns.forEach( function(cel) {
				tds.push(h('td',row[cel.key]));
			});
			trs.push(h('tr',tds));
		});

		this.currentColumns.forEach( function(col, index) {
			var changeFunction = {};
			var className = "";
			cols.push(h('col',{
				attrs: {style:_this.showStyle(index)},
			}));
			if(col.changeWidth){
				changeFunction = {
						mousedown: function(){
							_this.onmousedownEvent(index)
						}
				};
				className = 'resizeClass';
			};
			if(col.sortable){
				ths.push(h('th'						
					,[
						h('span',{
							on:changeFunction,
							class:className,
						}),
						h('span',col.title),
						h('a',{
							class: {
								on: col._sortType === 'asc'
							},
							on: {
								click: function(){
									_this.handleSortByAsc(index)
								}
							}
						},'↑'),
						h('a',{
							class: {
								on: col._sortType === 'deac'
							},
							on: {
								click: function(){
									_this.handleSortByDesc(index)
								}
							}
						},'↓'),
					]))
			}else{
				
				ths.push(h('th',[
						h('span',{
							on:changeFunction,
							class:className
						}),
						h('span',col.title)]));
			};
		});

		return h('table',[
					h('colgroup',cols),
					h('thead',[
						h('tr',ths)
					]),
					h('tbody',trs)
				])
	},
	methods: {
		makeColumns: function(){
			this.currentColumns = this.columns.map(function(col,index){
				col._sortType = 'normal';
				col._changeWidth = false;
				col._index = index;
				return col;
			})
		},
		makeData: function(){
			this.currentData = this.data.map(function(row,index){
				row._index = index;
				return row;
			})
		},
		showStyle: function(index){
			var width = this.currentWidth[index];
			return 'width:'+ width+'px;'
		},
		handleSortByAsc: function(index){
			var key = this.currentColumns[index].key;
			this.currentColumns.forEach( function(col) {
				col._sortType = 'normal';
			});
			this.currentColumns[index]._sortType = 'asc';
			this.currentData.sort(function(a,b){
				return a[key] > b[key] ? 1 : -1;
			});
		},
		handleSortByDesc: function(index){
			var key = this.currentColumns[index].key;
			this.currentColumns.forEach( function(col) {
				col._sortType = 'normal';
			});
			this.currentColumns[index]._sortType = 'desc';
			this.currentData.sort(function(a,b){
				return a[key] < b[key] ? 1 : -1;
			});
		},
		onmousedownEvent: function(index){
			var changeFlag = true;
			this.startX = event.clientX;
			this.$emit('change-width',index,this.startX,changeFlag);
			console.log('onmousedownEvent',index,this.startX,changeFlag)
		},
	},
	mounted (){
		this.makeColumns();
		this.makeData();
	},
	watch: {
		data: function(){
			this.makeData();
			var sortedColumn = this.currentCoumns.filter(function(col){
				return col._sortType !== 'normal';
			});
			if(sortedColumn.length > 0){
				if(sortedColumn[0]._sortType === 'asc'){
					this.handleSortByAsc(sortedColumn[0].index);
				}else if(sortedColumn[0]._sortType === 'desc'){
					this.handleSortByDeac(sortedColumn[0].index);
				};
			}
		}
	} 

});