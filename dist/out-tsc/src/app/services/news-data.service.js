import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Origin": " https://www.npoint.io",
        "Access-Control-Allow-Origin": "*"
        // "secretKey":"$2b$10$xkMTelHWMW6vhHJWyHJhresCsNKaPyb1rrkXk0ALg.u605JLu9YwO"
    })
};
let NewsDataService = class NewsDataService {
    // npointBaseUrl:string="https://www.npoint.io/documents/680bba8d293902089d18";
    constructor(http) {
        this.http = http;
        // apiUrl : string = "api/News";
        // baseApiGet:string="https://api.jsonbin.io/b/5ea55a0d1299b93742365823/4";
        // baseApiPut:string="https://api.jsonbin.io/b/5ea55a0d1299b93742365823";
        // baseApiPost:string="https://www.jsonstore.io/aafe2eb88aadf6310cfdb973cc7a4d3bb4378f149874701c073d76144c0b4681";
        // secretKey:string="$2b$10$xkMTelHWMW6vhHJWyHJhresCsNKaPyb1rrkXk0ALg.u605JLu9YwO";
        this.jsonStorageBase = "https://jsonstorage.net/api/items/22cab926-1f6a-46a5-9603-5dc37b5119ec";
    }
    getNews() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("inside the service");
            const data = yield this.http.get(this.jsonStorageBase).toPromise();
            console.log("data=====", { data });
            return data;
        });
    }
    getNewsById(newsId) {
        return __awaiter(this, void 0, void 0, function* () {
            let news;
            const oldNews = yield this.getNews();
            news = oldNews.find(a => newsId == a.id);
            return news;
        });
    }
    addNews(News) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldNews = yield this.getNews();
            console.log("previous_news====", oldNews);
            let id = 1;
            yield oldNews.push(News);
            oldNews.map((news) => {
                console.log("previous_news====", news);
                if (news)
                    news.id = id++;
            });
            console.log("previous_news====", oldNews);
            const data = yield this.http.put(this.jsonStorageBase, oldNews, httpOptions).toPromise();
            console.log({ data });
            return data;
            // })
            // return  this.http.get<INews[]>(this.baseApiGet);
        });
    }
    deleteAll() {
        let News = [];
        const data = this.http.put(this.jsonStorageBase, News, httpOptions).toPromise();
        console.log({ data });
        return data;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occured:', error.error.message);
        }
        else {
            console.error(error.status);
        }
        return throwError('Something');
    }
};
NewsDataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NewsDataService);
export { NewsDataService };
//# sourceMappingURL=news-data.service.js.map