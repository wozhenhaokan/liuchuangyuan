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
	echarts1('月')
	echarts2('月')
	echarts3('月')
	echarts4('月')
	echarts5('月')
	echarts6('月')
	
	//导航菜单切换
	$('.navItems').click(function() {
		$(this).addClass('active').siblings().removeClass('active')
	})
	//点击顶部select
	$('.nav_selectItem').click(function() {
		$('.select_option').slideToggle()
	})
	$('.select_option li').click(function() {
		$('.nav_selectItem_value').text($(this).text())
	})
	
	// echarts切换年月
	$('.navList span').click(function() {
		$(this).addClass('active').siblings().removeClass('active')
		var echartsId = $(this).parent('.navList').siblings('.echarts')[0].id
		console.log(echartsId)
		// 更新echarts视图
		switch (echartsId) {
			case 'echarts1':
				echarts1($(this).text())
				if($(this).text() == '年'){
					$('#yearItem_echarts1').hide()
				}else{
					$('#yearItem_echarts1').show()
				}
				break;
			case 'echarts2':
				echarts2($(this).text())
				if($(this).text() == '年'){
					$('#yearItem_echarts2').hide()
				}else{
					$('#yearItem_echarts2').show()
				}
				break;
			case 'echarts3':
				echarts3($(this).text())
				if($(this).text() == '年'){
					$('#yearItem_echarts3').hide()
				}else{
					$('#yearItem_echarts3').show()
				}
				break;
			case 'echarts4':
				echarts4($(this).text())
				if($(this).text() == '年'){
					$('#yearItem_echarts4').hide()
				}else{
					$('#yearItem_echarts4').show()
				}
				break;
			case 'echarts5':
				echarts5($(this).text())
				if($(this).text() == '年'){
					$('#yearItem_echarts5').hide()
				}else{
					$('#yearItem_echarts5').show()
				}
				break;
			case 'echarts6':
				echarts6($(this).text())
				if($(this).text() == '年'){
					$('#yearItem_echarts6').hide()
				}else{
					$('#yearItem_echarts6').show()
				}
				break;

		}
	})
	// echarts切换显示的年份
	$('#yearItem_echarts1').change(function () {
		console.log($("#yearItem_echarts1 option:selected").text())
		echarts1('月',$("#yearItem_echarts1 option:selected").text())
	})
	
});

function echarts1(dateType,year) { // dateType选择的年或月   year  当dateType是月时，选择的年份，可以自定一个默认值
	year = year || '2021年'
	// 可以在这边获取数据
	var data = [{dates:[],values:[]}]
	if(dateType == '年'){
		data.dates = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
		data.values = [601, 590, 639, 800, 601, 590, 639, 800, 536, 754, 826, 655]
	}else{
		// 使用year参数获取某年的数据
		data.dates = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		if(year == '2021年'){
			data.values = [401, 390, 439, 500, 401, 390, 239, 400, 336, 454, 326, 555]
		}else if(year == '2022年'){
			data.values = [601, 590, 639, 800, 601, 590, 639, 800, 536, 754, 826, 655]
		}
	}
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
			// data: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
			data:data.dates
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
			// data: [601, 590, 639, 800, 601, 590, 639, 800, 536, 754, 826, 655],
			data: data.values,
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
		}, {
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
		}, {
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
		}, {
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
