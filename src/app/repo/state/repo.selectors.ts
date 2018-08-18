import { RepoState } from './repo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRepoState = createFeatureSelector<RepoState>('repositories');

export const getAllRepos = createSelector(getRepoState, data => data.repos);

export const getRequestDatatime = createSelector(getRepoState, data => data.requestedAt);