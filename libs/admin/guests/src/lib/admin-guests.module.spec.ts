import { async, TestBed } from '@angular/core/testing';
import { AdminGuestsModule } from './admin-guests.module';

describe('AdminGuestsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminGuestsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AdminGuestsModule).toBeDefined();
  });
});
