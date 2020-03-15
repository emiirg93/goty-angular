import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent  {
  result: any[]=[
    {
      "name": "Juego 1",
      "value": 8940000
    },
    {
      "name": "Juego 2",
      "value": 5000000
    },
    {
      "name": "Juego 3",
      "value": 7200000
    },
    {
      "name": "Juego 4",
      "value": 7200000
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'aqua'

  onSelect(event) {
    console.log(event);
  }

}
