//初始化echarts实例
const chart1 = echarts.init(document.getElementById("echarts1"));
const chart2 = echarts.init(document.getElementById("echarts2"));
const chart3 = echarts.init(document.getElementById("echarts3"));

$(function () {
  $('#container').imageLabel();
  $.contextMenu({
    selector: '.kbs-label-area',
    callback: function (key, options) {
      var e = window.event || arguments[0];
      $('#container').imageLabel('create', {
        top: $('.context-menu-list')[0].offsetTop || e.clientY,
        left: $('.context-menu-list')[0].offsetLeft || e.clientX
      });
    },
    items: {
      "create": { name: "新增标签" }
    }
  });
  /********** 执行图表 ****************/
  echarts1()
  echarts2()
  echarts3()
});

function echarts1 () {
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      itemWidth: 20,
      itemHeight: 12,
      data: ['已租', '空闲'],
      top: 20,
      left: 222,
      textStyle: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Microsoft YaHei, Microsoft YaHei-Regular',
      }
    },
    color: ['#F8D147', '#D55322'],
    grid: [{
      left: '20px',
      right: '51%',
      bottom: 20,
      containLabel: true
    },
    {
      left: '51%',
      right: '20px',
      bottom: 20,
      containLabel: true
    }
    ],
    xAxis: [{
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      gridIndex: 0
    }, {
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      gridIndex: 1
    }],
    yAxis: [{
      type: 'category',
      data: ['1F', '2F', '3F', '4F', '5F', '6F', '7F', '8F', '9F', '10F'],
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      gridIndex: 0
    }, {
      type: 'category',
      data: ['11F', '12F', '13F', '14F', '15F', '16F', '17F', '18F', '19F', '20F'],
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      gridIndex: 1
    }],
    series: [
      {
        name: '已租',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320, 320, 320, 320],
        xAxisIndex: 0, yAxisIndex: 0
      },
      {
        name: '空闲',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210, 210, 210, 210],
        xAxisIndex: 0, yAxisIndex: 0
      },
      {
        name: '已租',
        type: 'bar',
        stack: 'total1',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320, 320, 320, 320],
        xAxisIndex: 1, yAxisIndex: 1
      },
      {
        name: '空闲',
        type: 'bar',
        stack: 'total1',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210, 210, 210, 210],
        xAxisIndex: 1, yAxisIndex: 1
      },

    ]
  };
  chart1.setOption(option);
}

function echarts2 () {
  let colorArr = ['#F8D147', '#F29938', '#EC642B', '#6E83EE', '#9FABF0', '#E7EBFC']
  option = {
    title: {
      text: '固定资产',
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
      left: 20,
      right: 20,
      bottom: 20,
      //   top: 60,
      containLabel: true
    },
    color: colorArr,
    series: {
      name: '固定资产',
      type: 'pie',
      left: 'center',
      radius: ['0%', '85%'],
      label: {
        formatter: '{name|{b} : }{name|{c}}\n\n{name|{d}%}',
        padding: [25, -70, 25, -70],
        rich: {
          name: {
            fontSize: 12,
            fontWeight: 400,
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          length2: 80,
        }
      },
      data: [
        { name: '其他', value: 100 },
        { name: '办公椅', value: 90 },
        { name: '译办公桌', value: 50 },
        { name: '电脑', value: 50 },
        { name: '茶几', value: 30 },
        { name: '衣柜', value: 2 }
      ]
    }

  };
  chart2.setOption(option);
}

function echarts3 () {
  let colorArr = ['#F8D147', '#EC642B']
  option = {
    title: {
      text: '报修情况',
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
      left: 20,
      right: 20,
      bottom: 20,
      //   top: 60,
      containLabel: true
    },
    color: colorArr,
    series: {
      name: '报修情况',
      type: 'pie',
      left: 'center',
      radius: ['0%', '85%'],
      label: {
        formatter: '{name|{b}}\n\n{name|{c}}',
        padding: [25, -40, 25, -40],
        rich: {
          name: {
            fontSize: 12,
            fontWeight: 400,
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          length2: 80,
        }
      },
      data: [
        { name: '已处理', value: 30 },
        { name: '未处理', value: 70 }
      ]
    }

  };
  chart3.setOption(option);
}
