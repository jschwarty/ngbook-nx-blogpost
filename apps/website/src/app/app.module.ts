import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { websiteHomeScreenRoutes } from '@podcast-platform/website/home-screen';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'website-home-screen', children: websiteHomeScreenRoutes },
        {
          path: 'website-episode-details',
          loadChildren:
            '@podcast-platform/website/episode-details#WebsiteEpisodeDetailsModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
