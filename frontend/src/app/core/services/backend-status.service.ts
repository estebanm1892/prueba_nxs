import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceStatus } from '../models/service-status.model';

@Injectable({
  providedIn: 'root'
})
export class BackendStatusService {
  private usersUrl = 'http://localhost:8081/status';
  private ordersUrl = 'http://localhost:8082/status';
  private paymentsUrl = 'http://localhost:8083/status';

  constructor(private http: HttpClient) {}

  getUsersStatus(): Observable<ServiceStatus> {
    return this.http.get<ServiceStatus>(this.usersUrl);
  }

  getOrdersStatus(): Observable<ServiceStatus> {
    return this.http.get<ServiceStatus>(this.ordersUrl);
  }

  getPaymentsStatus(): Observable<ServiceStatus> {
    return this.http.get<ServiceStatus>(this.paymentsUrl);
  }
}