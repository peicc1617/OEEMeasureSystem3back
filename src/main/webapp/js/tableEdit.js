//添加一条记录时弹出模态对话框
function addrow()
{
    //alert("添加设备信息");
    $('#addItem').modal('show');
}
//添加一条记录
function addItem()
{
    var datanum=$('#myBootstrapTable').bootstrapTable('getData').length;
    var rowdata={
        procedureIdForDelete:datanum+1,
        calendar_data:$('#calendar_data1').val(),//日期
        machine_name:$('#machine_name1').val(),//设备名称
        calendar_time:$('#calendar_time1').val(),//日历时间
        rest_time:$('#rest_time1').val(),//休息时间
        downtime_maintenance:$('#downtime_maintenance1').val(),//停机保养
        downtime_noEquipment:$('#downtime_noEquipment1').val(),//非设备因素停机
        downtime_loss:$('#downtime_loss1').val(),//故障停机
        start_shutdown:$('#start_shutdown1').val(),//开停机
        product_change:$('#product_change1').val(),//更换品种
        equipment_adjustment:$('#equipment_adjustment1').val(),//设备调整
        speed_loss:$('#speed_loss1').val(),//速度降低
        small_downtime:$('#small_downtime1').val(),//空转、间歇停机
        defect_quantity:$('#defect_quantity1').val(),//不合格品数量
        total_quantity:$('#total_quantity1').val(),//产品总数量
    }
    $('#myBootstrapTable').bootstrapTable('append', rowdata);
}
//编辑_字段
function actionFormatter(value, row, index) {
    return [
        '<a class="edit ml10" href="javascript:void(0)" title="Edit">',
        '<i class="glyphicon glyphicon-edit"></i> 编辑',
        '</a>'
    ].join('');
}
var updateindex=1;
window.actionEvents = {
    'click .edit': function (e, value, row, index) {
        $('#editItem').modal('show');
        $('#calendar_data2').val(row.calendar_data);//日期
        $('#machine_name2').val(row.machine_name);//设备名称
        $('#calendar_time2').val(row.calendar_time);//日历时间
        $('#rest_time2').val(row.rest_time);//休息时间
        $('#downtime_maintenance2').val(row.downtime_maintenance);//停机保养
        $('#downtime_noEquipment2').val(row.downtime_noEquipment);//非设备因素停机
        $('#downtime_loss2').val(row.downtime_loss);//故障停机
        $('#start_shutdown2').val(row.start_shutdown);//开停机
        $('#product_change2').val(row.product_change);//更换产品
        $('#equipment_adjustment2').val(row.equipment_adjustment),//设备调整
        $('#speed_loss2').val(row.speed_loss);//速度降低
        $('#small_downtime2').val(row.small_downtime);//空转、间歇停机
        $('#defect_quantity2').val(row.defect_quantity);//不合格品数量
        $('#total_quantity2').val(row.total_quantity);//产品总数量
        updateindex = index;
    }
};
//编辑一条记录
function editItem()
{
    // 隐藏模态对话框
    $('#editItem').modal('hide');
    var datanum=$('#myBootstrapTable').bootstrapTable('getData').length;
    var rowdata={
        procedureIdForDelete:datanum+1,
        calendar_data:$('#calendar_data2').val(),//日期
        machine_name:$('#machine_name2').val(),//设备名称
        calendar_time:$('#calendar_time2').val(),//日历时间
        rest_time:$('#rest_time2').val(),//休息时间
        downtime_maintenance:$('#downtime_maintenance2').val(),//停机保养
        downtime_noEquipment:$('#downtime_noEquipment2').val(),//非设备因素停机
        downtime_loss:$('#downtime_loss2').val(),//故障停机
        start_shutdown:$('#start_shutdown2').val(),//开停机
        product_change:$('#product_change2').val(),//更换品种
        equipment_adjustment:$('#equipment_adjustment2').val(),//设备调整
        speed_loss:$('#speed_loss2').val(),//速度降低
        small_downtime:$('#small_downtime2').val(),//空转、间歇停机
        defect_quantity:$('#defect_quantity2').val(),//不合格品数量
        total_quantity:$('#total_quantity2').val(),//产品总数量
    }
    $('#myBootstrapTable').bootstrapTable('updateRow', {index: updateindex, row: rowdata});
}
//删除一条记录
function deleterow()
{
    var ids = $.map($('#myBootstrapTable').bootstrapTable('getSelections'), function (row) {
        return row.procedureIdForDelete;
    })
    $('#myBootstrapTable').bootstrapTable('remove', {field: 'procedureIdForDelete', values: ids});
}
//获取表格所有数据
function getAllTabledata()
{
    var product_name=$('#product_name1').val();//产品名称
    var theoretical_cycle=$('#theoretical_cycle1').val();//理论加工周期
    var actual_cycle=$('#actual_cycle1').val();//实际加工周期
    var datas=$('#myBootstrapTable').bootstrapTable('getData');
    var allData={
        product_name:product_name,
        theoretical_cycle:theoretical_cycle,
        actual_cycle:actual_cycle,
        datas:datas
    }
    return allData;
}

