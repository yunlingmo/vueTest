var vm = new Vue({
	el:'#app',
	data:{
		taskData:{
			desctrip: '',
			isComplete: false,
			isDelete: false,
		},
		taskList: []
	},
	methods:{
		addTask:function(){
			this.taskList.push(this.taskData);
           	this.taskData = {
              	desctrip:'',//内容为空
		        isComplete:false,//未完成
		        isDelete:false//未删除
      		}
		},
		taskCheck:function(index){
			let completeFlag = this.taskList[index].isComplete;
			this.taskList[index].isComplete = !completeFlag;
		},
		deleteTask:function(index){
			debugger
			this.taskList.splice(index,1);
		}
	}
})