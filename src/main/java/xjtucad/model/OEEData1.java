package xjtucad.model;

public class OEEData1
{
    private String machine_name;//设备名称
    private double calendar_time;//日历时间
    private double planneddowntime_loss;//计划停机损失
    private double downtime_loss;//故障停机损失
    private double start_shutdown;//开关机
    private double product_change;//更换产品
    private double consumable_part;//易损件
    private double managementLoss;//管理损失
    private double operational_loss;//操作损失
    private double small_downtime;//小停机
    private double speedLoss;//速度损失
    private double organization_loss;//管理损失
    private double logistic_loss;//后勤损失
    private double defect_quantity;//不合格品数量
    private double total_quantity;//产品总数量
    private boolean state;
    private int procedureIdForDelete;

    public String getMachine_name()
    {
        return machine_name;
    }

    public void setMachine_name(String machine_name)
    {
        this.machine_name = machine_name;
    }

    public double getCalendar_time()
    {
        return calendar_time;
    }

    public void setCalendar_time(double calendar_time)
    {
        this.calendar_time = calendar_time;
    }

    public double getPlanneddowntime_loss()
    {
        return planneddowntime_loss;
    }

    public void setPlanneddowntime_loss(double planneddowntime_loss)
    {
        this.planneddowntime_loss = planneddowntime_loss;
    }

    public double getDowntime_loss()
    {
        return downtime_loss;
    }

    public void setDowntime_loss(double downtime_loss)
    {
        this.downtime_loss = downtime_loss;
    }

    public double getStart_shutdown()
    {
        return start_shutdown;
    }

    public void setStart_shutdown(double start_shutdown)
    {
        this.start_shutdown = start_shutdown;
    }

    public double getProduct_change()
    {
        return product_change;
    }

    public void setProduct_change(double product_change)
    {
        this.product_change = product_change;
    }

    public double getConsumable_part()
    {
        return consumable_part;
    }

    public void setConsumable_part(double consumable_part)
    {
        this.consumable_part = consumable_part;
    }

    public double getManagementLoss()
    {
        return managementLoss;
    }

    public void setManagementLoss(double managementLoss)
    {
        this.managementLoss = managementLoss;
    }

    public double getOperational_loss()
    {
        return operational_loss;
    }

    public void setOperational_loss(double operational_loss)
    {
        this.operational_loss = operational_loss;
    }

    public double getSmall_downtime()
    {
        return small_downtime;
    }

    public void setSmall_downtime(double small_downtime)
    {
        this.small_downtime = small_downtime;
    }

    public double getSpeedLoss()
    {
        return speedLoss;
    }

    public void setSpeedLoss(double speedLoss)
    {
        this.speedLoss = speedLoss;
    }

    public double getOrganization_loss()
    {
        return organization_loss;
    }

    public void setOrganization_loss(double organization_loss)
    {
        this.organization_loss = organization_loss;
    }

    public double getLogistic_loss()
    {
        return logistic_loss;
    }

    public void setLogistic_loss(double logistic_loss)
    {
        this.logistic_loss = logistic_loss;
    }

    public double getDefect_quantity()
    {
        return defect_quantity;
    }

    public void setDefect_quantity(double defect_quantity)
    {
        this.defect_quantity = defect_quantity;
    }

    public double getTotal_quantity()
    {
        return total_quantity;
    }

    public void setTotal_quantity(double total_quantity)
    {
        this.total_quantity = total_quantity;
    }

    public boolean isState()
    {
        return state;
    }

    public void setState(boolean state)
    {
        this.state = state;
    }

    public int getProcedureIdForDelete()
    {
        return procedureIdForDelete;
    }

    public void setProcedureIdForDelete(int procedureIdForDelete)
    {
        this.procedureIdForDelete = procedureIdForDelete;
    }
}
