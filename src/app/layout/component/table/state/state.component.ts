import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  previous(){
    this.router.navigateByUrl('/down2')
  }
  
}
