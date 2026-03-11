import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicData } from './public-data.component';

describe('PublicData', () => {
  let component: PublicData;
  let fixture: ComponentFixture<PublicData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
