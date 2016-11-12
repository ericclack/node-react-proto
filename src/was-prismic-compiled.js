'use strict';

var PRISMIC_API_URL = "http://clack.prismic.io/api";

function getNewsItemsFromPrismic(callback) {
    // Fire off *async* call to get news and then
    // call callback with processed news items
    Prismic.api(PRISMIC_API_URL, function (error, api) {
        var options = {};
        api.query(Prismic.Predicates.at('document.type', 'news-panel'), options, function (error, response) {
            if (error) {
                console.log("Prismic error: ", err);
            } else {
                callback(processPrismicNewsItems(response.results));
            }
        });
    });
}

function processPrismicNewsItems(items) {
    return items.map(function (item) {
        return {
            title: item.getStructuredText('news-panel.title').asText(),
            image: item.getImage('news-panel.image').url,
            description: item.getStructuredText('news-panel.description').asText()

        };
    });
}

//getNewsItemsFromPrismic(console.log);

