wdefine(function() {
	var me = this;
	var deviceId = this.reqData("navItem");   
	var url = Jx.Global.API_PREFIX + "/devicemgmt/devices/"+ deviceId;
	
	this.on('loaded', function(){
	    Jx.RestClient.get({url: url+"/statusstatistics", callback: function(result, status, xhr){
	    	var hostname = result[0]["hostname"];
	    	var sn =  result[0]["SerialNumber"];
	    	var softwareversion = result[0]["SoftwareRelease"];
	    	var lastrootedtimestamp = result[0]["LastRebootedTimestamp"];
	    	var connstatus = result[0]["connStatus"];
	    	
	    	$("#device_hostname").html(hostname);
			$("#device_sn").html(sn);
			$("#device_sv").html(softwareversion);
			$("#device_status").html(connstatus);
			$("#device_uptimes").html(new Date(lastrootedtimestamp));
	    }});
	    
	    Jx.RestClient.get({url: url+"/configurations", callback: function(result, status, xhr){
	    	var devicetemplate = result["template"];
	    	var configbackup =  result["configbackup"];
	    	
	    	$("#device_template").html("&nbsp;" + devicetemplate + "&nbsp;");
			$("#device_configbackup").html("&nbsp;" + configbackup + "&nbsp;");
	    }});
		
		
		Jx.RestClient.get({url: url+"/os", callback: function(result, status, xhr){
	    	var image = result["image"];
	    	var stagedimage =  result["stagedimage"];
	    	var applyedscript = result["applyedscript"];
	    	
	    	$("#device_image").html("&nbsp;" + image + "&nbsp;");
			$("#device_stagedimage").html("&nbsp;" + stagedimage + "&nbsp;");
			$("#device_script").html("&nbsp;" + stagedimage + "&nbsp;");
	    }});
	
		Jx.RestClient.get({url: url+"/operation", callback: function(result, status, xhr){
	    	var partition =  result["partition"];
	    	var lsyscount = result["lsyscount"];
	    	var lastreboot = result["lastreboot"];
            var date = new Date(lastreboot);
	    	var time_string = date.toUTCString();

            if(result["configstatus"] == 1) {
                $("#device_sync").html("Yes <a style='margin-left: 20px;'>Resynchronize with network</a>");
            }
            else
            {
                $("#device_sync").html("No&nbsp;");
            }
	    	//$("#device_sync").html(configstatus + "&nbsp;");
			$("#device_partition").html("&nbsp;" + partition + "&nbsp;");
			$("#device_lsys").html("&nbsp;" + lsyscount + "&nbsp;");
			$("#device_lastreboot").html(time_string + "&nbsp;");
	    }});
	});
	
	this.el.find("#os a").click(function(){
		me.parent.openTab("os");
	});
	
	this.el.find("#configurations a").click(function(){
		me.parent.openTab("configurations");
	});
	
	this.el.find("#operations a").click(function(){
		me.parent.openTab("operations");
	});
	
	this.el.find("#chassis").click(function(){
		me.parent.openTab("chassis");
	});
	
});