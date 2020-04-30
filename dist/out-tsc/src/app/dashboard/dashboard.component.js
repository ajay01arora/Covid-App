import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CasesDataService } from '../services/cases-data.service';
let DashboardComponent = class DashboardComponent {
    constructor(cases_data) {
        this.cases_data = cases_data;
        this.StateList = [];
    }
    viewStateDetails(stateCode) {
        this.selectState = this.StateList.find(s => s.stateCode === stateCode);
    }
    ngOnInit() {
        this.cases_data.getStateDetails().subscribe((data) => {
            console.log("data===", data);
            for (var state in data) {
                let districtList = new Array();
                for (let district in data[state].districtData) {
                    districtList.push({
                        districtName: district,
                        totalCases: data[state].districtData[district].confirmed,
                        active: data[state].districtData[district].active,
                        recovered: data[state].districtData[district].recovered,
                        deceased: data[state].districtData[district].deceased
                    });
                }
                this.StateList.push({ stateName: state, stateCode: data[state].statecode, districtList: districtList });
            }
            console.log("stateList====", this.StateList);
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css'],
        providers: [CasesDataService]
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map