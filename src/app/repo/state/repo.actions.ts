import { Action } from '@ngrx/store';
import { Repo } from '../repo';

export enum RepoActionTypes {
    Load = "[Repo] Load",
    LoadSuccess = "[Repo] Load success" 
}

//action creators
export class Load implements Action {
    type = RepoActionTypes.Load;

    constructor(public payload: any = null){}
}

export class LoadSuccess implements Action {
    type = RepoActionTypes.LoadSuccess;

    constructor(public payload: Repo[]) {}
}

export type RepoActions = Load | LoadSuccess;