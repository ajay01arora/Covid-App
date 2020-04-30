import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AuthGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule]
        });
        guard = TestBed.inject(AuthGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=auth.guard.spec.js.map