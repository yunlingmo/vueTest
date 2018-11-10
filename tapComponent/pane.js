Vue.component('pane',{
	name:'pane',
	template:'\
		<div class="pane" v-show="show">\
				<slot></slot>\
		</div>',
	data:function(){
		return {
			show: true
		}
	},
	props:{
		name:{
			type:String
		},
		label:{
			type:String,
			default:''
		}
	},
	methods:{
		updateNav(){
			debugger
			this.$parent.updateNav();
		}
	},
	// watch:{
	// 	label(){
	// 		debugger
	// 		this.updateNav();
	// 	}
	// },
	mounted(){
		debugger
		this.updateNav();
	}
})