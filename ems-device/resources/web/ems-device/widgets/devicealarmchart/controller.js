wdefine(function(){
	var me = this;
	var deviceId = this.reqData("navItem");   
	var url = Jx.Global.API_PREFIX + "/devicemgmt/devices/alarms";
	
	this.on("loaded", function(){
		Jx.RestClient.get(url, function(result, status, xhr){
			me.component('alarm_chart').data(result);
	    });
	});

	
});