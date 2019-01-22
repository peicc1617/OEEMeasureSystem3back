package xjtucad.model;

public class OeeIndicator
{
    //设备名称
    private String machineName;
    //计划停机损失
    private double plannedDowntimeLoss;
    //停机损失
    private double downtimeLoss;
    //性能损失
    private double performanceLoss;
    //设备利用率
    private double equipmentUtilizationRate;
    //时间开动率
    private double timeUtilizationRate;
    //性能开动率
    private double performanceUtilizationRate;
    //合格品率
    private double qualityRate;
    //OEE
    private double OEE;
    //TEEP
    private double TEEP;
    //日历时间
    private double calendarTime;
    //负荷时间
    private double loadTime;
    //实际开动时间
    private double actualWorkTime;
    //净开动时间
    private double netWorkTime;
    //有价值开动时间
    private double valueWorkTime;
    //不合格品数量
    private double defectQuantity;
    //产品总数量
    private double totalQuantity;

    public OeeIndicator(String machineName, double plannedDowntimeLoss, double downtimeLoss, double performanceLoss, double equipmentUtilizationRate, double timeUtilizationRate, double performanceUtilizationRate, double qualityRate, double OEE, double TEEP, double calendarTime, double loadTime, double actualWorkTime, double netWorkTime, double valueWorkTime, double defectQuantity, double totalQuantity)
    {
        this.machineName = machineName;
        this.plannedDowntimeLoss = plannedDowntimeLoss;
        this.downtimeLoss = downtimeLoss;
        this.performanceLoss = performanceLoss;
        this.equipmentUtilizationRate = equipmentUtilizationRate;
        this.timeUtilizationRate = timeUtilizationRate;
        this.performanceUtilizationRate = performanceUtilizationRate;
        this.qualityRate = qualityRate;
        this.OEE = OEE;
        this.TEEP = TEEP;
        this.calendarTime = calendarTime;
        this.loadTime = loadTime;
        this.actualWorkTime = actualWorkTime;
        this.netWorkTime = netWorkTime;
        this.valueWorkTime = valueWorkTime;
        this.defectQuantity = defectQuantity;
        this.totalQuantity = totalQuantity;
    }

    public String getMachineName()
    {
        return machineName;
    }

    public void setMachineName(String machineName)
    {
        this.machineName = machineName;
    }

    public double getPlannedDowntimeLoss()
    {
        return plannedDowntimeLoss;
    }

    public void setPlannedDowntimeLoss(double plannedDowntimeLoss)
    {
        this.plannedDowntimeLoss = plannedDowntimeLoss;
    }

    public double getDowntimeLoss()
    {
        return downtimeLoss;
    }

    public void setDowntimeLoss(double downtimeLoss)
    {
        this.downtimeLoss = downtimeLoss;
    }

    public double getPerformanceLoss()
    {
        return performanceLoss;
    }

    public void setPerformanceLoss(double performanceLoss)
    {
        this.performanceLoss = performanceLoss;
    }

    public double getEquipmentUtilizationRate()
    {
        return equipmentUtilizationRate;
    }

    public void setEquipmentUtilizationRate(double equipmentUtilizationRate)
    {
        this.equipmentUtilizationRate = equipmentUtilizationRate;
    }

    public double getTimeUtilizationRate()
    {
        return timeUtilizationRate;
    }

    public void setTimeUtilizationRate(double timeUtilizationRate)
    {
        this.timeUtilizationRate = timeUtilizationRate;
    }

    public double getPerformanceUtilizationRate()
    {
        return performanceUtilizationRate;
    }

    public void setPerformanceUtilizationRate(double performanceUtilizationRate)
    {
        this.performanceUtilizationRate = performanceUtilizationRate;
    }

    public double getQualityRate()
    {
        return qualityRate;
    }

    public void setQualityRate(double qualityRate)
    {
        this.qualityRate = qualityRate;
    }

    public double getOEE()
    {
        return OEE;
    }

    public void setOEE(double OEE)
    {
        this.OEE = OEE;
    }

    public double getTEEP()
    {
        return TEEP;
    }

    public void setTEEP(double TEEP)
    {
        this.TEEP = TEEP;
    }

    public double getCalendarTime()
    {
        return calendarTime;
    }

    public void setCalendarTime(double calendarTime)
    {
        this.calendarTime = calendarTime;
    }

    public double getLoadTime()
    {
        return loadTime;
    }

    public void setLoadTime(double loadTime)
    {
        this.loadTime = loadTime;
    }

    public double getActualWorkTime()
    {
        return actualWorkTime;
    }

    public void setActualWorkTime(double actualWorkTime)
    {
        this.actualWorkTime = actualWorkTime;
    }

    public double getNetWorkTime()
    {
        return netWorkTime;
    }

    public void setNetWorkTime(double netWorkTime)
    {
        this.netWorkTime = netWorkTime;
    }

    public double getValueWorkTime()
    {
        return valueWorkTime;
    }

    public void setValueWorkTime(double valueWorkTime)
    {
        this.valueWorkTime = valueWorkTime;
    }

    public double getDefectQuantity()
    {
        return defectQuantity;
    }

    public void setDefectQuantity(double defectQuantity)
    {
        this.defectQuantity = defectQuantity;
    }

    public double getTotalQuantity()
    {
        return totalQuantity;
    }

    public void setTotalQuantity(double totalQuantity)
    {
        this.totalQuantity = totalQuantity;
    }
}
