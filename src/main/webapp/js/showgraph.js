//显示图表
function showOEE(datalist)
{
    ///////////////////////////////////////////////////
    //显示设备综合效率表格数据
    $('#myBootstrapTable1').bootstrapTable('removeAll');
    for(var i=0;i<datalist.length;i++) {
        var rowdata = {
            machineName: datalist[i].machineName,
            TimeRate: datalist[i].TimeRate,
            performanceRate: datalist[i].performanceRate,
            qualityRate: datalist[i].qualityRate,
            OEE: datalist[i].OEEValue * 100 + "%",

        }
        $('#myBootstrapTable1').bootstrapTable('append', rowdata);
    }
    ///////////////////////////////////////////////////
    var xData=[];//x轴数据
    var yData=[];//y轴数据

    for(var i=0;i<datalist.length;i++)
    {
        xData.push(datalist[i].machineName);
        yData.push(datalist[i].OEEValue*100);
    }
    var dom = document.getElementById("OEECharts");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '坐标轴刻度与标签对齐';

    option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                name:'设备名称',
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data:xData,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'设备综合效率',
                min:0,
                max:100,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '设备综合效率',
                type: 'bar',
                barWidth: '60%',
                // data: [10, 52, 200, 334, 390, 330, 220]
                data:yData
            },
            {
                name: '设备综合效率',
                type: 'line',
                barWidth: '60%',
                // data: [10, 52, 200, 334, 390, 330, 220]
                data:yData
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

