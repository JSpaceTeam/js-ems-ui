wdefine(function(){
	var me = this;
	var url = Jx.Global.API_PREFIX + "/devicemgmt/devices/osversion";
	
	this.on("loaded", function(){
		Jx.RestClient.get({url: url, callback: function(result, status, xhr){
			me.component('device_oschart').data(result);
	    }});
	});
});