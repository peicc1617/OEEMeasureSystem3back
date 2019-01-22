package xjtucad.service;

import org.springframework.stereotype.Service;
import xjtucad.model.OEEData;
import xjtucad.model.OeeIndicator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
@Service
public class OEEService
{
    //计算OEE相关指标
    public List calculateOEEIndicator(List list)
    {
        List IndicatorList=new ArrayList();
        Iterator<OEEData> iter=list.iterator();
        while(iter.hasNext())
        {
            OEEData oeeData=iter.next();
            //设备名称
            String machineName=oeeData.getMachine_name();
            //计划停机损失
            double plannedDowntimeLoss=oeeData.getRest_time()+oeeData.getDowntime_maintenance()+oeeData.getDowntime_noEquipment();
            //停机损失
            double downtimeLoss=oeeData.getDowntime_loss()+oeeData.getStart_shutdown()+oeeData.getProduct_change()+oeeData.getEquipment_adjustment();
            //性能损失
            double performanceLoss=oeeData.getSpeed_loss()+oeeData.getSmall_downtime();
            //日历时间
            double calendarTime=oeeData.getCalendar_time();
            //负荷时间
            double loadTime=calendarTime-plannedDowntimeLoss;
            //实际开动时间
            double actualWorkTime=loadTime-downtimeLoss;
            //净开动时间
            double netWorkTime=actualWorkTime-performanceLoss;
            //有价值开动时间(保留字段，暂无计算)
            double valueWorkTime=0;
            //设备利用率
            double equipmentUtilizationRate=(calendarTime-plannedDowntimeLoss)/calendarTime;
            //时间开动率
            double timeUtilizationRate=actualWorkTime/loadTime;
            //性能开动率
            double performanceUtilizationRate=netWorkTime/actualWorkTime;
            //合格品率
            double qualityRate=1-oeeData.getDefect_quantity()/oeeData.getTotal_quantity();
            //OEE
            double OEE=timeUtilizationRate*performanceUtilizationRate*qualityRate;
            //TEEP
            double TEEP=OEE*equipmentUtilizationRate;
            OeeIndicator oeeIndicator=new OeeIndicator(machineName, plannedDowntimeLoss, downtimeLoss, performanceLoss, equipmentUtilizationRate, timeUtilizationRate, performanceUtilizationRate, qualityRate, OEE, TEEP,  calendarTime,  loadTime,  actualWorkTime,  netWorkTime, valueWorkTime,oeeData.getDefect_quantity(),oeeData.getTotal_quantity());
            IndicatorList.add(oeeIndicator);
        }
        return IndicatorList;
    }
}
