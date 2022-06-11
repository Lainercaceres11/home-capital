import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }

  return(){
    this.rutas.navigate(['/pl'])
  }
}
