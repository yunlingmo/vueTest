// var Time = {
// 	getUnix: function(){
// 		var date = new Date();
// 		return date.getTime();
// 	},
// 	getTodayUnitx: function(){
// 		var date = new Date();
// 		date.setHours(0);
// 		date.setMinutes(0);
// 		date.setSeconds(0);
// 		date.setMilliseconds(0); //设置毫秒
// 		return date.getTime();
// 	},
// 	getyearUnitx: function(){
// 		var date = new Date();
// 		date.setMonth(1);
// 		date.setDate(1);
// 		date.setSeconds(0);
// 		date.setHours(0);
// 		date.setMinutes(0);
// 		date.setSeconds(0);
// 		date.setMilliseconds(0); //设置毫秒
// 		return date.getTime();
// 	},
// 	getLastDate: function(time){
// 		var date = new Date(time);
// 		var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;		
// 		var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
// 		return date.getFullYear() + '-' + month + '-' + day;
// 	},
// 	getFormatTime: function(timeStamp){
// 		var now = this.getUnix();
// 		var today = this.getTodayUnitx();
// 		var year = this.getyearUnitx();
// 		var timeDistance = (now - timeStamp) / 1000;
// 		var tip = '';
// 		if(timeDistance < 0){
// 			tip = 'error';
// 		}else if(timeDistance < 60){
// 			tip = '刚刚';
// 		}else if(timeDistance < 3600){
// 			tip = Math.floor(timeDistance/60) + '分钟前';
// 		}else if(timeDistance < 86400){
// 			tip = Math.floor(timeDistance/3600) + '小时前';
// 		}else if(timeDistance < 2678400){
// 			tip = Math.floor(timeDistance/86400) + '天';
// 		}else{
// 			tip = this.getLastDate(timeStamp);
// 		};
// 		return tip;
// 	}

// };

var BirdthDay = {
	data: function(){
		var dataHash = {};
		var days = inputDay.split('-');
		dataHash.inputYear = days[0];
		dataHash.inputMonth = days[1];
		dataHash.inputDay = days[2];

		var date = new Date();
		dataHash.nowYear = date.getFullYear();
		dataHash.nowMonth = date.getMonth()+1;
		dataHash.nowDay = date.getDate();
		return dataHash;
	},
	getyearType: function(year){
		var yearType = '';
		if(year%4==0 && year%100!=0 || year%400==0){
			yearType = 'ruinian';
		}else{
			yearType = 'pingnian';
		};
		return yearType;
	},
	getDays1: function(inputDay){
		var days = inputDay.split('-');
		var inputYear = days[0];
		var inputMonth = days[1];
		var inputDay = days[2];
		var totalDays1 = 0;
		for(let i=inputMonth; i<=12; i++){
			if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12){
				totalDays1 += 31;
			}else if(i==4 || i==6 || i==9 || i==11){
				totalDays1 += 30;
			}else if(i == 2){
				var yearType = this.getyearType(inputYear);
				totalDays1 += (yearType == 'pingnian' ? 28 :29);
			};
			return totalDays1 - inputDay;
		}
	},
	getDays2: function(){
		var date = new Date();
		var nowYear = date.getFullYear();
		var nowMonth = date.getMonth()+1;
		var nowDay = date.getDate();
		var totalDays2 = 0;
		for(let i=1; i<=nowMonth; i++){
			if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12){
				totalDays2 += 31;
			}else if(i==4 || i==6 || i==9 || i==11){
				totalDays2 += 30;
			}else if(i == 2){
				var yearType = this.getyearType(nowYear);
				totalDays2 += (yearType == 'pingnian' ? 28 : 29);
			};
			return totalDays2 + totalDays2;
		}
	},
	getDays3: function(inputDay){
		var date = new Date();
		var nowYear = date.getFullYear();
		var days = inputDay.split('-');
		var inputYear = days[0];
		var totalDay3 = 0;
		for(let sd = inputYear+1; sd<nowYear; sd++){
			var yearType = this.getyearType(nowYear);
			totalDay3 += (yearType == 'pingnian' ? 365 : 366);
		};
		return totalDay3;
	},
	getBirthDays: function(inputday){
		var totalDays = this.getDays1(inputday) + this.getDays2() + this.getDays3(inputday);
		return totalDays;
	}
};

// Vue.directive('time',{
// 	bind: function(el,binding){
// 		el.innerHTML = Time.getFormatTime(binding.value);
// 		el._timeOut_ = setInterval(function(){
// 			el.innerHTML = Time.getFormatTime(binding.value);
// 		},6000);
// 	},
// 	unbind: function(){
// 		clearInterval(el._timeOut_);
// 		delete el._timeOut_;
// 	}
// })

Vue.directive('birthday',{
	bind: function(el,binding){
		debugger
		var innerHTML = BirdthDay.getBirthDays(binding.value);
		el.innerHTML = innerHTML;
		// document.getElementById("spanId").innerHTML = innerHTML;
		 // document.getElementById("spanId").innerHTML = 74;
	},
	update: function(el,binding){
		debugger
		var innerHTML = BirdthDay.getBirthDays(binding.value);
		el.innerHTML = innerHTML;	
	},
	unbind: function(){
		debugger
	}
})