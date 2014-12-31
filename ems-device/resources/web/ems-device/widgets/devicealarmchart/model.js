wdefine(function(){
	this.metadata("alarm_chart", {
		height: "168",
		title: {
            text: "Alarms of Devices"
        },
        legend: {
            position: "right"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [
            {
            	name: "Critical",
                field: "critical"
            },
            {
            	name: "Major",
            	field: "major"
            },
            {
            	name: "Minor",
            	field: "minor"
            },
            {
            	name: "Warning",
            	field: "warning"
            },
            {
            	name: "Indeterminate",
            	field: "indeterminate"
            },
            {
            	name: "Normal",
            	field: "normal"
            },
            {
            	name: "Cleared",
            	field: "cleared"
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
            	categories: ["Alarms"],
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
