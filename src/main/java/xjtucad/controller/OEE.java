package xjtucad.controller;

//import net.sf.json.JSONObject;
//import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xjtucad.model.OEEData;
import xjtucad.service.OEEService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
public class OEE
{
    @Autowired
    OEEService oeeService;
    @RequestMapping(value="/oeeCalculate",produces="text/html;charset=UTF-8")
    @ResponseBody()
    public String getoeeData(String productName,String theoreticalCycle,String actualCycle,String dataFromTable) throws IOException
    {
        System.out.println("productName:"+productName);
        System.out.println("theoreticalCycle:"+theoreticalCycle);
        System.out.println("actualCycle:"+actualCycle);
        System.out.println("dataFromTable1:"+dataFromTable);
        List oeeDataList=new ArrayList();
        int strstrat=dataFromTable.indexOf("[");
        int endstrat=dataFromTable.lastIndexOf("]");
        String jsonStr=dataFromTable.substring(strstrat, endstrat+1);
        JSONArray jsonArray;
        jsonArray=JSONArray.fromObject(jsonStr);
        for(Object object:jsonArray)
        {
            JSONObject jsonObject=JSONObject.fromObject(object);
            OEEData oeeData=(OEEData) JSONObject.toBean(jsonObject, OEEData.class);
            oeeDataList.add(oeeData);
            System.out.println(oeeData.getCalendar_data());
        }
        List list1=new ArrayList();
        list1=oeeService.calculateOEEIndicator(oeeDataList);
        String jsonDocumentList = JSONArray.fromObject(list1).toString();
        return jsonDocumentList;
    }

}
