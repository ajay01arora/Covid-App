import { async, TestBed } from '@angular/core/testing';
import { NewsViewComponent } from './news-view.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('NewsViewComponent', () => {
    let component;
    let fixture;
    const fakeActivatedRoute = {
        "snapshot": {
            "data": {
                "params": {
                    "id": 1
                }
            }
        }
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [NewsViewComponent],
            providers: [{ provide: ActivatedRoute, useValue: { snapshot: { params: { id: { get() { return 1; } } } } } }]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NewsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=news-view.component.spec.js.map