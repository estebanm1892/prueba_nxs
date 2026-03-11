import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '../../shared/components/app-layout/app-layout.component';
import { PaymentsService } from '../../core/services/payments.service';
import { Payment } from '../../core/models/payment.model';

@Component({
  selector: 'app-payments',
  imports: [CommonModule, AppLayoutComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] = [];
  loading = true;
  error = '';

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit(): void {
    this.paymentsService.getPayments().subscribe({
      next: (response) => {
        this.payments = response;
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar los pagos.';
        this.loading = false;
      }
    });
  }
}