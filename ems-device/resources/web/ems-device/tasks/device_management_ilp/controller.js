wdefine(function () {
    var me = this;
    /**
     * register events listener to selector elements and further elements.
     */
    this.component("main_grid").on("celllink", function (options) {
        if(options.field == "system.hostname")
            Jx.Navigation.navigateToStack("ems-device/device_details", {navItem: options.value.id}, {title: options.value.title, parent: me});
    });

    this.component('main_menu').on('click', function (options) {
        if (options.trigger == "ext3_uploadKeys") {
            var action = options.trigger.substring("ext3_".length);
            Jx.Navigation.navigateExtLegacyToDialog(action, null, "ext3", null, {width: 1258, height: 586});
        }
        else if(options.trigger == "review_changes") {
            alert("review_changes");
        }
        else if(options.trigger == "deploy_template"){
            alert("deploy_template");
        }
    });
});
