import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from "./navbar/navbar.component";
import { GraficoBarraComponent } from "./grafico-barra/grafico-barra.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavbarComponent, GraficoBarraComponent, FooterComponent],
  exports: [NavbarComponent,GraficoBarraComponent,FooterComponent],
  imports: [CommonModule, RouterModule,NgxChartsModule,BrowserAnimationsModule,BrowserModule,FormsModule]
})
export class ComponentsModule {}
