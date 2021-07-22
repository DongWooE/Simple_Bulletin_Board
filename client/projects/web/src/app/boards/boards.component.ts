import { HttpClient } from '@angular/common/http';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {BoardService} from './boards.service';

@Component({
  selector: 'ne-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  subscription :Subscription;
  dataSource:any;
  constructor(private http:HttpClient, private detail:BoardService) {
    detail.getBoards().subscribe(res=>
      {this.dataSource = res.data;});
   }

  ngOnInit(): void {
  }

  displayedColumns:string[] = ['name', 'content'];
}
