wdefine(function() {
	var me = this;
	var initedTabTasks = {};
	var navTab = this.component("navtab");
	this.on("loaded", function(e) {
		navTab.focus();
	});
	this.openTab = function(tabname) {
		if(tabname == "deviceos"){
			navTab.active(4);
		}
		else if(tabname == "deviceinventory"){
			navTab.active(3);
		}
		else if(tabname == "deviceconfig"){
			navTab.active(2);
		}
		else if(tabname == "deviceinventory"){
			navTab.active(1);
		}
	};
	
	navTab.on("activate", function(options){
		var item = options.trigger;
		doInitApp("ems-device/" + item, {navItem: this.ctx.reqData("navItem")}, {container: navTab.content(item), parent: me});
	});

    this.on("loaded", function() {
        doInitApp("ems-device/deviceoverview", {navItem: this.reqData("navItem")}, {container: navTab.content(0), parent: me});
    });

    function doInitApp(id, reqData, options){
        options.clear = false;
        for(var i in initedTabTasks)
            initedTabTasks[i].visible(false);
        var task = Jx.Navigation.navigateToPart(id, reqData, options);
        initedTabTasks[id] = task;
    }
	/*
	var model = this.model("device_list_model");

	

	
	model.on("syncover", function(){
		model.select(me.reqData("navItem"));
		if(model.totalRecords() >= 10){
			me.component("moredevicesbt").visible(true);
		}
	});
	
	model.on("selection", function(options){
		var id = options.selection.ids[0];
		if(id == me.reqData("navItem"))
			return;
		var parent = me.parent;
		var selectedRows = me.reqData("selectedRows");
		var title = options.selection.rows[0].get("name");
		Jx.Navigation.positionStack(me.parent.uniqueId);
		Jx.Navigation.navigateToStack("js-ems-ui/devicedetails", {navItem: id, selectedRows: selectedRows}, {title: title, parent: parent});
	});
	*/
	//this.component("moredevicesbt").on("click", function(){
	//	Jx.Navigation.positionStack(me.parent.uniqueId);
	//});
});