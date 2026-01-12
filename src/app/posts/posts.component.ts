import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Ipost{
  title:string,
  body:string,
  id:number
}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postd:Ipost[]=[]
  base:string=environment.BASE_URL;
  post:string=`${this.base}/posts`;


  constructor(private _httpClient:HttpClient) { }
   fetchposts():Observable<Ipost[]>{
    return this._httpClient.get<Ipost[]>(this.post)
  }

  ngOnInit(): void {
  this.fetchposts().subscribe({
    next:data=>{
      this.postd=data;},
    error:err=>{err}

  })

  }
  }
 

