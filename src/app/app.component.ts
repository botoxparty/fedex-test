import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import {
  ActivatedRoute,
  Params,
  Router,
  QueryParamsHandling,
} from '@angular/router';
import { switchMap, delay } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import {
  GiphyService,
  DEFAULT_PAGE_SIZE,
  EMPTY_RESPONSE,
} from './giphy.service';
import { GifsResult } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { profanityValidator } from './profanity.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  results = new Subject<Array<IGif>>();
  currentSearchValue = '';
  loading = false;
  control = new FormControl('', [profanityValidator]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public giphy: GiphyService
  ) {}

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams
      .pipe(delay(0), switchMap(this.processQueryParams))
      .subscribe(this.processGiphyResult);
  }

  search(): void {
    this.control.markAsTouched();
    if (this.currentSearchValue === this.control.value || this.control.errors) {
      return;
    }

    this.currentSearchValue = this.control.value;
    const queryParams: Params = { q: this.control.value || undefined };
    this.setQueryParams(queryParams);
  }

  paginate(event: PageEvent): void {
    const queryParams: Params = {
      page: event.pageIndex + 1,
      size: event.pageSize !== DEFAULT_PAGE_SIZE ? event.pageSize : undefined,
    };
    this.setQueryParams(queryParams, 'merge');
  }

  private setQueryParams(
    queryParams: Params,
    queryParamsHandling?: QueryParamsHandling
  ) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling,
    });
  }

  private processQueryParams = (params: Params): Observable<GifsResult> => {
    if (params.q !== this.control.value) {
      this.control.patchValue(params.q || '');
    }

    const { size, page } = params;
    this.currentSearchValue = params.q || this.currentSearchValue;

    // Empty search value, reset the state
    if (!this.currentSearchValue) {
      return EMPTY_RESPONSE(size, page);
    }

    this.loading = true;
    return this.giphy.fetchResults(this.currentSearchValue, page, size);
  };

  private processGiphyResult = (res: GifsResult): void => {
    const {
      data,
      pagination: { offset, count, total_count },
    } = res;
    this.loading = false;
    const size = Math.max(this.paginator.pageSize, count);
    this.updatePaginator(offset / size, size, total_count);
    this.results.next(data);
  };

  private updatePaginator = (
    pageIndex: number,
    pageSize: number,
    length: number
  ): void => {
    this.paginator.pageIndex = pageIndex;
    this.paginator.pageSize = pageSize;
    // Giphy API is limited to only respond with the first 5000 results, querying for anything above 5000 will not work
    this.paginator.length = Math.min(5000, length);
  };
}
