//计算OEE
function calculateOEE()
{
    var dataFromTable=$('#myBootstrapTable').bootstrapTable('getData');//获取表格数据
    var json=eval(dataFromTable);
    var machineName;//设备名称
    var calendarTime=0;//日历时间
    var planneddownTime=0;//计划停机损失
    var loadTime=0;//负荷时间
    var downTime=0;//停机损失
    var operationTime=0;//操作时间
    var performanceLossTime=0;//性能损失
    var netOperationTime=0;//净操作时间
    var qualityRate=0;//合格品率
    var TimeRate=0;//时间开动率
    var performanceRate=0;//性能开动率
    var OEE=0;//设备综合效率
    datalist=[];
    for(var i=0;i<json.length;i++)
    {
        dataForTab=new Object();
        dataForTab.machineName=json[i].machine_name;//设备名称(用于echarts显示)
        calendarTime=parseFloat(json[i].calendar_time);//日历时间
        planneddownTime=parseFloat(json[i].planneddowntime_loss);//计划停机损失
        loadTime=calendarTime-planneddownTime;//负荷时间=日历时间-计划停机损失
        downTime=parseFloat(json[i].downtime_loss)+parseFloat(json[i].start_shutdown)+parseFloat(json[i].product_change)+parseFloat(json[i].consumable_part)+parseFloat(json[i].management_loss)+parseFloat(json[i].operational_loss);//停机损失=故障损失+开停机+更换品种+易损件+管理损失+操作动作损失
        operationTime=loadTime-downTime;//操作时间=负荷时间-停机损失
        performanceLossTime=parseFloat(json[i].small_downtime)+parseFloat(json[i].speed_loss)+parseFloat(json[i].organization_loss)+parseFloat(json[i].logistic_loss);//性能损失=小停机+速度损失+生产组织损失+后勤损失
        netOperationTime=operationTime-performanceLossTime;//净操作时间=操作时间-性能损失
        qualityRate=1-parseFloat(json[i].defect_quantity)/parseFloat(json[i].total_quantity);//合格品率
        TimeRate=loadTime/calendarTime;//时间开动率=负荷时间/日历时间
        performanceRate=netOperationTime/loadTime;//性能开动率=净操作时间/负荷时间
        OEE=qualityRate*TimeRate*performanceRate;//OEE=时间开动率*性能开动率*合格品率
        dataForTab.TimeRate=TimeRate.toFixed(2)*100+"%";
        dataForTab.performanceRate=performanceRate.toFixed(2)*100+"%";
        dataForTab.qualityRate=qualityRate.toFixed(2)*100+"%";
        dataForTab.OEEValue=OEE.toFixed(2);
        dataForTab.OEE=OEE.toFixed(2)*100+"%";
        datalist.push(dataForTab);
    }
    //显示OEE图表
    showOEE(datalist);
}