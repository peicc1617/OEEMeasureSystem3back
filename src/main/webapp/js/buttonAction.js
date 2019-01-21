var projectId = 0;//项目Id
var projectName;//项目名
var appResult = null;//word报告
var appNameChinese = 'OEE测量分析系统';//app中文名（必填）
var USER_NAME = '';//当前登录用户名

// 添加项目后，自定义操作
function addSelfDefine(result) {
    //上一层函数查看basicAction.js中addProject()函数
    //清除之前项目内容
    $('#myBootstrapTable').bootstrapTable('removeAll');
    console.log("add project successful");
}

// 查看项目后，自定义操作
function checkSelfDefine(node, result) {
    // 上一层函数查看basicAction.js中checkProject()函数
   //查看项目后，显示项目信息
    if(result.state)
    {
        $('#myBootstrapTable').bootstrapTable('removeAll');
        var objectFormProject=JSON.parse(result.content.appContent);
        $('#product_name1').val(objectFormProject.product_name);//获取产品名称
        $('#theoretical_cycle1').val(objectFormProject.theoretical_cycle);//获取理论加工时间
        $('#actual_cycle1').val(objectFormProject.actual_cycle);//获取实际加工时间
        var dataFormProject=objectFormProject.datas;
        for(var i=0;i<dataFormProject.length;i++)
        {
            var datanum = $('#myBootstrapTable').bootstrapTable('getData').length;
            var rowdata={
                procedureIdForDelete:datanum+1,
                calendar_data:dataFormProject[i].calendar_data,//日期
                machine_name:dataFormProject[i].machine_name,//设备名称
                calendar_time:dataFormProject[i].calendar_time,//日历时间
                rest_time:dataFormProject[i].rest_time,//休息时间
                downtime_maintenance:dataFormProject[i].downtime_maintenance,//停机保养
                downtime_noEquipment:dataFormProject[i].downtime_noEquipment,//非设备因素停机
                downtime_loss:dataFormProject[i].downtime_loss,//故障停机
                start_shutdown:dataFormProject[i].start_shutdown,//开停机
                product_change:dataFormProject[i].product_change,//更换品种
                equipment_adjustment:dataFormProject[i].equipment_adjustment,//设备调整
                small_downtime:dataFormProject[i].small_downtime,//空转、间歇停机
                speed_loss:dataFormProject[i].speed_loss,//速度降低
                defect_quantity:dataFormProject[i].defect_quantity,//不合格品数量
                total_quantity:dataFormProject[i].total_quantity,//产品总数量
            }
            $('#myBootstrapTable').bootstrapTable('append', rowdata);
        }
    }
    else
    {
        alert("未找到项目相关信息！");
    }
    console.log("check project successful");
}

//删除项目后，自定义操作
function removeSelfDefine(result) {
    // 上一层函数查看basicAction.js中removeProject()函数
    /*
    * your code.....
    **/
    console.log("remove project successful");
}

