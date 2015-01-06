wdefine(["css!./construction", "./jquery.countdown"], function() {
    var austDay = new Date("January 28, 2012 00:00:00");
    $('#countdown').countdown({until: austDay, layout: '<div class="item"><p>{dn}</p> <span>-{dl}-</span></div> <div class="item"><p>{hn}</p> <span>-{hl}-</span></div> <div class="item"><p>{mn}</p> <span>-{ml}-</span></div> <div class="item"><p>{sn}</p> <span>-{sl}-</span></div>'});
    $('#year').text(austDay.getFullYear());
});