import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
 
import { RepoListComponent } from './repo-list/repo-list.component';
import { reducer } from './state/repo.reducer';
import { RepoEffects } from './state/repo.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('repositories', reducer),
    EffectsModule.forFeature([RepoEffects])
  ],
  declarations: [RepoListComponent],
  exports: [RepoListComponent]
})
export class RepoModule { } 
