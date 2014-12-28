wdefine(function() {
    this.metadata("navtab", {
        currentItem : 2
    });
    
    var deviceId = this.reqData("navItem");
    
    this.model("template_model", {
        url : Jx.Global.API_PREFIX + "/devicemgmt/devices/"+deviceId+"/template"
    });

    this.metadata("template_grid", {
        height : 390,
        model : 'template_model',
        columns : [ {
            "type" : "string",
            "field" : "name",
            "title" : "Template Name",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "type",
            "title" : "Type",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "version",
            "title" : "Version",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "state",
            "title" : "State",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "actions",
            "title" : "Actions",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "timestamp",
            "title" : "Timestamp",
            "visible" : true
        } ],
        columnMenu : true,
        groupable : false,
        pageable : false,
        scrollable : false,
        selectable : "multiple,row",
        sortable : true,
        resizable : true,
        reorderable : true
    });

    this.metadata("outofband_grid", {
        height : 390,
        model : 'template_model',
        columns : [ {
            "type" : "string",
            "field" : "time",
            "title" : "Time",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "user",
            "title" : "User",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "configuration_change",
            "title" : "Configuration Change",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "actions",
            "title" : "Actions",
            "visible" : true
        } ],
        columnMenu : true,
        groupable : false,
        pageable : false,
        scrollable : false,
        selectable : "multiple,row",
        sortable : true,
        resizable : true,
        reorderable : true
    });

    this.metadata("changelog_grid", {
        height : 390,
        model : 'template_model',
        columns : [
        {
            "type" : "string",
            "field" : "crid",
            "title" : "CR Id",
            "visible" : true
        },
        {
            "type" : "string",
            "field" : "timestamp",
            "title" : "Timestamp",
            "visible" : true
        },
        {
            "type" : "string",
            "field" : "author",
            "title" : "Author",
            "visible" : true
        },
        {
            "type" : "string",
            "field" : "config_change",
            "title" : "Configuration Change",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "type",
            "title" : "Change Type",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "application",
            "title" : "Application Name",
            "visible" : true
        }, {
            "type" : "string",
            "field" : "comments",
            "title" : "Commit Comments",
            "visible" : true
        } ],
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