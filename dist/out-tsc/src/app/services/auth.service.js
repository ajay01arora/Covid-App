import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.npointBaseUrl = "https://www.npoint.io/documents/680bba8d293902089d18";
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = userData, loginSuccess = false;
            const adminUser = yield this.http.get(`${this.npointBaseUrl}`).toPromise();
            adminUser.contents.map((data) => {
                console.log("adminUser.contents", data);
                if (data.userId == user.userid) {
                    if (data.password == user.password) {
                        loginSuccess = true; // you can use lodash to compare id password, i chose this one easier but not ideal
                    }
                }
            });
            if (loginSuccess) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return loginSuccess;
        });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map