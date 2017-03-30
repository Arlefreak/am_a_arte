(function () {
    'use strict';
    var Instafeed = window.Instafeed;
    var $ = window.$;
    var feed = new Instafeed({
        clientId: '29293f7575c2483cb47a61d6839adbf0',
        accessToken: '30631706.29293f7.f4b915e4a06c4f63840f6fe094c8ba2c',
        get: 'user',
        userId: 2198850990,
        // tagName: 'am_a_rte',
                filter: function(image) {
            return image.tags.indexOf('am_a_rte') >= 0;
        },
        resolution: 'standard_resolution',
        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><p>{{caption}}</a></li>',
        limit: 50,
        after: function() {
            $('.my-slider').unslider({
                autoplay: true,
                nav: false,
                arrows: false,
                animation: 'fade'
            });
        }
    });
    feed.run();
}());
