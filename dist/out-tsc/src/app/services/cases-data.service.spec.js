import { TestBed, inject } from '@angular/core/testing';
import { CasesDataService } from './cases-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEventType } from '@angular/common/http';
describe('CasesDataService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CasesDataService]
        });
        service = TestBed.inject(CasesDataService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should fetch data from the api via GET', inject([HttpTestingController, CasesDataService], (httpMock, dataService) => {
        dataService.getStateDetails().subscribe((event) => {
            switch (event.type) {
                case HttpEventType.Response:
                    expect(event.body).toContain('');
            }
        });
        const mockReq = httpMock.expectOne(dataService.apiUrl);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        httpMock.verify();
    }));
});
//# sourceMappingURL=cases-data.service.spec.js.map