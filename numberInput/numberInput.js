
function isValueNumber (value){
	return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
};
var numberInputComponent = Vue.component('input-number',{
	template: '\
	<div class="input-number">\
	<input \
		type="text"\
		:value="currentValue"\
		@change="handleChange"\
		@keydown="handlekeydown">\
	<button \
		@click="handleDown"\
		:display="currentValue <= min">-</button>\
	<button \
		@click="handleup"\
		:display="currentValue >= max">+</button>\
	</div>',
	props: {
		max: {
			type: Number,
			default: Infinity,
		},
		min: {
			type: Number,
			default: -Infinity,
		},
		value: {
			type: Number,
			default: 0,
		},
		step: {
			type: Number,
			default: 1,
		},
	},
	data: function(){
		return{
			currentValue: this.value
		}
	},
	watch: {
		currentValue: function(val){
			this.$emit('input',val);
			this.$emit('on-change',val);
		},
		value: function(val){
			this.updateValue(val);
		}
	},
	methods: {
		updateValue: function(val){
			if(val > this.max) val = this.max;
			if(val < this.min) val = this.min;
			this.currentValue = val;
		},
		handleup:function(){
			if(this.currentValue >= this.max) return;
			this.currentValue += this.step;
		},
		handleDown:function(){
			if(this.currentValue <= this.min) return;
			this.currentValue -= this.step;
		},
		handleChange:function(){
			var val = event.target.value.trim();
			var max = this.max;
			var min = this.min;

			if(isValueNumber(val)){
				val = Number(val);
				if (val > max){
					val = max;
				} else if (val < min) {
					val = min;
				};
				this.currentValue = val;
			}else{
				event.target.value = this.currentValue;
			};
		},
		handlekeydown:function(){
			var _this = this;
			if(event.keyCode == 38){
　　　　　		_this.handleup();
　　　　	}else if(event.keyCode == 40){
				_this.handleDown();
			}
		},
	},
	mounted: function(){
		this.updateValue(this.value);
	},
});