import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { BackendStatusService } from '../../core/services/backend-status.service';
import { ServiceStatus } from '../../core/models/service-status.model';
import { AppLayoutComponent } from '../../shared/components/app-layout/app-layout.component';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, AppLayoutComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    servicesStatus: ServiceStatus[] = [];
    loading = true;
    error = '';

    constructor(private backendStatusService: BackendStatusService) { }

    ngOnInit(): void {
        forkJoin([
            this.backendStatusService.getUsersStatus(),
            this.backendStatusService.getOrdersStatus(),
            this.backendStatusService.getPaymentsStatus()
        ]).subscribe({
            next: (responses) => {
                this.servicesStatus = responses;
                this.loading = false;
            },
            error: () => {
                this.error = 'No fue posible cargar el estado de los microservicios.';
                this.loading = false;
            }
        });
    }
}