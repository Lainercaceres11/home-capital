import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pl',
  templateUrl: './pl.component.html',
  styleUrls: ['./pl.component.css']
})
export class PlComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

  goProduct(){
    this.rutas.navigate(["/detalles"])
  }

  return(){
    this.rutas.navigate(['/portafolio_lon'])
  }

}
