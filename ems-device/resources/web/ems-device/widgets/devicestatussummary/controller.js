wdefine(function(){
	this.on("loaded", function(){
		this.el.find("a").click(function(){
			var id = $(this).attr("id");
			if(id.startWith("device_status_")){
				var state = id.substring("device_status_".length);
				var value = '{"type": "field", "value": "' + state + '","field":"dc.deviceState"}';
				var options = {value: value, eventCtx: {}};
				me.trigger("statusselection", options);
			}
			
			if(id.startWith("device_conn_status_")){
				var state = id.substring("device_conn_status_".length);
				var value = '{"type": "field", "value": "' + state + '","field":"dcs.connStatus"}';
				var options = {value: value, eventCtx: {}};
				me.trigger("connstatusselection", options);
			}
		});
	});
	

    var me = this;
    Jx.RestClient.get({url: Jx.Global.API_PREFIX + "/devicemgmt/devices/statusstatistics", callback: function(result, status, xhr){
    	var blankList = {};
    	for(var i = 0; i < 18; i ++){
    		blankList[i] = 0;
    	}
    	var list = result.managedstatus;
    	for(var i = 0; i < list.length; i ++){
    		var status = list[i];
    		blankList[status.devicestate] = status.state_count;
    	}
    	for(var i in blankList){
    		me.el.find("#device_status_" + i).html("&nbsp;" + blankList[i] + "&nbsp;");
    	}
    	
    	var connList = {};
    	for(var i = -1; i < 2; i ++){
    		connList[i] = 0;
    	}
    	var list = result.connstatus;
    	for(var i = 0; i < list.length; i ++){
    		var status = list[i];
    		connList[status.connStatus] = status.conn_count;
    	}
    	for(var i in connList){
    		me.el.find("#device_conn_status_" + i).html("&nbsp;" + connList[i] + "&nbsp;");
    	}
    	
    }});
});