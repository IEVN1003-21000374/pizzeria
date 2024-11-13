import { Component } from '@angular/core';
import CapturaPedidoComponent from "./pizza/captura-pedido/pedido.component";
import DetallePedidoComponent from "./pizza/detalle-pedido/detalle-pedido.component";
import {VentasDiaComponent} from "./pizza/ventas-dia/ventas-dia.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CapturaPedidoComponent, DetallePedidoComponent, VentasDiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}


