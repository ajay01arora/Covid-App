import { async, TestBed } from '@angular/core/testing';
import { PrecautionComponent } from './precaution.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('PrecautionComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrecautionComponent],
            imports: [RouterTestingModule],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PrecautionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=precaution.component.spec.js.map