import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-down2-lifts',
  templateUrl: './down2-lifts.component.html',
  styleUrls: ['./down2-lifts.component.css']
})
export class Down2LiftsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  pervious(){
    this.router.navigateByUrl('/entrapment')
  }
  next(){
    
    this.router.navigateByUrl('/state')
  }

}
