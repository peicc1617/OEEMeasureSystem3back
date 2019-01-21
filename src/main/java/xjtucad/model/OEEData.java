package xjtucad.model;

public class OEEData
{
    private String machineName;//设备名称
    private double calendarTime;//日历时间
    private double planneddowntimeLoss;//计划停机损失
    private double downtimeLoss;//故障停机损失
    private double startShutdown;//开关机
    private double productChange;//更换产品
    private double consumablePart;//易损件
    private double managementLoss;//管理损失
    private double operationalLoss;//操作损失
    private double smallDowntime;//小停机
    private double speedLoss;//速度损失
    private double organizationLoss;//管理损失
    private double logisticLoss;//后勤损失
    private double defectQuantity;//不合格品数量
    private double totalQuantity;//产品总数量

    public String getMachineName()
    {
        return machineName;
    }

    public void setMachineName(String machineName)
    {
        this.machineName = machineName;
    }

    public double getCalendarTime()
    {
        return calendarTime;
    }

    public void setCalendarTime(double calendarTime)
    {
        this.calendarTime = calendarTime;
    }

    public double getPlanneddowntimeLoss()
    {
        return planneddowntimeLoss;
    }

    public void setPlanneddowntimeLoss(double planneddowntimeLoss)
    {
        this.planneddowntimeLoss = planneddowntimeLoss;
    }

    public double getDowntimeLoss()
    {
        return downtimeLoss;
    }

    public void setDowntimeLoss(double downtimeLoss)
    {
        this.downtimeLoss = downtimeLoss;
    }

    public double getStartShutdown()
    {
        return startShutdown;
    }

    public void setStartShutdown(double startShutdown)
    {
        this.startShutdown = startShutdown;
    }

    public double getProductChange()
    {
        return productChange;
    }

    public void setProductChange(double productChange)
    {
        this.productChange = productChange;
    }

    public double getConsumablePart()
    {
        return consumablePart;
    }

    public void setConsumablePart(double consumablePart)
    {
        this.consumablePart = consumablePart;
    }

    public double getManagementLoss()
    {
        return managementLoss;
    }

    public void setManagementLoss(double managementLoss)
    {
        this.managementLoss = managementLoss;
    }

    public double getOperationalLoss()
    {
        return operationalLoss;
    }

    public void setOperationalLoss(double operationalLoss)
    {
        this.operationalLoss = operationalLoss;
    }

    public double getSmallDowntime()
    {
        return smallDowntime;
    }

    public void setSmallDowntime(double smallDowntime)
    {
        this.smallDowntime = smallDowntime;
    }

    public double getSpeedLoss()
    {
        return speedLoss;
    }

    public void setSpeedLoss(double speedLoss)
    {
        this.speedLoss = speedLoss;
    }

    public double getOrganizationLoss()
    {
        return organizationLoss;
    }

    public void setOrganizationLoss(double organizationLoss)
    {
        this.organizationLoss = organizationLoss;
    }

    public double getLogisticLoss()
    {
        return logisticLoss;
    }

    public void setLogisticLoss(double logisticLoss)
    {
        this.logisticLoss = logisticLoss;
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
