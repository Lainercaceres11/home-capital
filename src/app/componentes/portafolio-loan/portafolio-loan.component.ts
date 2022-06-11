import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio-loan',
  templateUrl: './portafolio-loan.component.html',
  styleUrls: ['./portafolio-loan.component.css']
})
export class PortafolioLoanComponent implements OnInit {

  constructor( private rutas:Router) { }

  ngOnInit(): void {
  }

  goPL(){
    this.rutas.navigate(['/pl'])
  }

  return(){
    this.rutas.navigate(['/'])
  }

}
