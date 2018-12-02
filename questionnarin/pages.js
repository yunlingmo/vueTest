Vue.component('page',{
	template: '\
	<div :class="pageCls()" >\
		<div clss="title">{{this.title}}</div>\
		<div class="contain">\
			<slot name="contain"></slot>\
		</div>\
		<div class="footer">\
			<slot name="footer"></slot>\
		</div>\
	</div>',
	data: function(){
		return{
			currentPage: this.pageindex,			
		}
	},
	props: {
		pageindex:{
			type: [Number]
		},
		title:{
			type: [String,Number]
		},
		activeKey:{
			type: [Number]
		}
	},
	methods: {
		pageCls: function(){
			console.log(this.activeKey,this.pageindex,'111')
			return [
				'page-tab',{
					'page-active': this.activeKey == this.currentPage
				}
			]
		},
		clearContain: function(){
			this.$emit('clearcontain',this.currentPage)
		},
		nextPage: function(){
			this.$emit('updateactivekey',this.currentPage+1)
		},
		prePage: function(){
			this.$emit('updateactivekey',this.currentPage-1)
		},
		submit: function(){
			
		},
	}
})