wdefine(function(){
	this.config("device_platformchart", {
		height: "168",
		title: {
            text: "Platforms of Devices"
        },
        legend: {
            position: "right"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [
            {
            	name: "MX240",
            	field:"mx240"
            },
            {
            	name: "M71",
            	field: "m71"
            },
            {
            	name: "M101",
            	field: "m101"
            },
            {
            	name: "M10",
            	field: "m10"
            },
            {
            	name: "EX4500-40F",
            	field: "ex450040f"
            },
            {
            	name: "EX4200-48F",
            	field: "ex420048f"
            },
            {
            	name: "EX4200-24T",
            	field: "ex420024t"
            },
            {
            	name: "EX3300-48P",
            	field: "ex330048p"
            },
            {
            	name: "EX3300-24T",
            	field: "ex330024t"
            }],
            valueAxis: {
            	labels: {
            		format: "{0}"
            	},
            	line: {
            		visible: false
            	},
            	axisCrossingValue: 0
            },
            categoryAxis: {
            	visible: false,
            	categories: ["Platforms"],
            	line: {
            		visible: false
            	},
            	labels: {
            		padding: {top: 0}
            	}
            },
            tooltip: {
            	visible: true,
            	format: "{0}",
            	template: "#= series.name #: #= value #"
            }
    	});
});
