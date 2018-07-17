import { async, TestBed } from '@angular/core/testing';
import { AdminEpisodesModule } from './admin-episodes.module';

describe('AdminEpisodesModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminEpisodesModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AdminEpisodesModule).toBeDefined();
  });
});
