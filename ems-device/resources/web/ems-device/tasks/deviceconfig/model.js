wdefine(function() {
    this.config("navtab", {
        currentItem : 2
    });
    
    var deviceId = this.reqData("navItem");
    
    this.model("template_model", {
        url : Jx.Global.API_PREFIX + "/devicemgmt/devices/"+deviceId+"/template"
    });

    this.model("outofband_model", {
        url : Jx.Global.API_PREFIX + "/devicemgmt/devices/"+deviceId+"/template"
    });

    this.model("changelog_model", {
        url : Jx.Global.API_PREFIX + "/devicemgmt/devices/"+deviceId+"/template"
    });

    this.config("config_grid", {
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
        } ]
    });

    this.config("template_grid", {
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
        } ]
    });

    this.config("outofband_grid", {
        model : 'outofband_model',
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
        } ]
    });

    this.config("changelog_grid", {
        model : 'changelog_model',
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
        } ]
    });
});