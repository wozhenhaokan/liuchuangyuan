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
	var data = [{
			value: 181,
			name: '软件著作权'
		},
		{
			value: 220,
			name: '专利技术'
		},
		{
			value: 210,
			name: '商标权'
		}]
	let option = {
		title: {
			text: '知识产权统计',
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
		color: ['#ffd000', '#ffa800', '#fd5a00'],
		series: [{
			name: '面积模式',
			type: 'pie',
			radius: ['20%', '85%'],
			center: ['50%', '50%'],
			top:'10%',
			roseType: 'area',
			labelLine: {
				show: false,
			},
			label: {
				color: "#000",
				position: 'inside',
				fontSize: 14,
				formatter: '{b}\n\n{d}%'
			},
			data: data.map(item => {
				return {
					value: logNum(item.value),
					name: item.name
				}
			})
		}, {
			name: '面积模式',
			type: 'pie',
			hoverAnimation: false,
			radius: ['0%', '20%'],
			center: ['50%', '50%'],
			top:'10%',
			roseType: 'area',
			labelLine: {
				show: false,
			},
			itemStyle: {
				color: '#000',
			},
			label: {
				color: "#dadef8",
				position: 'center',
				formatter: '{b}',
				fontSize: 15,
			},
			data: [{
				value: 595,
				name: '知识产权'
			}]
		}]
	};
	chart1.setOption(option);
}

function echarts2() {
	var data = [{
			value: 173,
			name: '1年'
		},
		{
			value: 200,
			name: '2年'
		},
		{
			value: 110,
			name: '3年'
		}, {
			value: 32,
			name: '4年'
		}]
	let option = {
		title: {
			text: '企业在园时间',
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
		color: ['#ffd000', '#ffa800', '#fd5a00'],
		series: [{
			name: '面积模式',
			type: 'pie',
			radius: ['20%', '85%'],
			center: ['50%', '50%'],
			top:'10%',
			roseType: 'area',
			labelLine: {
				show: false,
			},
			label: {
				color: "#000",
				position: 'inside',
				fontSize: 14,
				formatter: '{b}\n\n{d}%'
			},
			data: data.map(item => {
				return {
					value: logNum(item.value),
					name: item.name
				}
			})
		}, {
			name: '面积模式',
			type: 'pie',
			hoverAnimation: false,
			radius: ['0%', '20%'],
			center: ['50%', '50%'],
			top:'10%',
			roseType: 'area',
			labelLine: {
				show: false,
			},
			itemStyle: {
				color: '#000',
			},
			label: {
				color: "#dadef8",
				position: 'center',
				formatter: '{b}',
				fontSize: 15,
			},
			data: [{
				value: 595,
				name: '在园时间'
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
			right: 40,
			bottom: 0,
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
			nameTextStyle: {
				color: '#000'
			},
			name: '金额',
			axisLabel: {
				color: '#656c9b',
				textStyle: {
					fontSize: '10'
				},
				rotate: 40
			},
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#acb2d6'
				}
			},
			data: ["50以下", "50-100", "100-200", "200-300", "300-500", "500-1000", "1000以上"]
		}],
		yAxis: [{
			type: 'value',
			name: '企业数量',
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
			data: [48, 130, 38, 70, 50, 90, 80],
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
			right: 40,
			bottom: 25,
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
			name: '学历',
			nameTextStyle: {
				color: '#000'
			},
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
			data: ["高中及以下", "专科", "本科", "硕士", "博士"]
		}],
		yAxis: [{
			type: 'value',
			name: '人数',
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
			barWidth: 14,
			data: [3000, 2600, 3200, 2700, 3000],
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
			text: '留学人员创业公司统计',
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
			data: ['留学人员创办企业', '其他企业'],
			formatter: function(name) {
				if (name == '留学人员创办企业') {
					return name + '：100家';
				} else {
					return name + '：408家';
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
			max:508
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
				data: [508],
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: '#fff',
					}
				}
			}
		],
		series: [{
				name: '留学人员创办企业',
				type: 'bar',
				barWidth: 16,
				stack: '留学人员创业公司统计',
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
					borderColor: '#5663b0',
					borderWidth: 1,
				},
				data: [{
					value: 100,
					itemStyle: {
						normal: {
							borderRadius: [10, 0, 0, 10],
						}
					}
				}]
			},
			{
				name: '其他企业',
				type: 'bar',
				barWidth: 16,
				stack: '留学人员创业公司统计',
				itemStyle: {
					color: '#ffffff',
					borderColor: '#ffffff',
					borderWidth: 1
				},
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
				data: [{
					value: 408,
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
			text: '企业类型统计',
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
			data: ['科小企业', '高新企业', '其他'],
			formatter: function(name) {
				if (name == '科小企业') {
					return name + '：538家';
				} else if (name == '高新企业') {
					return name + '：189家';
				} else {
					return name + '：102家';
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
			max:829
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
				data: [829],
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: '#fff',
					}
				}
			}
		],
		series: [{
				name: '科小企业',
				type: 'bar',
				barWidth: 16,
				stack: '企业类型统计',
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
					borderColor: '#5663b0',
					borderWidth: 1
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
				name: '高新企业',
				type: 'bar',
				barWidth: 16,
				stack: '企业类型统计',
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
					color: '#a9b2ea',
					borderColor: '#a9b2ea',
					borderWidth: 1
				},
				data: [{
					value: 189,
				}]
			},
			{
				name: '其他',
				type: 'bar',
				barWidth: 16,
				stack: '企业类型统计',
				itemStyle: {
					color: '#ffffff',
					borderColor: '#ffffff',
					borderWidth: 1
				},
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
				data: [{
					value: 102,
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


// 解决差值过大问题
function logNum(num) {
	return (Math.log(num) + 1)
}
