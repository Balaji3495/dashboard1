import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrapment',
  templateUrl: './entrapment.component.html',
  styleUrls: ['./entrapment.component.css']
})
export class EntrapmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  previous(){
    this.router.navigateByUrl('/maps')
  }
  next(){
    this.router.navigateByUrl('/down2')
  }
}
