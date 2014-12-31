wdefine(function() {
    var me = this;
    this.loadExtLegacyApp = function() {
        var navId = me.reqData("navItem");
        var eventId = "grid";
        var subEventId = "$DevicesLandingPage";
        var moClass = "net.juniper.jmp.cmp.deviceManager.DeviceDO";
        var properties = '[' + navId + ']';

        // ext3 params
        var params = {
            subtaskConfig : {
                eventId : eventId,
                subEventId : subEventId,
                moClassType : moClass,
                properties : properties
            }
        };
//        Jx.Navigation.navigateExtLegacyToPart("configViewer", null, "ext3", params,
//                me.el.find("#configurationsContainer"));
    };
});