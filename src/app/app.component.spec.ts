import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { GiphyService } from './giphy.service';
import { GiphyServiceMock } from './giphy.service.mock';
import { skip } from 'rxjs/operators';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  let element: HTMLElement;
  let paginateSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AppComponent],
      providers: [
        {
          provide: GiphyService,
          useClass: GiphyServiceMock,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debug = fixture.debugElement;
        element = fixture.nativeElement;
        paginateSpy = spyOn(component, 'paginate').and.callThrough();
      });
  }));

  it('should create the app', () => {
    const app = debug.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the search input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').placeholder).toContain(
      'e.g. Puppies'
    );
  });

  it('should render the paginator', () => {
    fixture.detectChanges();
    expect(component.paginator.pageSize).toBe(25);
    expect(component.paginator.pageIndex).toBe(0);
  });

  it('should allow users to enter queries', (done: DoneFn) => {
    fixture.detectChanges();
    component.control.setValue('puppies');
    component.search();

    component.results.pipe(skip(1)).subscribe((res: any) => {
      expect(res.length).toBe(1);
      expect(component.paginator.length).toBe(5000);
      done();
    });
  });

  it('should increment the page', () => {
    fixture.detectChanges();
    component.paginator.length = 1000;
    component.paginator.nextPage();
    expect(paginateSpy.calls.count()).toBe(1);
    expect(component.paginator.pageIndex).toBe(1);
  });

  it('should decrement the page', () => {
    fixture.detectChanges();
    component.paginator.length = 1000;
    component.paginator.pageIndex = 4;
    component.paginator.previousPage();
    expect(paginateSpy.calls.count()).toBe(1);
    expect(component.paginator.pageIndex).toBe(3);
  });

  it('must contain a filter on search input for profanities', () => {
    component.control.setValue('what the fuck');
    component.search();
    expect(component.control.errors.profanity).toBe(true);
  });
});
