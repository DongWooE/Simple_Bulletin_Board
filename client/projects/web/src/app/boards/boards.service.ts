import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

export interface Board {
    name : string;
    content : string;
}
export interface Response<T>{
    data: T;
}

@Injectable({
    providedIn: 'root'
  })
export class BoardService {
    private readonly SERVER_URL = "http://localhost:3001/";
    constructor(private router:Router, private http: HttpClient){
    }

    getBoards(): Observable<Response<Array<Board>>>{
        return this.http.get<Response<Array<Board>>>(`${this.SERVER_URL}`);
    }
}