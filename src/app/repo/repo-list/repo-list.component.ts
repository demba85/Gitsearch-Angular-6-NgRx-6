import { Component, OnInit } from '@angular/core' 
import { Store } from '@ngrx/store';

import {  Load } from '../state/repo.actions';
import { Observable } from 'rxjs';
import { getAllRepos, getRequestDatatime } from '../state/repo.selectors';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos$: Observable<Repo[]>;
  requestDates$: Observable<Date>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.repos$ = this.store.select(getAllRepos);
    this.requestDates$ = this.store.select(getRequestDatatime)
  }
 
}
