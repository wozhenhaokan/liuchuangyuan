
//初始化echarts实例
const chart1 = echarts.init(document.getElementById("echarts1"));
const chart2 = echarts.init(document.getElementById("echarts2"));
const chart3 = echarts.init(document.getElementById("echarts3"));
const chart4 = echarts.init(document.getElementById("echarts4"));
const chart5 = echarts.init(document.getElementById("echarts5"));
const chart6 = echarts.init(document.getElementById("echarts6"));

$(function() {
	
	/********** 执行图表 ****************/
	echarts1()
	echarts2()
	echarts3()
	echarts4()
	echarts5()
	echarts6()
	var map = new BMapGL.Map('container'); // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(121.188572,37.571752), 11); // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
	
	//业达智谷，long=121.188572,lat=37.571752
	makePoint(121.188572,37.571752,'业达智谷',map,function(item){
		console.log(item)
	})
	//烟台留学人员创业园区,long=121.003530,lat=37.545299
	makePoint(121.003530,37.545299,'烟台留学人员创业园区',map,function(item){
		console.log(item)
	})
});
// 创建地图中的点
function makePoint (long,lat,str,mapObject,callback) {
	var point = new BMapGL.Point(long, lat);
	var marker = new BMapGL.Marker(point);        // 创建标注
	mapObject.addOverlay(marker);
	var label = new BMapGL.Label(makeBubl(str), {       // 创建文本标注
	    position: point,                          // 设置标注的地理位置
	    offset: new BMapGL.Size(-50, -60)           // 设置标注的偏移量
	})  
	label.setStyle({                              // 设置label的样式
	    border: '2px solid #fff'
	})
	mapObject.addOverlay(label)
	marker.addEventListener("click", function(e){
		callback(e)   
	});
}
// 创建标注
function makeBubl (str) {
	let html = ""
	html +='<div style="width:150px;text-align:center;padding:0px 10px;white-space: pre-wrap;border:5px solid #171e39; position:relative;background-color:#171e39;color:#fff">'
	    +'<span style="width:0; height:0; font-size:0; overflow:hidden; position:absolute;border-width:10px; border-style:solid dashed dashed; border-color:#171e39 transparent transparent;left:28px; bottom:-20px;"></span>'
	    + str
	+'</div>'
	return html
}

