wdefine(["css!./details"], function(){
	this.metadata("executescriptbt", {link: true});
	
	this.model("template_model", {});
	
	this.metadata("template_grid", {height: 390, model: 'template_model', 
		columns : [{"type":"string", "field":"name","title":"Template Name","visible":true},
		           {"type":"string","field":"type","title":"Type","visible":true},
		           {"type":"string","field":"version","title":"Version","visible":true},
		           {"type":"string","field":"state","title":"State","visible":true}],
		columnMenu:true,
		groupable:false,
		pageable:false,
		scrollable:false,
		selectable:"multiple,row",
		sortable:true,
		resizable:true, 
		reorderable:true
	});
	
	this.model("configlet_model", {});
		
	this.metadata("configlet_grid", {height: 390, model: 'configlet_model', 
			columns : [{"type":"string", "field":"name","title":"Configlet Name","visible":true},
			           {"type":"string","field":"category","title":"Category","visible":true},
			           {"type":"string","field":"devicefamily","title":"Device Family","visible":true},
			           {"type":"string","field":"data","title":"Applied Date","visible":true}],
	columnMenu:true,
	groupable:false,
	pageable:false,
	scrollable:false,
	selectable:"multiple,row",
	sortable:true,
	resizable:true, 
	reorderable:true
	});
	
	this.model("configjob_model", {});
	
	this.metadata("configjob_grid", {height: 390, model: 'configjob_model', 
			columns : [{"type":"string", "field":"name","title":"Job Name","visible":true},
			           {"type":"string","field":"category","title":"Category","visible":true},
			           {"type":"string","field":"devicefamily","title":"Device Family","visible":true},
			           {"type":"string","field":"state","title":"Status","visible":true}],
	columnMenu:true,
	groupable:false,
	pageable:false,
	scrollable:false,
	selectable:"multiple,row",
	sortable:true,
	resizable:true, 
	reorderable:true
	});
});