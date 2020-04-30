import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Assignment';
        this.show = false;
        this.authService.currentUser.subscribe(x => {
            console.log("x======", x);
            this.currentUser = x;
        });
    }
    ngOnInit() {
        this.isLoggedIn();
    }
    isLoggedIn() {
        if (localStorage.getItem('isLoggedIn') == "true") {
            this.loggedIn = true;
            this.loggedOut = false;
        }
        else {
            this.loggedIn = false;
            this.loggedOut = true;
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/dashboard']);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map