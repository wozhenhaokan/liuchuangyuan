//初始化echarts实例
const chart1 = echarts.init(document.getElementById("echarts1"));
const chart2 = echarts.init(document.getElementById("echarts2"));
const chart3 = echarts.init(document.getElementById("echarts3"));
const chart4 = echarts.init(document.getElementById("echarts4"));
const chart5 = echarts.init(document.getElementById("echarts5"));
const chart6 = echarts.init(document.getElementById("echarts6"));

$(function() {
	$('#container').imageLabel();
	$.contextMenu({
		selector: '.kbs-label-area',
		callback: function(key, options) {
			var e = window.event || arguments[0];
			$('#container').imageLabel('create', {
				top: $('.context-menu-list')[0].offsetTop || e.clientY,
				left: $('.context-menu-list')[0].offsetLeft || e.clientX
			});
		},
		items: {
			"create": {
				name: "新增标签"
			}
		}
	});
	/********** 执行图表 ****************/
	echarts1()
	echarts2()
	echarts3()
	echarts4()
	echarts5()
	echarts6()
});

function echarts1() {
	let option = {
		title: {
			text: '企业人才信息统计',
			top: 20,
			left: 'center',
			textStyle: {
				color: '#ffffff',
				fontWeight: 700,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 16
			}
		},
		// tooltip: {
		// 	trigger: 'item',
		// 	formatter: '{a} <br/>{b} : {c} ({d}%)'
		// },
		color:['#ffd000','#ffa800','#fd5a00'],
		series: [{
			name: '面积模式',
			type: 'pie',
			radius: ['30%', '100%'],
			center: ['50%', '50%'],
			roseType: 'area',
			top: '20%',
			labelLine: {
				lineStyle: {
					color: "#dadef8",
				},
			},
			label: {
				color: "#dadef8",
			},
			data: [{
					value: 465,
					name: '普通人才'
				},
				{
					value: 100,
					name: '高层次人才'
				},
				{
					value: 30,
					name: '留学人才'
				}
			]
		},{
			name: '面积模式',
			type: 'pie',
			hoverAnimation: false,
			radius: ['0%', '20%'],
			center: ['50%', '60%'],
			roseType: 'area',
			labelLine: {
				 show: false,
			},
			itemStyle: {
				color: '#000' ,
			},
			label: {
				color: "#dadef8",
				position: 'center',
				formatter:'{b}\n\n{c}'
			},
			data: [{
				value: 595,
				name: '总数量'
			}]
		}]
	};
	chart1.setOption(option);
}
function echarts2() {
	let option = {
		title: {
			text: '企业人才信息统计',
			top: 20,
			left: 'center',
			textStyle: {
				color: '#ffffff',
				fontWeight: 700,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 16
			}
		},
		// tooltip: {
		// 	trigger: 'item',
		// 	formatter: '{a} <br/>{b} : {c} ({d}%)'
		// },
		color:['#ffd000','#ffa800','#fd5a00'],
		series: [{
			name: '面积模式',
			type: 'pie',
			radius: ['30%', '100%'],
			center: ['50%', '50%'],
			roseType: 'area',
			top: '20%',
			labelLine: {
				lineStyle: {
					color: "#dadef8",
				},
			},
			label: {
				color: "#dadef8",
			},
			data: [{
					value: 465,
					name: '普通人才'
				},
				{
					value: 100,
					name: '高层次人才'
				},
				{
					value: 30,
					name: '留学人才'
				}
			]
		},{
			name: '面积模式',
			type: 'pie',
			hoverAnimation: false,
			radius: ['0%', '20%'],
			center: ['50%', '60%'],
			roseType: 'area',
			labelLine: {
				 show: false,
			},
			itemStyle: {
				color: '#000' ,
			},
			label: {
				color: "#dadef8",
				position: 'center',
				formatter:'{b}\n\n{c}'
			},
			data: [{
				value: 595,
				name: '总数量'
			}]
		}]
	};
	chart2.setOption(option);
}

function echarts3() {
	let option = {
		color: ["#25379c", "#f88832"],
		backgroundColor: '#dbdffa',
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			top: 120,
			containLabel: true
		},
		title: {
			text: '注册资本情况',
			top: 20,
			left: 'center',
			textStyle: {
				color: '#1b233f',
				fontWeight: 400,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 22
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			axisLabel: {
				color: '#656c9b',
				textStyle: {
					fontSize: '10'
				},
			},
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#acb2d6'
				}
			},
			data: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
		}],
		yAxis: [{
			type: 'value',
			name: '单位（万元）',
			nameTextStyle: {
				color: '#000'
			},
			axisLabel: {
				color: '#656c9b',
				textStyle: {
					fontSize: '12'
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#acb2d6'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#acb2d6'
				}
			}
		}],
		series: [{
			name: '注册资本情况',
			type: 'bar',
			barWidth: 14,
			data: [601, 590, 639, 800, 601, 590, 639, 800, 536, 754, 826, 655],
			// label: {
			// 	normal: {
			// 		show: true,
			// 		position: 'top',
			// 		fontSize: 12,
			// 		color: '#656c9b',
			// 		// offset: [4, -25]
			// 	}
			// },
		}]
	};
	chart3.setOption(option);
}

