wdefine(function() {
    var me = this;
    var deviceId = this.reqData("navItem");

    this.on('loaded', function () {
    });

    this.el.find("#edit_config_button").click(function(){
        me.parent.openTab("configurations");
    });

    this.model('physical_inventory_model').on('selection', function(options){
        var physicalInventoryModel = me.model('physical_inventory_model');
        var physicalInterfaceModel = me.model('physical_interfaces_model');
        var logicalInterfaceModel = me.model('logical_interfaces_model');
        var selection = physicalInventoryModel.selections();
        if(selection && selection.rows.length === 1){
            var row = selection.rows[0];
//            $('#inventoryDetail').find('#moduleVal').text(row.value('name'));
//            $('#inventoryDetail').find('#moduleNumberVal').text(row.value('installedEquipmentObjectType'));
//            $('#inventoryDetail').find('#logicalInterfaceVal').text('2');
//            $('#inventoryDetail').find('#statusVal').text('UP');
//            $('#inventoryDetail').find('#partNumberVal').text(row.value('installedPartNumber'));
//            $('#inventoryDetail').find('#physicalInterfaceVal').text('1');
//            $('#inventoryDetail').find('#descriptionVal').text(row.value('installedDescription'));
//            $('#inventoryDetail').find('#revisionVal').text(row.value('installedVersion'));
//            $('#inventoryDetail').find('#serialNumberVal').text(row.value('installedSerialNumber'));
            var equipmentPath = row.value('path');
            var physicalInterfaceUrl = Jx.Global.API_PREFIX + '/devmgt:devicemgt/devices/device='+ deviceId +'/interfaces';
            var logicalInterfaceUrl = Jx.Global.API_PREFIX + '/devmgt:devicemgt/devices/device='+ deviceId +'/logicalInterfaces';
            physicalInterfaceModel.url(physicalInterfaceUrl);
            logicalInterfaceModel.url(logicalInterfaceUrl);
            physicalInterfaceModel.reload();
            logicalInterfaceModel.reload();
        }
    });
});