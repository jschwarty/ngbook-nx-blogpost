import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeSummaryComponent } from './episode-summary/episode-summary.component';
@NgModule({
  imports: [CommonModule],
  declarations: [EpisodeSummaryComponent],
  exports: [EpisodeSummaryComponent]
})
export class CommonUiModule {}
