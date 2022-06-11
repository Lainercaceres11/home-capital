import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.css']
})
export class PortafoliosComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  
  }

  goLoan(){
    this.rutas.navigate(['/portafolio_lon'])
  }

}
