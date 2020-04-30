import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CasesDataService = class CasesDataService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://api.covid19india.org/state_district_wise.json";
    }
    getStateDetails() {
        console.log("inside the service");
        return this.http.get(this.apiUrl);
    }
};
CasesDataService = __decorate([
    Injectable()
], CasesDataService);
export { CasesDataService };
//# sourceMappingURL=cases-data.service.js.map