wdefine(function(){
	var me = this;
	var url = Jx.Global.API_PREFIX + "/devicemgmt/devices/platforms";
	
	this.on("loaded", function(){
		Jx.RestClient.get(url, function(result, status, xhr){
			me.component('device_platformchart').data(result);
	    });
	});
});