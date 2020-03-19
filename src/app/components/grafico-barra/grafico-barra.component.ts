import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnDestroy {

  @Input() result: any[]=[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  
  colorScheme = 'aqua';

  intervalo;

  constructor(){
    // this.intervalo = setInterval(()=>{
    //   console.log('tick');

    //   const newResult = [...this.result];

    //   for (let i in newResult) {
    //     newResult[i].value = Math.round(Math.random()*500)
    //   }

    //   this.result = [...newResult];

    // },1500)
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    // clearInterval(this.intervalo);
  }

}
