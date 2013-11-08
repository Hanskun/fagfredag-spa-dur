define(['plugins/router', 'durandal/app', 'services/yr', 'lib/jquery-ui'], function (router, app, yr) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Hello', moduleId: 'viewmodels/hello', nav: true },
                { route: '*city', title:'City', moduleId: 'viewmodels/city', nav: false}
            ]).buildNavigationModel();
            
            return router.activate();
        },
        attached: function (view) {
            $('#location-search').autocomplete({
                source: function (request, response) {
                    yr.search(request.term).done( function (searchReaults) {
                        response($.map(searchReaults, function (item) {
                            return {
                                label: item.name,
                                value: item.name,
                                url: item.bmurl.split('/').slice(3).join('/')
                            };
                        }));
                    });
                },
                minLength: 2,
                select: function (event, ui) {
                    console.log('Selected city');
                    app.trigger('location.added', ui.item.url);
                }
            })
        }
    };
});