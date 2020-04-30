import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { NewsDataService } from '../services/news-data.service';
let NewsComponent = class NewsComponent {
    constructor(newsData, router) {
        this.newsData = newsData;
        this.router = router;
        this.News = [];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.newsData.getNews();
            console.log("news=======", data);
            this.News = data;
        });
    }
    ViewNews(id) {
        let routeUrl = "view-news/" + id;
        this.router.navigate([routeUrl]);
    }
};
NewsComponent = __decorate([
    Component({
        selector: 'app-news',
        templateUrl: './news.component.html',
        styleUrls: ['./news.component.css'],
        providers: [NewsDataService]
    })
], NewsComponent);
export { NewsComponent };
//# sourceMappingURL=news.component.js.map