import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CommonUiModule } from '@podcast-platform/common-ui';

export const websiteHomeScreenRoutes: Route[] = [];
@NgModule({
  imports: [CommonModule, RouterModule, CommonUiModule]
})
export class WebsiteHomeScreenModule {}
