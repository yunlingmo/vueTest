var app = new Vue({
	el: '#app',
	data: {
		columns: [
			{
				title: '姓名',
				key: 'name'
			},
			{
				title: '年龄',
				key: 'age',
				sortable: true
			},
			{
				title: '出生日期',
				key: 'birthday',
				sortable: true
			},
			{
				title: '地址',
				key: 'address'
			}
		],
		data: [
			{
				name: '傻鳄',
				age: 3,
				birthday: '2015-12-12',
				address: '傻狗路66号'
			},{
				name: '傻蛋',
				age: 2,
				birthday: '2016-12-12',
				address: '傻狗路66号'
			},{
				name: '傻黄',
				age: 5,
				birthday: '2013-12-12',
				address: '傻狗路66号'
			}
		]
	}
});