function echarts1() {
	let option = {
		title: {
			text: '企业人才信息统计',
			top: 20,
			left: 20,
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
			roseType: 'radius',
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
			roseType: 'radius',
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
	let color = ["#F8D147", "#F29938", "#EC642B", "#4960D4", "#6E83EE", "#9FABF0", "#BFC9F6", "#E7EBFC"];
	let chartData = [{
			name: 'CBD',
			value: 220,
			surplus: 280,
			sum: 500
		},
		{
			name: '孵化器A栋',
			value: 230,
			surplus: 260,
			sum: 500
		},
		{
			name: '孵化器B栋',
			value: 250,
			surplus: 250,
			sum: 500
		},
		{
			name: '孵化器C栋',
			value: 320,
			surplus: 180,
			sum: 500
		},
		{
			name: '专家公寓楼',
			value: 400,
			surplus: 100,
			sum: 500
		}
	];
	let pieSeries = [],
		lineYAxis = [];
	// 图表option整理
	chartData.forEach((v, i) => {
		pieSeries.push({
			name: '房屋租赁统计',
			type: 'pie',
			clockWise: false,
			hoverAnimation: false,
			radius: [80 - i * 10 + '%', 75 - i * 10 + '%'],
			center: ["40%", "55%"],
			label: {
				show: false
			},
			data: [{
				value: v.value,
				name: v.name
			}, {
				value: v.sum * 4 / 3 / 4,
				name: '',
				itemStyle: {
					color: "rgba(255,255,255,0)"
				}
			}]
		});
		pieSeries.push({
			name: '',
			type: 'pie',
			silent: true,
			z: 1,
			clockWise: false, //顺时加载
			hoverAnimation: false, //鼠标移入变大
			radius: [80 - i * 10 + '%', 75 - i * 10 + '%'],
			center: ["40%", "55%"],
			label: {
				show: false
			},
			data: [{
				value: v.sum,
				itemStyle: {
					color: "#000"
				}
			}, {
				value: v.sum * 4 / 3 / 4,
				name: '',
				itemStyle: {
					color: "rgba(0,0,0,0)"
				}
			}]
		});
		lineYAxis.push({
			value: i,
			textStyle: {
				rich: {
					circle: {
						color: color[i],
						padding: [0, 5]
					}
				}
			}
		});
	})
	option = {
		color: color,
		title: {
			text: '房屋租赁统计',
			top: 20,
			left: 20,
			textStyle: {
				color: '#ffffff',
				fontWeight: 700,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Bold',
				fontSize: 16
			}
		},
		grid: {
			top: '14%',
			bottom: '60%',
			left: "40%",
			containLabel: false
		},
		yAxis: [{
			type: 'category',
			inverse: true,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				formatter: function(params) {
					let item = chartData[params];
					console.log(item)
					return '{circle|━}{name|' + item.name + ':' + '已租' + item.value + '间,剩余' + item.surplus + '间' + '}'
				},
				interval: 0,
				inside: true,
				textStyle: {
					color: "#333",
					fontSize: 14,
					rich: {
						name: {
							color: '#fff',
							fontSize: 12,
							fontWeight: 400,
						},
						value: {
							color: '#fff',
							fontSize: 16,
							fontWeight: 500,
							padding: [0, 0, 0, 20]
						},
						unit: {
							fontSize: 14
						}
					}
				},
				show: true
			},
			data: lineYAxis
		}],
		xAxis: [{
			show: false
		}],
		series: pieSeries
	};
	chart2.setOption(option);
}
function echarts3() {
	let option = {
		title: {
			text: '项目来源',
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
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'roundRect',
			itemWidth: 18,
			itemHeight: 6,
			data: ['留创园', '海创园', '3W', '北科大','其他'],
			top: 60,
			left: 'center',
			textStyle: {
				color: "#ffffff",
				fontSize: 12,
				fontWeight: 400,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Regular',
			}
		},
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			  top: 120,
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				color: '#fff',
				textStyle: {
					fontSize: '12'
				},
			},
			splitLine: {
				show: true,
				interval: 0 ,
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		yAxis: [{
			type: 'value',
			name:'单位（个）',
			nameTextStyle:{
				color:'#fff'
			},
			axisLabel: {
				color: '#fff',
				textStyle: {
					fontSize: '12'
				},
			},
			splitLine: {
			  show: true
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
		}],
		series: [{
			name: '留创园',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(139,115,242,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(139,115,242, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(139,115,242)',
					borderColor: 'rgba(139,115,242,0.2)',
					borderWidth: 12
			
				}
			},
			data: [20, 18, 19, 34, 50, 12, 10, 25, 45, 12, 16, 22]
		}, {
			name: '海创园',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(255,90,0,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(255,90,0, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(255,90,0)',
					borderColor: 'rgba(255,90,0,0.2)',
					borderWidth: 12

				}
			},
			data: [10, 50, 25, 45, 12, 5, 12, 22, 12, 19, 34, 50]
		}, {
			name: '3W',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(255,208,0,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(255,208,0, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {

					color: 'rgb(255,208,0)',
					borderColor: 'rgba(255,208,0,0.2)',
					borderWidth: 12
				}
			},
			data: [22, 12, 25, 15, 12, 11, 14, 50, 20, 10, 15, 12]
		}, {
			name: '北科大',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0,150,255,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(0,150,255, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {

					color: 'rgb(0,150,255)',
					borderColor: 'rgba(0,150,255,0.2)',
					borderWidth: 12
				}
			},
			data: [20, 18, 25, 45, 12, 11, 34, 10, 20, 10, 15, 22]
		}, {
			name: '其他',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(11,147,75,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(11,147,75, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {

					color: 'rgb(11,147,75)',
					borderColor: 'rgba(11,147,75,0.2)',
					borderWidth: 12
				}
			},
			data: [20, 12, 9, 43, 10, 22, 34, 10, 20, 11, 15, 22]
		}]
	};
	chart3.setOption(option);
}
function echarts4() {
	let option = {
		title: {
			text: '企业人才信息统计',
			top: 20,
			left: 20,
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
			roseType: 'radius',
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
					value: 103,
					name: '电子商务'
				},
				{
					value: 78,
					name: '智能制造'
				},
				{
					value: 62,
					name: '生物医药'
				},{
					value: 41,
					name: '新能源'
				},
				{
					value: 26,
					name: '其他'
				},
				{
					value: 206,
					name: '电子信息'
				}
			]
		},{
			name: '面积模式',
			type: 'pie',
			hoverAnimation: false,
			radius: ['0%', '20%'],
			center: ['50%', '60%'],
			roseType: 'radius',
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
				value: 515,
				name: '总数量'
			}]
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
		title: {
			text: '资金补贴',
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
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'roundRect',
			itemWidth: 18,
			itemHeight: 6,
			data: ['房屋补贴', '启动资金', '人才公寓补贴'],
			top: 60,
			left: 'center',
			textStyle: {
				color: "#ffffff",
				fontSize: 12,
				fontWeight: 400,
				fontFamily: 'Microsoft YaHei, Microsoft YaHei-Regular',
			}
		},
		grid: {
			left: 20,
			right: 20,
			bottom: 20,
			  top: 120,
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				color: '#fff',
				textStyle: {
					fontSize: '12'
				},
			},
			splitLine: {
				show: true,
				interval: 0 ,
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		yAxis: [{
			type: 'value',
			name:'单位（万元）',
			nameTextStyle:{
				color:'#fff'
			},
			axisLabel: {
				color: '#fff',
				textStyle: {
					fontSize: '12'
				},
			},
			splitLine: {
			  show: true
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
		}],
		series: [{
			name: '人才公寓补贴',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(255,90,0,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(255,90,0, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(255,90,0)',
					borderColor: 'rgba(255,90,0,0.2)',
					borderWidth: 12
	
				}
			},
			data: [10, 50, 25, 45, 12, 5, 12, 22, 12, 19, 34, 50]
		}, {
			name: '房屋补贴',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(255,208,0,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(255,208,0, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
	
					color: 'rgb(255,208,0)',
					borderColor: 'rgba(255,208,0,0.2)',
					borderWidth: 12
				}
			},
			data: [22, 12, 25, 15, 12, 11, 14, 50, 20, 10, 15, 12]
		}, {
			name: '启动资金',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0,150,255,0.5)'
					}, {
						offset: 0.8,
						color: 'rgba(0,150,255, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
	
					color: 'rgb(0,150,255)',
					borderColor: 'rgba(0,150,255,0.2)',
					borderWidth: 12
				}
			},
			data: [20, 18, 25, 45, 12, 11, 34, 10, 20, 10, 15, 22]
		}]
	};
	chart6.setOption(option);
}
