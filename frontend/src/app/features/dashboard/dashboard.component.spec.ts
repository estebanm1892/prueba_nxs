import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { BackendStatusService } from '../../core/services/backend-status.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        {
          provide: BackendStatusService,
          useValue: {
            getUsersStatus: () => of({ service: 'usuarios-service', version: '1.0.0', environment: 'Development', timestamp: '', port: '8080' }),
            getOrdersStatus: () => of({ service: 'pedidos-service', version: '1.0.0', environment: 'Development', timestamp: '', port: '8080' }),
            getPaymentsStatus: () => of({ service: 'pagos-service', version: '1.0.0', environment: 'Development', timestamp: '', port: '8080' })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
