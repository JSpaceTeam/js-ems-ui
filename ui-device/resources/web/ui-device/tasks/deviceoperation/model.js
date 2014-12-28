wdefine(function() {
    this.metadata("navtab", {
        currentItem : 3
    });
    
    var deviceId = this.reqData("navItem");
    
    this.model("partition_model", {
        url : Jx.Global.API_PREFIX + "/devicemgmt/devices/"+deviceId+"/partition"
    });

    this.metadata("associated_scripts_grid", {
        height : 390,
        model : 'partition_model',
        columns : [ {
            "type" : "string",
            "field" : "name",
            "title" : "Script Name",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "type",
            "title" : "Script Type",
            "visible" : true
        },{
            "type" : "string",
            "field" : "version",
            "title" : "Staged Version",
            "visible" : true
        },{
            "type" : "string",
            "field" : "latestversion",
            "title" : "Latest Version",
            "visible" : true
        },{
            "type" : "string",
            "field" : "status",
            "title" : "Activation Status",
            "visible" : true
        },{
            "type" : "string",
            "field" : "actions",
            "title" : "Actions",
            "visible" : true
        }
        ],
        columnMenu : true,
        groupable : false,
        pageable : false,
        scrollable : false,
        selectable : "multiple,row",
        sortable : true,
        resizable : true,
        reorderable : true
    });

    this.metadata("scriptexec_grid", {
        height : 390,
        model : 'partition_model',
        columns : [ {
            "type" : "string",
            "field" : "name",
            "title" : "Script Name",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "version",
            "title" : "Version",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "status",
            "title" : "Status",
            "visible" : true
        },{
            "type" : "string",
            "field" : "results",
            "title" : "Results",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "starttime",
            "title" : "Execution Start Time",
            "visible" : true
        },{
            "type" : "string",
            "field" : "endtime",
            "title" : "Execution End Time",
            "visible" : true
        }],
        columnMenu : true,
        groupable : false,
        pageable : false,
        scrollable : false,
        selectable : "multiple,row",
        sortable : true,
        resizable : true,
        reorderable : true
    });

    this.metadata("partition_grid", {
        height : 390,
        model : 'partition_model',
        columns : [ {
            "type" : "string",
            "field" : "name",
            "title" : "Partition Name",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "domain",
            "title" : "Domain",
            "visible" : true
        }],
        columnMenu : true,
        groupable : false,
        pageable : false,
        scrollable : false,
        selectable : "multiple,row",
        sortable : true,
        resizable : true,
        reorderable : true
    });
});