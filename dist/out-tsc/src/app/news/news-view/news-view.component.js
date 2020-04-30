import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewsViewComponent = class NewsViewComponent {
    constructor(activatedRoute, route, newsdata) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.newsdata = newsdata;
    }
    ngOnInit() {
        const newsId = this.activatedRoute.snapshot.params.id;
        if (newsId) {
            this.newsdata.getNewsById(newsId).then(data => {
                this.News = data;
            });
        }
    }
};
NewsViewComponent = __decorate([
    Component({
        selector: 'app-news-view',
        templateUrl: './news-view.component.html',
        styleUrls: ['./news-view.component.css']
    })
], NewsViewComponent);
export { NewsViewComponent };
//# sourceMappingURL=news-view.component.js.map