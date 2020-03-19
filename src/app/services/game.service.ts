import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Game } from "../interfaces/interfaces";
import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: "root"
})
export class GameService {
  private juegos: Game[] = [];

  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos);
    } else {
      return this.http.get<Game[]>(`${environment.url}/api/goty`).pipe(
        tap(juegos => {
          this.juegos = juegos;
        })
      );
    }
  }

  votar(id:string){
    return this.http.post<Response>(`${environment.url}/api/goty/${id}`,{})
    .pipe(
      catchError(err => {
        return of(err.error)
      })
    )
  }
}
