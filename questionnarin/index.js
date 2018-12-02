var vm = new Vue({
	el:'#app',
	data:{
		activeKey: 1,
		buttons1:['next','clear'],
		buttons2:['pre','clear','next'],
		buttons3:['pre','clear','submit'],
		pageindex1: 1,
		pageindex2: 2,
		pageindex3: 3,
		checkboxed: [],
		packed: '',
		textareaContain: '',
		color1: ['backgroundRed','backgroundGreen'],
		color2: ['backgroundRed','backgroundGreen','backgroundBlue'],
		color3: ['backgroundRed','backgroundGreen','backgroundBlue'],
		// buttonAble1: ['able','able'],
		// buttonAble2: ['able','able','able'],
		// buttonAble3: ['able','able','able'],
	},
	watch: {
	    // packed: function (newV, oldV) {
	    // 	console.log(newV,'nn')
	    // 	console.log(oldV,'oo')
	    // 	if (this.packed == ''){
	    // 		this.buttonAble1 = ['disableButton','disableButton']
	    // 	}
	    // },
	    //  checkboxed: function () {
	    // 	if (this.packed == ''){
	    // 		this.buttonAble1 = ['disableButton','disableButton']
	    // 	}
	    // },
	    //  textareaContain: function () {
	    // 	if (this.packed == ''){
	    // 		this.buttonAble1 = ['disableButton','disableButton']
	    // 	}
	    // }
  	},
  	computed: {
  		buttonAble1(){
  			if(this.packed == ''){
  				return ['disableButton','disableButton']
  			}else{
  				return ['able','able']
  			}
  		},
  		buttonAble2(){
  			if(this.checkboxed.length == 2){
  				return ['able','able','able']
  			}else if(this.checkboxed.length > 0){
  				return ['able','able','disableButton']
  			}else{
  				return ['able','disableButton','disableButton']
  			}
  		},
  		buttonAble3(){
  			if(this.textareaContain == ""){
  				return ['able','disableButton','disableButton']
  			}else{
  				return ['able','able','able']
  			}
  		}
  	},
	methods: {
		updateActiveKeyEvent(indexKey){			
			this.activeKey = indexKey;
		},
		clearContainEvent(clearnPage){
			if(clearnPage == this.pageindex1){
				this.packed = ""
			}else if(clearnPage == this.pageindex2){
				this.checkboxed = []
			}else if(clearnPage == this.pageindex3){
				this.textareaContain = ''
			}
		},
		// buttonAble1: function () {
		// 	debugger
	 //    	if (this.packed == ''){
	 //    		return ['disableButton','disableButton']
	 //    	}else{
	 //    		return ['ableButton','ableButton']
	 //    	}
	 //    },
	 //     buttonAble2: function () {
	 //    	if (this.packed == ''){
	 //    		return ['disableButton','disableButton']
	 //    	}else{
	 //    		return ['ableButton','ableButton']
	 //    	}
	 //    },
	 //     buttonAble3: function () {
	 //    	if (this.packed == ''){
	 //    		return ['disableButton','disableButton']
	 //    	}else{
	 //    		return ['ableButton','ableButton']
	 //    	}
	 //    }
	}
})