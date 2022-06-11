import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { PortafoliosComponent } from './componentes/portafolios/portafolios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { PortafolioLoanComponent } from './componentes/portafolio-loan/portafolio-loan.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PlComponent } from './componentes/pl/pl.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './componentes/date-picker/date-picker.component';

const appRutas: Routes =[ 
  {path: '', component:  HomeComponent},
  {path: 'portafolio_lon', component:  PortafolioLoanComponent},
  {path: 'pl', component:  PlComponent},
  {path: 'detalles', component:  DetallesComponent},
]; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    PortafoliosComponent,
    PortafolioLoanComponent,
    HomeComponent,
    PlComponent,
    DetallesComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRutas),
    NgbModule,
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
