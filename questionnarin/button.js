
Vue.component('buttonslef',{
	template: '\
	<div>\
		<button \
			v-for="(item, index) in buttonStyle" :disabled="buttonDisabled[index]" :class="buttonCls(index)"\
			@click="handleChange(item)">\
			{{item}}\
		</button>\
	</div>',
	props: ['buttonStyle','color','buttonAble'],
	// data: function(){
	// },
	computed: {
		buttonDisabled: function(){
			var bStyle = [];
			console.log(this.buttonAble, 'this.buttonAble')
			for(var i=0;i<this.buttonAble.length;i++){
				if(this.buttonAble[i] == 'disableButton'){
					bStyle.push(true)
				}else{
					bStyle.push(false)
				}				
			}
			console.log(bStyle, 'bStyle')
			return bStyle
		}
	},	
	methods: {
		handleChange: function(item){
			if('clear' == item){
				this.$parent.clearContain();
			}else if('next' == item){
				this.$parent.nextPage();
			}else if('pre' == item){
				this.$parent.prePage();
			}else if('submit' == item){
				this.$parent.submit();
			}
		},
		buttonCls: function(index){
			return ['buttonClass',this.color[index],this.buttonAble[index]]
		}
	}
})