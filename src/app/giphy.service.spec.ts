import { TestBed, getTestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { MOCK_RESPONSE } from './giphy.service.mock';
import { environment } from 'src/environments/environment';

const { GIPHY_ENDPOINT, GIPHY_API_KEY } = environment;

describe('GiphyService', () => {
  let injector: TestBed;
  let service: GiphyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    service = TestBed.inject(GiphyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch results', () => {
    service.fetchResults('adam').subscribe((res) => {
      expect(res.data.length).toBe(1);
      expect(res.meta.status).toBe(200);
    });
    const req = httpMock.expectOne(
      `${GIPHY_ENDPOINT}?api_key=${GIPHY_API_KEY}&q=adam&limit=25&offset=0`
    );
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_RESPONSE);
  });

  it('should fetch paginated results', () => {
    service.fetchResults('adam', 2).subscribe((res) => {
      expect(res.data.length).toBe(1);
      expect(res.meta.status).toBe(200);
    });
    const req = httpMock.expectOne(
      `${GIPHY_ENDPOINT}?api_key=${GIPHY_API_KEY}&q=adam&limit=25&offset=25`
    );
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_RESPONSE);
  });

  it('should fetch results with custom limit of items per page', () => {
    service.fetchResults('adam', 2, 100).subscribe((res) => {
      expect(res.data.length).toBe(1);
      expect(res.meta.status).toBe(200);
    });
    const req = httpMock.expectOne(
      `${GIPHY_ENDPOINT}?api_key=${GIPHY_API_KEY}&q=adam&limit=100&offset=100`
    );
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_RESPONSE);
  });
});
