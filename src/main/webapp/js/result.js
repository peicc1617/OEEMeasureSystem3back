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
//显示损失
function showLoss(datalist)
{
    $('#myBootstrapTable2').bootstrapTable('removeAll');
    var actual_cycle=$('#actual_cycle1').val();//实际加工周期
    actual_cycle=parseFloat(actual_cycle);
    for (var i = 0; i < datalist.length; i++) {
        var valueWorkTime1=(parseFloat(datalist[i].totalQuantity)-parseFloat(datalist[i].defectQuantity))*actual_cycle
        var rowdata = {
            machineName: datalist[i].machineName,
            calendarTime:datalist[i].calendarTime,
            plannedDowntimeLoss:datalist[i].plannedDowntimeLoss,
            actualWorkTime:datalist[i].actualWorkTime,
            downtimeLoss:datalist[i].downtimeLoss,
            netWorkTime:datalist[i].netWorkTime,
            //质量损失暂时不用，改用合格品率计算
            // qualityLoss:parseFloat(datalist[i].netWorkTime)-valueWorkTime1,
            // valueWorkTime:valueWorkTime1
            defectQuantity:datalist[i].defectQuantity,
            totalQuantity:datalist[i].totalQuantity
        }
        $('#myBootstrapTable2').bootstrapTable('append', rowdata);
    }
}
//显示OEE指标
function showOEEIndicator(datalist) {
    $('#myBootstrapTable1').bootstrapTable('removeAll');
    for (var i = 0; i < datalist.length; i++) {
        var rowdata = {
            machineName: datalist[i].machineName,
            equipmentUtilizationRate: datalist[i].equipmentUtilizationRate.toFixed(2) * 100 + "%",
            timeUtilizationRate: datalist[i].timeUtilizationRate.toFixed(2) * 100 + "%",
            performanceUtilizationRate: datalist[i].performanceUtilizationRate.toFixed(2) * 100 + "%",
            qualityRate: datalist[i].qualityRate.toFixed(2) * 100 + "%",
            OEE: datalist[i].OEE.toFixed(2) * 100 + "%",
            TEEP: datalist[i].TEEP.toFixed(2) * 100 + "%"

        }
        $('#myBootstrapTable1').bootstrapTable('append', rowdata);
    }
    showLoss(datalist);
    showEcharts(datalist);//显示图形
}
//显示图形
function showEcharts(datalist)
{
    var xData=[];//x轴数据
    var yequipmentUtilizationRateData=[];//y轴数据设备利用率
    var ytimeUtilizationRateData=[];//y轴数据时间开动率
    var yperformanceUtilizationRateData=[];//y轴数据性能开动率
    var yqualityRateData=[];//y轴数据合格品率
    var yOEEData=[];//y轴数据OEE
    var yTEEPData=[];//y轴数据TEEP
    for(var i=0;i<datalist.length;i++)
    {
        xData.push(datalist[i].machineName);
        yequipmentUtilizationRateData.push(datalist[i].equipmentUtilizationRate.toFixed(2)*100);
        ytimeUtilizationRateData.push(datalist[i].timeUtilizationRate.toFixed(2)*100);
        yperformanceUtilizationRateData.push(datalist[i].performanceUtilizationRate.toFixed(2)*100);
        yqualityRateData.push(datalist[i].qualityRate.toFixed(2)*100);
        yOEEData.push(datalist[i].OEE.toFixed(2)*100);
        yTEEPData.push(datalist[i].TEEP.toFixed(2)*100);
    }
    var myChart = echarts.init(document.getElementById('OEECharts'));
    myChart.setOption({
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['设备利用率','时间开动率','性能开动率','合格品率','OEE','TEEP']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data:xData,
                boundaryGap: true,
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {
                        color: 'green',
                        type: 'solid',
                        width: 2
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitArea : {show : true},
                axisLabel : {
                    show:true,
                    interval: 'auto',    // {number}
                    rotate: -45,
                    margin: 18,
                    formatter: '{value} %',    // Template formatter!
                    textStyle: {
                        color: '#1e90ff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal',
                        fontWeight: 'bold'
                    }
                },
                splitLine : {
                    show:true,
                    lineStyle: {
                        color: '#483d8b',
                        type: 'dotted',
                        width: 2
                    }
                },
                splitArea : {
                    show: true,
                    areaStyle:{
                        color:['rgba(205,92,92,0.3)','rgba(255,215,0,0.3)']
                    }
                },
            },


        ],
        series : [
            {
                name:'设备利用率',
                type:'bar',
                data:yequipmentUtilizationRateData
            },
            {
                name:'时间开动率',
                type:'bar',
                data:ytimeUtilizationRateData
            },
            {
                name:'性能开动率',
                type:'bar',
                data:yperformanceUtilizationRateData
            },
            {
                name:'合格品率',
                type:'bar',
                data:yqualityRateData
            },
            {
                name:'OEE',
                type:'line',
                data:yOEEData,
               lineStyle:{
                    normal:{
                        color:"#92ff61",
                        width:3,
                    }
               }
            },
            {
                name:'TEEP',
                type:'line',
                data:yTEEPData,
                lineStyle:{
                    normal:{
                        color:"#fe2aff",
                        width:3,
                    }
                }
            }
        ]
    });
}