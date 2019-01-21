//计算OEE
function calculateOEE_back() {
    // var dataFromTable = $('#myBootstrapTable').bootstrapTable('getData');//获取表格数据
    var dataFromTable=getAllTabledata();//获取表格数据
    var productName=dataFromTable.product_name;//产品名称
    var theoreticalCycle=dataFromTable.theoretical_cycle;//理论加工时间
    var actualCycle=dataFromTable.actual_cycle;//实际加工时间
    var dataFromTable=dataFromTable.datas;//表格数据
    var dataFromTable=JSON.stringify(dataFromTable);
    $.ajax({
        type:'post',
        url:'oeeCalculate',
        data:{productName:productName,theoreticalCycle:theoreticalCycle,actualCycle:actualCycle,dataFromTable:dataFromTable},
        success:function(data){
          // alert("后台处理完毕！"+decodeURIComponent(data));
            alert("后台处理完毕！"+data);

        },
        error:function (data) {
            alert("后台数据返回失败了！");
        }
    })
}