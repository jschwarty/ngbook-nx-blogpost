import { async, TestBed } from '@angular/core/testing';
import { WebsiteHomeScreenModule } from './website-home-screen.module';

describe('WebsiteHomeScreenModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [WebsiteHomeScreenModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(WebsiteHomeScreenModule).toBeDefined();
  });
});
