package xjtucad.controller;

//import net.sf.json.JSONObject;
//import net.sf.json.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xjtucad.model.OEEData;
import xjtucad.model.OEEData1;

import java.io.IOException;
import java.net.URLDecoder;

@Controller
public class OEE
{
    @RequestMapping("/oeeCalculate")
    @ResponseBody
    public String getoeeData(String productName,String theoreticalCycle,String actualCycle,String dataFromTable) throws IOException
    {
        System.out.println("productName:"+productName);
        System.out.println("theoreticalCycle:"+theoreticalCycle);
        System.out.println("actualCycle:"+actualCycle);
        System.out.println("dataFromTable1:"+dataFromTable);
        return "空调";
    }

}
