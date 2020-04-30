import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userid: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get f() { return this.loginForm.controls; }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            this.submitted = true;
            // stop here if form is invalid  
            if (this.loginForm.invalid) {
                return;
            }
            const loginData = yield this.authService.login(this.loginForm.value);
            if (loginData) {
                console.log("data====", loginData);
                this.router.navigate(['/news']);
            }
            else {
                this.message = "Please check your userid and password";
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map