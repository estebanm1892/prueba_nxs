import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PublicDataComponent } from './public-data.component';
import { PublicApiService } from '../../core/services/public-api.service';

describe('PublicDataComponent', () => {
  let component: PublicDataComponent;
  let fixture: ComponentFixture<PublicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicDataComponent],
      providers: [
        {
          provide: PublicApiService,
          useValue: {
            getPosts: () => of([])
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
