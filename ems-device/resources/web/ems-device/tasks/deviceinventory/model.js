wdefine(["css!./inventory"], function(){
    var app = this;

    var deviceId = this.reqData('navItem');
    var physicalInventoryUrl = Jx.Global.API_PREFIX + '/devmgt:devicemgt/devices/device='+ deviceId +'/inventories';
    this.model('physical_inventory_model', {
        dataSelector: "inventory",
        url: physicalInventoryUrl,
        pageSize:-1,
        autoSelect: true
    });
    this.model('physical_interfaces_model', {
        lazyInit: true,
        dataSelector: "interface"
    });
    this.model('logical_interfaces_model', {
        lazyInit: true,
        dataSelector: "interface"
    });

    this.config('physical_interfaces_grid', {
        model: 'physical_interfaces_model',
        height: 390,
        columns : [{"type":"string", "field":"deviceName","title":"Device Name","hidden":false, "width":"180px"},
            {"type":"string","field":"name","title":"Physical Interface Name","hidden":false, width: "230px"},
            {"type":"string","field":"operStatus","title":"Operational Status","hidden":false, width: "120px", template: deviceStateFormatter},
            {"type":"string","field":"logical","title":"Logical Interfaces","hidden":false},
            {"type":"string","field":"hardwarePhysicalAddress","title":"MAC Address","hidden":false, width: "230px"},
            {"type":"string","field":"adminStatus","title":"Admin Status","hidden":false, width: "150px", template: deviceStateFormatter},
            {"type":"string","field":"ipAddr","title":"Ip Address","hidden":false}],
        columnMenu:true,
        groupable:false,
        pageable:{
            buttonCount: 5,
            input: true,
            pageSize: 15,
            pageSizes: [15, 20, 30],
            refresh: true
        },
        scrollable:false,
        selectable:"multiple,row",
        sortable:true,
        resizable:true,
        reorderable:true
    });

    this.config('logical_interfaces_grid', {
        model: 'logical_interfaces_model',
        height: 390,
        columns : [{"type":"string", "field":"deviceName","title":"Device Name","hidden":false, "width":"180px"},
            {"type":"string","field":"name","title":"Physical Interface Name","hidden":false, width: "230px"},
            {"type":"string","field":"operStatus","title":"Operational Status","hidden":false, width: "120px", template: deviceStateFormatter},
            {"type":"string","field":"logical","title":"Logical Interfaces","hidden":false},
            {"type":"string","field":"hardwarePhysicalAddress","title":"MAC Address","hidden":false, width: "230px"},
            {"type":"string","field":"adminStatus","title":"Admin Status","hidden":false, width: "150px", template: deviceStateFormatter},
            {"type":"string","field":"ipAddr","title":"Ip Address","hidden":false}],
        columnMenu:true,
        groupable:false,
        pageable:{
            buttonCount: 5,
            input: true,
            pageSize: 15,
            pageSizes: [15, 20, 30],
            refresh: true
        },
        scrollable:false,
        selectable:"multiple,row",
        sortable:true,
        resizable:true,
        reorderable:true
    });

    this.config('physical_inventory_tree', {model: 'physical_inventory_model', dataTextField:'name'})

    function deviceStateFormatter(dataItem) {
        var status = dataItem.get("operStatus");
        var image_path = "/js-ems-ui/tasks/devicemgmt/images/down.png";
        if(status == "UP") {
            image_path = "/js-ems-ui/tasks/devicemgmt/images/up.png";
        }
        return '<div class="app_device_state_render"><img src='+image_path+' style="margin-right:5px"></img></div>';
    }
});