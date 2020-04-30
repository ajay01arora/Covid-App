import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddNewsComponent = class AddNewsComponent {
    constructor(fb, newsdata, router) {
        this.fb = fb;
        this.newsdata = newsdata;
        this.router = router;
        this.saveButton = "Save";
        this.submitted = false;
    }
    ngOnInit() {
        this.newsForm = this.fb.group({
            newsTitle: ["", [Validators.required, Validators.minLength(10)]],
            description: ["", [Validators.required, Validators.minLength(10)]],
            image_link: ["", [Validators.required, Validators.minLength(10)]],
            full_news: ["", [Validators.required, Validators.minLength(10)]]
        });
    }
    get f() {
        return this.newsForm.controls;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            this.saveButton = "Saving";
            this.submitted = true;
            // console.log("news=====",News)
            if (this.newsForm.invalid) {
                return;
            }
            if (this.newsForm.valid) {
                //alert('Form Submitted succesfully!!!\n Check the values in browser console.');
                console.log(this.newsForm.value);
                console.table(this.newsForm.value);
                const data = yield this.newsdata.addNews(this.newsForm.value);
                if (data) {
                    setTimeout(() => {
                        this.router.navigate(['/news']);
                    }, 1500);
                }
                console.log("add_news=====data====", data);
            }
            //this.newsdata.addNews(News).subscribe();
            // this.router.navigate(['/news']);
        });
    }
};
AddNewsComponent = __decorate([
    Component({
        selector: 'app-add-news',
        templateUrl: './add-news.component.html',
        styleUrls: ['./add-news.component.css']
    })
], AddNewsComponent);
export { AddNewsComponent };
//# sourceMappingURL=add-news.component.js.map