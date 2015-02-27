wdefine(["css!./os"],function(){
	this.config("navtab", {currentItem: 4});
	
	var deviceId = this.reqData("navItem");   
	var imageurl = Jx.Global.API_PREFIX + "/devicemgmt/devices/"+ deviceId + '/stagedimages';
	this.model("stagedImages_model", {url: imageurl});
	
	this.config("stagedimages_grid", {height: 390, model: 'stagedImages_model',
		columns : [{"type":"string", "field":"partition","title":"Image Name","hidden":false, "width":"180px", link: true},
		           {"type":"string","field":"domain","title":"Domain","hidden":false, width: "230px"},
		           {"type":"string","field":"version","title":"Version","hidden":false, width: "230px"},
		           {"type":"string","field":"serials","title":"Series","hidden":false, "width":"230px"},
                   {"type":"string","field":"actions","title":"Actions","hidden":false, "width":"230px"}],
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

    this.config("software_grid", {height: 390, model: 'stagedImages_model',
        columns : [{"type":"string", "field":"package","title":"Package Name","hidden":false, "width":"180px", link: true},
            {"type":"string","field":"domain","title":"Description","hidden":false, width: "230px"},
            {"type":"string","field":"version","title":"Version","hidden":false, width: "230px"},
            {"type":"string","field":"type","title":"Type","hidden":false, "width":"230px"}],
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

    this.config("licenses_grid", {height: 390, model: 'stagedImages_model',
        columns : [{"type":"string", "field":"feature","title":"Feature Name","hidden":false, "width":"180px", link: true},
            {"type":"string","field":"license","title":"License Count","hidden":false, width: "230px"},
            {"type":"string","field":"used","title":"Used Count","hidden":false, width: "230px"},
            {"type":"string","field":"need","title":"Need Count","hidden":false, "width":"230px"},
            {"type":"string","field":"given","title":"Given Count","hidden":false, "width":"230px"}],
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
	
	var scripturl = Jx.Global.API_PREFIX + "/devicemgmt/devices/"+ deviceId + '/appliedscripts';
	this.model("appliedScripts_model", {url: scripturl});
	
	this.config("appliedscripts_grid", {height: 390, model: 'appliedScripts_model',
		columns : [{"type":"string", "field":"scriptname","title":"Script Name","hidden":false, "width":"180px", link: true},
		           {"type":"string","field":"domain","title":"Domain","hidden":false, width: "230px",visible:true},
		           {"type":"string","field":"type","title":"Type","hidden":false, width: "230px",visible:true},
		           {"type":"string","field":"version","title":"Version","hidden":false, width: "230px",visible:true},
		           {"type":"string","field":"series","title":"Series","hidden":false, width: "230px",visible:true},
		           {"type":"string","field":"lastapplied","title":"Last Applied","hidden":false, "width":"230px",visible:true}],
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

});
