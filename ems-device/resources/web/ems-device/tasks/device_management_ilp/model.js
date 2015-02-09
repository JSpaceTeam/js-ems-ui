wdefine(function(){
    this.config({title: "Device Management"});
    this.model("main_model", {
        lazyInit: false,
        url: Jx.Global.API_PREFIX + "/devicemanagement:device",
        requestHeader:{Accept:'application/yang.data+json'},
        idAttribute: "uuid",
        dataSelector: "device"
    });

    var menuMeta = [{id:'review_changes', name:'Review/Deploy Pending Changes'}, {id:'deploy_template', name:'Assign/Deploy Template'},
        {id:'view_configuration', name:'View Active Configuration'}, {id:'modify_config', name:' Modify Configuration'},
        {id:'exec_script', name:'Execute Script'}, {id:'apply_configlet', name:'Apply configlet'},
        {id:'separator1', separator: true},
        {id:'looking_glass', name:'Looking Glass'}, {id:'delete_device', name:'Delete Device'},
        {id:'clone_device', name:'Clone Device'}, {id:'reboot_device', name:'Reboot Device'},
        {id:'resync_network', name:'Re-Synchronize with Network'}, {id:'activate_model', name:' Activate Model Device'},
        {id:'separator2', separator: true},
        {id:'ssh_device', name:' SSH to Device'}, {id:'launch_web', name:'Launch Web UI'},
        {id:'modify_auth', name:'Modify Authentication'},
        {id:'separator2', separator: true},
        {id:'tag_it', name:'Tag It'},
        {id:'manage_tags', name:'Manage Tags'},
        {id:'separator3', separator: true},
        {id:'assign_domain', name:'Assign to Domain'},
        {id:'create_template', name:'Create Template from Device'}, {id:'export_inventory', name:'Export Physical Inventory'}];

    this.config("main_grid", {model: 'main_model',
        columns : [
            {"type":"string", "field":"system.hostname","title":"Name","hidden":false, template: "LinkTemplate"},
            {"type":"string", "field":"system.ip","title":"IP Address","hidden":false, template: deviceIpFormatter},
            {"type":"string", "field":"system.serial","title":"Serial Number","hidden":false},
            {"type":"string", "field":"mgtConnection.status","title":"Connection Status", valueMap: [
                {value: "1", text: "Up", image: "/js-ems-ui/tasks/devicemgmt/images/up.png"},
                {value: Nil, text: "Down", image: "/js-ems-ui/tasks/devicemgmt/images/down.png"}
            ]},
            {"type":"string", "field":"configInfo.configStatus","title":"Managed Status", valueMap: [
                {value: "0", text: "Connecting"}, {value: "1", text: "In Sync"}, {value: "2", text: "None"}, {value: "3", text: "Out Of Sync"},
                {value: "4", text: "Sync Failed"}, {value: "5", text: "Synchronizing"}, {value: "6", text: "Modeled"}, {value: "7", text: "In RMA"},
                {value: "8", text: "Reactivating"}, {value: "9", text: "Reactivate Failed"}, {value: "10", text: "Undefined"}, {value: "11", text: "Unknown"},
                {value: "12", text: "In Sync"}, {value: "13", text: "Space Changed"}, {value: "14", text: "Device Changed"}, {value: "15", text: "Space & Device Changed"}, {value: "16", text: "Unmanaged"},
                {value: "17", text: "Waiting for Deployment"}, {value: Nil, text: "NA"}
            ]},
            {"type":"string", "field":"system.platform","title":"Platform","hidden":false},
            {"type":"string", "field":"system.osVersion","title":"OS Version","hidden":true},
            {"type":"string", "field":"schema","title":"Schema Version","hidden":true},
            {"type":"string", "field":"system.domainname","title":"Domain","hidden":true},
            {"type":"string", "field":"system.family","title":"Device Family","hidden":false},
            {"type":"string", "field":"configInfo.candidateConfigState","title":"Configuration State","hidden":true, valueMap: [
                {value: "0", text: "NA"}, {value: "1", text: "Created"}, {value: "2", text: "Approved"}, {value: "3", text: "Rejected"}, {value: Nil, text: "NA"}
            ]},
            {"type":"string", "field":"system.lastRebootTime","title":"Last Rebooted Time","hidden":true, template: deviceRebootedTimeFormatter},
            {"type":"string", "field":"system.vendor","title":"Vendor","hidden":false},
            {"type":"string", "field":"mgtConnection.auth","title":"Authentication Status","hidden":false, valueMap: [
                {value: "0", text: "Credentials Based"}, {value: "1", text: "Key Based"}, {value: "2", text: "Key Conflict"}, {value: Nil, text: "NA"}
            ]},
            {"type":"string", "field":"mgtConnection.type","title":"Connection Type","hidden":true}
        ],
        contextmenus: {menus: menuMeta},
        withBorder: false
    });

    this.config("main_menu", {link: true, menus: [
        {id: 'ext3_discoverDevices', name: 'Add', icon: 'fa fa-plus-circle'},
        {id: 'ext3_uploadKeys',  name: 'Upload Key', icon: 'fa fa-upload'},
        {id: 'show_filter', name : 'Filter', icon: 'fa fa-filter'},
        {id: 'delete',  name: 'Delete', icon: 'fa fa-times-circle'},
        {id: 'actions', name: 'More Actions', menus: menuMeta}
    ]});

    function deviceIpFormatter(dataItem) {
        var ip = dataItem.get("system.ip");
        var part1 = ip & 255;
        var part2 = ((ip >> 8) & 255);
        var part3 = ((ip >> 16) & 255);
        var part4 = ((ip >> 24) & 255);
        return part4 + "." + part3 + "." + part2 + "." + part1;
    }

    function deviceRebootedTimeFormatter(dataItem) {
        //dataItem.get("system.lastRebootTime")
        var rebootedTime = new Date();
        return rebootedTime;
    }
});

