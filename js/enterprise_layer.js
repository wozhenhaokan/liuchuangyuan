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
		color: ["#25379c", "#f88832"],
		backgroundColor: '#c8cffa',
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			top: 120,
			containLabel: true
		},
		title: {
			text: '启动资金补贴',
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
			name: '启动资金补贴',
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
	chart1.setOption(option);
}

function echarts2() {
	let option = {
		color: ["#25379c", "#f88832"],
		backgroundColor: '#c8cffa',
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			top: 120,
			containLabel: true
		},
		title: {
			text: '房租补贴',
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
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
			name: '房租补贴',
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
			text: '人才公寓补贴',
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
			name: '人才公寓补贴',
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
			text: '注册项目/入园企业',
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
			name: '单位（个）',
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
			name: '注册项目',
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
		},{
			name: '入园企业',
			type: 'bar',
			barWidth: 7,
			data: [401, 390, 439, 500, 401, 390, 239, 400, 336, 454, 326, 555],
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
		color: ["#25379c", "#f88832"],
		backgroundColor: '#c8cffa',
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			top: 120,
			containLabel: true
		},
		title: {
			text: '营收和利润',
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
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
			name: '营收',
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
		},{
			name: '利润',
			type: 'bar',
			barWidth: 7,
			data: [401, 390, 439, 500, 401, 390, 239, 400, 336, 454, 326, 555],
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
	chart5.setOption(option);
}

function echarts6() {
	let option = {
		color: ["#25379c", "#f88832"],
		backgroundColor: '#c8cffa',
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			top: 120,
			containLabel: true
		},
		title: {
			text: '资产和负债',
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
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
			name: '资产',
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
		},{
			name: '负债',
			type: 'bar',
			barWidth: 7,
			data: [401, 390, 439, 500, 401, 390, 239, 400, 336, 454, 326, 555],
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
	chart6.setOption(option);
}