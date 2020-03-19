import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos:Game[] = [];

  constructor(private gameService:GameService,private db: AngularFirestore) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe(data=>{
      this.juegos = data;
    })
    this.db.collection("goty")
    .valueChanges()
    .subscribe((data:Game[])=>{
      this.juegos = data;
    })
  }

  votar(juego:Game){
    this.gameService.votar(juego.id).subscribe(resp =>{

      if(resp.ok){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title:'Gracias',
          text: `${resp.mensaje}`,
          showConfirmButton: false,
          timer: 1500,
          width:350,
        })
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title:'Error',
          text: `Al votar ${juego.name}`,
          showConfirmButton: false,
          timer: 1500,
          width:350,
        })
      }
      
    })
  }

}
