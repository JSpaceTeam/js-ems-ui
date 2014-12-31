wdefine(function(){
	this.on("loaded", function(){
//		toConfigViewer();
	});
	
	this.on("active", function(){
//		toConfigViewer();
	});
	
	this.on("deactive", function(){
		Jx.Global.navigation.switchTaskContainer(true);
	});
    
	var me = this;
	var deviceId = this.reqData("navItem");   
	var url = Jx.Global.API_PREFIX + "/devicemgmt/devices/"+ deviceId;

    /*RestApi.get({url: url+"/stagedImages", callback: function(result, status, xhr){
    	var list = result;
    	
    }});
    
    RestApi.get({url: url+"/appliedScripts", callback: function(result, status, xhr){
    	var list = result;
    	
    }});*/
    
    function toConfigViewer() {
    	var navId = me.reqData("navItem");
    	var eventId = "grid";
    	var subEventId = "$DevicesLandingPage";
    	var moClass = "net.juniper.jmp.cmp.deviceManager.DeviceDO";
    	var properties = '['+navId+']';
    	
    	//ext3 params
    	var params = {
    			subtaskConfig: {
    				eventId: eventId,
    				subEventId: subEventId,
    				moClassType: moClass,
    				properties: properties
    			}
    	};
    	Jx.Navigation.navigateExtLegacyToPart("configViewer", null, "ext3", params, me.el.find("#configurationsContainer"));
    }
    
});