//定制初始化内容
function setCustomContext() {
    // canvas图片获取方式
    var img = $("#canvas")[0];  //选择页面中的img元素
    var image = new Image();
    if (img != null) {
        image.src = img.toDataURL("image/png");
    }
    var img1 = image;
    // 其他示例
    var img2 = $("#image2Id");  //选择页面中的img元素
    var wordImgArr = [img1, img2];//定义图片数组
    var customText = {//word编辑区自定义文本内容
        'title': "<h2>1 **App分析结果 </h2>",
        'chap1': "<h3>1.1 *******</h3>",
        'img1': wordImgArr[0],
        'chap2': "<h3>1.2 *******</h3>",
        'img2': wordImgArr[1],
        'chap3': "<h3>1.3 结论****</h3>"
    };
    for (var variable in customText) {//遍历自定义文本对象
        $("#WYeditor").append(customText[variable]);//插入元素
    }
}
//保存项目
function saveProject()
{
    if(projectId==0)
    {
        alert("请新建项目，再保存数据！");
    }
    else
    {
        var allData=getAllTabledata();
        $.ajax({
            url:"/projectManager/api/v1/project",
            type:"put",
            data:{
                id:projectId,
                projectName:projectName,
                memo:'',
                appReuslt:'',
                tempProjectID:'',
                appContent:JSON.stringify(allData),
                reservation:""
            },
            success:function(result)
            {
                if(result.state)
                {

                }
                else
                {
                    alert("保存失败，请重试！");
                }

            }
        })
    }
}
//另存项目
function saveAsProject() {
    var makeJson=$('#myBootstrapTable').bootstrapTable('getData');
    var saveProjectNameArr = [];//获取所有项目
    // 获取输入框中的内容
    var projectName = $('#saveAsProjectNameModal')[0].value;//获取项目名
    var createDate = new Date().toLocaleDateString() + ','+ new Date().getHours() + ':' + new Date().getMinutes();//获取项目创建时间
    var memo = $('#saveAsProjectRemarkModal')[0].value;//获取备注
    var data = {
        "id" : 0,
        "createDate" : createDate,
        "projectName" : projectName,
        "memo" : memo,
//		"appContent" : JSON.stringify(hot.getData()),
        "reservation":$('#sopTable').find('tbody').html(),
        "appContent":JSON.stringify(makeJson)
    };
    //获取数据库所有项目名
    $.ajax({
        url : "/projectManager/api/v1/project",
        type : "get",
        async : false,
        dataType : "json",
        success : function(result) {
            saveProjectNameArr.length = 0;//数组清零
            result.content.forEach(function(element, index, array) {
                saveProjectNameArr.push(element.projectName);
            })
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {//打印错误信息
            console.log("XMLHttpRequest请求状态码：" + XMLHttpRequest.status);
            console.log("XMLHttpRequest状态码：" + XMLHttpRequest.readyState);
            console.log("textStatus是：" + textStatus);
            console.log("errorThrown是：" + errorThrown);
        }
    });
    //表格添加数据
    if (projectName === '') {
        alert("请输入项目名！！！");
    } else if (saveProjectNameArr.indexOf(projectName) !== -1) {//在所有项目中看是否存在当前名字
        alert("项目已经存在，请重新输入项目名！！！");
    } else {
        // 添加数据库
        $.ajax({
            type : "post",
            url : "/projectManager/api/v1/project",
            data : data,
            success : function(result) {
                if (result.state) {
                    $('.selectList').prepend('<li class="">\n' +
                        '\t\t\t\t\t<a>\n' +
                        '\t\t\t\t\t\t<div>\n' +
                        '\t\t\t\t\t\t\t<div class="sideProjectLi" onmouseover="this.title = this.innerHTML;" onclick="sideCheck(' + result.content.id + ',this)">\n' +
                        '\t\t\t\t\t\t\t\t' + result.content.projectName + '\n' +
                        '\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t\t\t<div style="position:absolute;bottom:6px;right:5px;">\n' +
                        '\t\t\t\t\t\t\t\t<i class="ace-icon fa fa-pencil align-top bigger-125 purple" id="checkSideLi" onclick="checkProject(' + result.content.id + ')" data-toggle="modal" data-target="#basicInfo"></i>\n' +
                        '\t\t\t\t\t\t\t\t<i class="ace-icon fa fa-trash-o bigger-120 red" id="deleteSideLi" onclick="removeProject(' + result.content.id + ')"></i>\n' +
                        '\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t</a>\n' +
                        '\t\t\t\t</li>');
                    //侧边栏高度适应
                    var height = $(window).get(0).innerHeight;//获取屏幕高度
                    if ($('#cityList').children('li').length * 36 < height - 310) {
                        $('.selectList').css('height',$('#cityList').children('li').length * 36);
                    } else {
                        $('.selectList').css('height', height - 310);
                    }
                    $('#dynamic-table').DataTable().row.add(data).draw(false);
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {//打印错误信息
                console.log("XMLHttpRequest请求状态码："+ XMLHttpRequest.status);
                console.log("XMLHttpRequest状态码："+ XMLHttpRequest.readyState);
                console.log("textStatus是：" + textStatus);
                console.log("errorThrown是：" + errorThrown);
            }
        });
        $('#saveAsModal').modal('hide');//隐藏模态框
        // 在前台添加表格
    }
}