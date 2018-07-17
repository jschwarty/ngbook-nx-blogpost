import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { adminDashboardRoutes } from '@podcast-platform/admin/dashboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'admin-dashboard', children: adminDashboardRoutes },
        {
          path: 'admin-episodes',
          loadChildren: '@podcast-platform/admin/episodes#AdminEpisodesModule'
        },
        {
          path: 'admin-guests',
          loadChildren: '@podcast-platform/admin/guests#AdminGuestsModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
