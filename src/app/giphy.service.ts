import { Injectable } from '@angular/core';
import { GifsResult } from '@giphy/js-fetch-api';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { GIPHY_ENDPOINT, GIPHY_API_KEY } = environment;

export const DEFAULT_PAGE_SIZE = 25;
export const EMPTY_RESPONSE = (
  size: number,
  page: number
): Observable<GifsResult> =>
  of({
    data: [],
    meta: {
      msg: '',
      response_id: '',
      status: 200,
    },
    pagination: {
      offset: size * page || 0,
      count: size ? size : DEFAULT_PAGE_SIZE,
      total_count: 0,
    },
  });

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}

  fetchResults(
    search: string,
    page = 1,
    limit = DEFAULT_PAGE_SIZE
  ): Observable<GifsResult> {
    const url = `${GIPHY_ENDPOINT}?api_key=${GIPHY_API_KEY}&q=${search}&limit=${limit}&offset=${
      limit * (page - 1)
    }`;
    return this.http.get<GifsResult>(url);
  }
}
