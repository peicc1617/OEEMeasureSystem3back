package xjtucad.model;

public class OEEData
{
    private String calendar_data;//日期
    private String machine_name;//设备名称
    private double calendar_time;//日历时间
    private double rest_time;//休息时间
    private double downtime_maintenance;//停机保养
    private double downtime_noEquipment;//非设备因素停机
    private double downtime_loss;//故障停机
    private double start_shutdown;//开关机
    private double product_change;//更换产品
    private double equipment_adjustment;//设备调整
    private double speed_loss;//速度降低
    private double small_downtime;//空转、间歇停机
    private double defect_quantity;//不合格品数量
    private double total_quantity;//产品总数量

    public String getCalendar_data()
    {
        return calendar_data;
    }

    public void setCalendar_data(String calendar_data)
    {
        this.calendar_data = calendar_data;
    }

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

    public double getRest_time()
    {
        return rest_time;
    }

    public void setRest_time(double rest_time)
    {
        this.rest_time = rest_time;
    }

    public double getDowntime_maintenance()
    {
        return downtime_maintenance;
    }

    public void setDowntime_maintenance(double downtime_maintenance)
    {
        this.downtime_maintenance = downtime_maintenance;
    }

    public double getDowntime_noEquipment()
    {
        return downtime_noEquipment;
    }

    public void setDowntime_noEquipment(double downtime_noEquipment)
    {
        this.downtime_noEquipment = downtime_noEquipment;
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

    public double getEquipment_adjustment()
    {
        return equipment_adjustment;
    }

    public void setEquipment_adjustment(double equipment_adjustment)
    {
        this.equipment_adjustment = equipment_adjustment;
    }

    public double getSpeed_loss()
    {
        return speed_loss;
    }

    public void setSpeed_loss(double speed_loss)
    {
        this.speed_loss = speed_loss;
    }

    public double getSmall_downtime()
    {
        return small_downtime;
    }

    public void setSmall_downtime(double small_downtime)
    {
        this.small_downtime = small_downtime;
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
}