function echarts4() {
	let option = {
		color: ["#25379c", "#f88832"],
		backgroundColor: '#dbdffa',
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			top: 120,
			containLabel: true
		},
		title: {
			text: '人才学历统计',
			top: 20,
			left: 'center',
			textStyle: {
				color: '#1b233f',
				fontWeight: 400,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 22
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			axisLabel: {
				color: '#656c9b',
				textStyle: {
					fontSize: '10'
				},
			},
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#acb2d6'
				}
			},
			data: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
		}],
		yAxis: [{
			type: 'value',
			name: '单位（人）',
			nameTextStyle: {
				color: '#000'
			},
			axisLabel: {
				color: '#656c9b',
				textStyle: {
					fontSize: '12'
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#acb2d6'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#acb2d6'
				}
			}
		}],
		series: [{
			name: '人才学历统计',
			type: 'bar',
			barWidth: 7,
			data: [601, 590, 639, 800, 601, 590, 639, 800, 536, 754, 826, 655],
			// label: {
			// 	normal: {
			// 		show: true,
			// 		position: 'top',
			// 		fontSize: 12,
			// 		color: '#656c9b',
			// 		// offset: [4, -25]
			// 	}
			// },
		}]
	};
	chart4.setOption(option);
}

function echarts5() {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 0,
			  top: 10,
			containLabel: true
		},
		title: {
			text: '车位使用情况统计',
			top: 20,
			left: 20,
			textStyle: {
				color: '#ffffff',
				fontWeight: 700,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 16
			}
		},
		tooltip: {
			show: false
		},
		legend: {
			icon: 'roundRect',
			itemWidth: 20,
			itemHeight: 6,
			data: ['在用数量', '空闲数量'],
			formatter: function(name) {
				if (name == '在用数量') {
					return name + '：538人';
				} else {
					return name + '：252人';
				}
			},
			left: 'center',
			bottom: 20,
			textStyle: {
				color: "#ffffff",
				fontSize: 12,
				fontWeight: 400,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Regular',
			}
		},
		xAxis: [{
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false,
			},
		}],
		yAxis: [{
				//type: 'category',
				data: [0],
				axisTick: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: '#fff',
					}
				}
			},
			{
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				data: [790],
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: '#fff',
					}
				}
			}
		],
		series: [{
				name: '在用数量',
				type: 'bar',
				barWidth: 16,
				stack: '车位使用情况统计',
				label: {
					normal: {
						borderWidth: 10,
						distance: 20,
						align: 'center',
						verticalAlign: 'middle',
						borderRadius: 1,
						borderColor: '#ffd000',
						backgroundColor: '#ffd000',
						show: true,
						position: 'top',
						formatter: '{c}',
						color: '#000',
						fontSize: 12,
					}
				},
				itemStyle: {
					color: '#5663b0',
					borderColor:'#5663b0',
					borderWidth:1
				},
				data: [{
					value: 538,
					itemStyle: {
						normal: {
							borderRadius: [10, 0, 0, 10],
						}
					}
				}]
			},
			{
				name: '空闲数量',
				type: 'bar',
				barWidth: 16,
				stack: '车位使用情况统计',
				itemStyle: {
					color: '#0f1116',
					borderColor:'#5663b0',
					borderWidth:1
				},
				data: [{
					value: 252,
					itemStyle: {
						normal: {
							barBorderRadius: [0, 10, 10, 0],
						}
					}
				}]
			}
		]
	};
	chart5.setOption(option);
}
function echarts6() {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 0,
			  top: 10,
			containLabel: true
		},
		title: {
			text: '车位使用情况统计',
			top: 20,
			left: 20,
			textStyle: {
				color: '#ffffff',
				fontWeight: 700,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 16
			}
		},
		tooltip: {
			show: false
		},
		legend: {
			icon: 'roundRect',
			itemWidth: 20,
			itemHeight: 6,
			data: ['在用数量', '空闲数量'],
			formatter: function(name) {
				if (name == '在用数量') {
					return name + '：538人';
				} else {
					return name + '：252人';
				}
			},
			left: 'center',
			bottom: 20,
			textStyle: {
				color: "#ffffff",
				fontSize: 12,
				fontWeight: 400,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Regular',
			}
		},
		xAxis: [{
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false,
			},
		}],
		yAxis: [{
				//type: 'category',
				data: [0],
				axisTick: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: '#fff',
					}
				}
			},
			{
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				data: [790],
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: '#fff',
					}
				}
			}
		],
		series: [{
				name: '在用数量',
				type: 'bar',
				barWidth: 16,
				stack: '车位使用情况统计',
				label: {
					normal: {
						borderWidth: 10,
						distance: 20,
						align: 'center',
						verticalAlign: 'middle',
						borderRadius: 1,
						borderColor: '#ffd000',
						backgroundColor: '#ffd000',
						show: true,
						position: 'top',
						formatter: '{c}',
						color: '#000',
						fontSize: 12,
					}
				},
				itemStyle: {
					color: '#5663b0',
					borderColor:'#5663b0',
					borderWidth:1
				},
				data: [{
					value: 538,
					itemStyle: {
						normal: {
							borderRadius: [10, 0, 0, 10],
						}
					}
				}]
			},
			{
				name: '空闲数量',
				type: 'bar',
				barWidth: 16,
				stack: '车位使用情况统计',
				itemStyle: {
					color: '#0f1116',
					borderColor:'#5663b0',
					borderWidth:1
				},
				data: [{
					value: 252,
					itemStyle: {
						normal: {
							barBorderRadius: [0, 10, 10, 0],
						}
					}
				}]
			}
		]
	};
	chart6.setOption(option);
}
