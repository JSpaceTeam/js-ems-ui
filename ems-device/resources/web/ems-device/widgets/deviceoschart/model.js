wdefine(function(){
	this.config("device_oschart", {
		height: "168",
		title: {
            text: "OS Versions"
        },
        legend: {
            visible: true,
            position: "right"
        },
        seriesDefaults: {
            type: "pie",
            labels: {
                visible: false,
                background: "transparent",
                template: "#= category #: #= value#%"
            }
        },
        series: [{
            field: "share",
            startAngle: 150,
            categoryField: "osversion",
            padding: 0
        }],
        tooltip: {
        	visible: true,
            format: "{0}%"
        }
    });
});
