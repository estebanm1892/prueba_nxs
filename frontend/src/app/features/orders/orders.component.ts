import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '../../shared/components/app-layout/app-layout.component';
import { OrdersService } from '../../core/services/orders.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, AppLayoutComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  error = '';

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe({
      next: (response) => {
        this.orders = response;
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar los pedidos.';
        this.loading = false;
      }
    });
  }
}