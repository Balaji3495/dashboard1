import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { DashboardService } from 'src/app/provider/dashboard.service';
import { ActivatedRoute,Router } from '@angular/router';
// import { Loader } from '@googlemaps/js-api-loader';


import { Observable } from 'rxjs';
declare var $:any;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: any = [];
  
  bangalore:any;
  filtered: any;
  banga:any;

  dash:boolean;


 
 
  constructor(private dashboardservice :DashboardService,private router:Router) { }
  
  ngOnInit(): void {
    this.dash=true;

    this.getData();
    let obj =this;
  
    
  
   
    
    let world =document.querySelectorAll('#world-map-markers1');
    // console.log(obj.state );
    $(world).on('click', function(e:any){
   console.log(e.target.classList.value)
      // if(e.target.classList.value=='tipClick bangalore'){
      //   obj.filtered = obj.state.filter(
      //     (book:any) =>book.BBRNAME=="BANGALORE" );
       
      //   console.log(obj.filtered );

      // }
      // else if(e.target.classList.value=='tipClick chennai'){
      //   obj.filtered = obj.state.filter(
      //     (book:any) =>book.BBRNAME=="CHENNAI" );
       
      //   console.log(obj.filtered );

      // }
      // else if(e.target.classList.value=='tipClick perugudi'){
      //   obj.filtered = obj.state.filter(
      //     (book:any) =>book.BBRNAME=="PERUNGUDI" );
       
      //   console.log(obj.filtered );

      // }
     

    });
    
  }
  
  getData(){
    this.dashboardservice.getCount().subscribe(data =>{
      console.log(data)
      this.count=data['Data'];
   });

  }


  // getState(){
  //   this.dashboardservice.getState().subscribe(data =>{
  //     this.state=data['Data'];
      
  //  });

  // }
//   selectUrl(item :any){
//     console.log(item)
// if(item.STAT=="ENT"){
 
// }
// if(item.STAT=="DWN2"){

// }
// if(item.STAT=="DWN1"){

// }
//   }

  next(){
    this.router.navigateByUrl('/maps')
  }
  

}
