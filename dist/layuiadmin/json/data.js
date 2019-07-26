table.render({
						elem: '#test',
						url: '../json/data.json',
						toolbar: '#toolbarDemo',
						title: '用户数据表',
						totalRow: false,
						cols: [
							[{
								type: 'checkbox',
								fixed: 'left'
							}, {
								field: 'bh',
								title: '岗位编号',
								unresize: true,
								sort: true
							}, {
								field: 'bm',
								title: '岗位编码',
								edit: 'text'
							}, {
								field: 'name',
								title: '岗位名称',
								edit: 'text'
							}, {
								field: 'sx',
								title: '显示顺序',
								sort: true
							}, {
								field: 'status',
								title: '状态',
								edit: 'text'
							}, {
								field: 'ct',
								title: '创建时间',
								sort: true
							}, {
								fixed: 'right',
								title: '操作',
								toolbar: '#barDemo',
								width: 150
							}]
						]
					});
					      "status": "正常",
	  "ct": "2018-03-16 11:33:00"
    },
    {
      "bh": 1002,
      "bm": 102,
      "name": "xx",
      "sx": "1",
      "status": "正常",
      "ct": "2018-03-16 11:33:00"
    },
	{
	  "bh": 1003,
	  "bm": 103,
	  "name": "xx",
	  "sx": "1",
	  "status": "正常",
	  "ct": "2018-03-16 11:33:00"
	},
	{
	  "bh": 1004,
	  "bm": 104,
	  "name": "xx",
	  "sx": "1",
	  "status": "正常",
	  "ct": "2018-03-16 11:33:00"
	}
  ],
  "count": 4
}
