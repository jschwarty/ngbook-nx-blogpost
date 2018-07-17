import { async, TestBed } from '@angular/core/testing';
import { WebsiteEpisodeDetailsModule } from './website-episode-details.module';

describe('WebsiteEpisodeDetailsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [WebsiteEpisodeDetailsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(WebsiteEpisodeDetailsModule).toBeDefined();
  });
});
