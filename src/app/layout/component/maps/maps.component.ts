import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { DashboardService } from 'src/app/provider/dashboard.service';
import { ActivatedRoute,Router } from '@angular/router';
// import {} from 'googlemaps';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  location=[
    {
        BBRCD:"TN01",
        BBRNAME:"CHENNAI (HO)",
        px:13.09687545290434,
        py:80.19770397892752
    },
    {
        BBRCD:"TN15",
        BBRNAME:"SALEM",
        px:11.675645949254895, 
        py:78.1403088697189,
    
    },
    {
        BBRCD:"TN03",
        BBRNAME:"COIMBATORE",
        px:11.05604604583771,
        py: 76.98591689670215, 
    
    },
    {
        BBRCD:"TN09",
        BBRNAME:"MADURAI",
        px:9.887014382885422,
        py: 78.05796261018843, 
    
    },
    {
        BBRCD:"TN02",
        BBRNAME:"VELLORE ",
        px:12.97853879194906,
        py: 79.13573513077569, 
    
    },
    {
        BBRCD:"TN04 ",
        BBRNAME:"TRICHY",
        px:10.79470445006396,
        py:78.68913192738314, 
    
    },
    {
        BBRCD:"KL02",
        BBRNAME:"COCHIN",
        px:9.961578201802183,
        py:76.35785375251815, 
    
    },
    {
        BBRCD:"KL03",
        BBRNAME:"CALICUT",
        px:11.289046054477243,
        py:75.78570240469517, 
    
    },
    {
        BBRCD:"KL01",
        BBRNAME:"TRIVANDRUM",
        px:8.545958478472773,
        py:76.96179642737017, 
    
    },
    {
        BBRCD:"TG01",
        BBRNAME:"HYDERABAD",
        px:16.49501672010808,
        py:78.44442359676756, 
    
    },
    {
        BBRCD:"AP03",
        BBRNAME:"VIJAYAWADA",
        px:16.49501672010808,
        py:80.67330556976714, 
    
    },
    {
        BBRCD:"AP04",
        BBRNAME:"VIZAG",
        px:17.756331678214035,
        py:83.3411029814299, 
    
    },
    {
        BBRCD:"AP02",
        BBRNAME:"TIRUPATI",
        px:13.62534456290723,
        py:79.4308072390529, 
    
    },
    {
        BBRCD:"KA01",
        BBRNAME:"BANGALORE",
        px:12.979887449144286,
        py:77.55226121021151, 
    
    },
    {
        BBRCD:"KA03",
        BBRNAME:"MANGALORE",
        px:12.909904274357626,
        py:74.83698048322312, 
    
    },
    {
        BBRCD:"TN17",
        BBRNAME:"PERUNGUDI",
        px:12.971859535717586,
        py:80.24675378836938, 
    
    },
    {
        BBRCD:"DL01/HR02/RJ01",
        BBRNAME:"GURGAON",
        px:28.511037404084522,
        py:77.08133784299423, 
    
    },
    {
        BBRCD:"RJ02",
        BBRNAME:"JAIPUR",
        px:26.841173066679733,
        py:75.80885818087438, 
    
    },
    {
        BBRCD:"UP02",
        BBRNAME:"LUCKNOW",
        px:26.86018570971989,
        py:80.98857422576802, 
    
    },
    {
        BBRCD:"UP03",
        BBRNAME:"NOIDA",
        px:28.6227086011461,
        py:77.38636585464324, 
    
    },
    {
        BBRCD:"OR02",
        BBRNAME:"BHUBANESWAR",
        px:20.287136248795452,
        py:85.80746324204331, 
    
    },
    {
        BBRCD:"WB01",
        BBRNAME:"KOLKATA",
        px:22.52573347408355,
        py:88.39508844102312, 
    
    },
    {
        BBRCD:"BR01",
        BBRNAME:"PATNA",
        px:25.616550926004713,
        py:85.12074504841152, 
    
    },
    {
        BBRCD:"JH01",
        BBRNAME:"RANCHI",
        px:23.354289931189832,
        py:85.32337751220297, 
    
    },
    {
        BBRCD:"GJ01",
        BBRNAME:"AHMEDABAD",
        px:23.075636616207355,
        py:72.52611964011618, 
    
    },
    {
        BBRCD:"MH01",
        BBRNAME:"MUMBAI",
        px:19.126330728739603,
        py:72.87230341028464, 
    
    },
    {
        BBRCD:"MH04",
        BBRNAME:"MUMBAI (VASHI)",
        px:19.114376294955182,
        py:73.01987048329659, 
    
    },
    {
        BBRCD:"MH08",
        BBRNAME:"NASHIK",
        px:20.012845354893038,
        py:73.77123372617095, 
    
    },
    {
        BBRCD:"MH02",
        BBRNAME:"NAGPUR",
        px:21.125647079306937,
        py:79.06336612380997, 
    
    },
    {
        BBRCD:"MH05",
        BBRNAME:"PUNE",
        px:18.511110992432595,
        py:73.91555257035532, 
    
    },
    {
        BBRCD:"GJ02",
        BBRNAME:"VADODARA",
        px:22.31576281557213,
        py:73.1505150563608, 
    
    },
    {
        BBRCD:"GJ03",
        BBRNAME:"SURAT",
        px:21.194775851222605,
        py:72.77927952565858, 
    
    },
    {
        BBRCD:"GA01",
        BBRNAME:"GOA",
        px:15.375924750835413,
        py:73.92579751193894, 
    
    },
    {
        BBRCD:"AS01",
        BBRNAME:"GUWAHATI",
        px:26.12897929104257,
        py:91.79879065458763, 
    
    },
    {
        BBRCD:"MP03",
        BBRNAME:"BHOPAL",
        px:23.27355048968373,
        py:77.46441821404896, 
    
    },
    {
        BBRCD:"MP02",
        BBRNAME:"INDORE",
        px:21.25175580541679,
        py:81.66569960432855, 
    
    },
    {
        BBRCD:"CG01",
        BBRNAME:"RAIPUR",
        px:21.25175580541679,
        py:81.66569960432855, 
    
    },
    {
        BBRCD:"HR06",
        BBRNAME:"FARIDABAD",
        px:28.382863821907073,
        py:77.29017582764985, 
    
    },
    {
        BBRCD:"HR08",
        BBRNAME:"SONIPET",
        px:29.006077161322782,
        py:77.03305335280477, 
    
    },
    ];
   

    // initial center position for the map
    lat: number = 23.473324;
    lng: number = 77.947998;
  state: any=[];
  result:any=[];
  zoom: number = 8;
  markers: marker[] = [];
    con: string;

  // initial center position for the map
 

  constructor(private dashboardservice :DashboardService,private router:Router) { }

  ngOnInit(): void {
    this.dashboardservice.getState().subscribe(data =>{
      this.state=data['Data'];
      console.log('this.state',this.state)
    });
    setTimeout(()=> {
      const mergeById = (array1:any, array2:any) =>
      array1.map((itm: { BBRCD: any; }) => ({
        ...array2.find((item:any) => (item.BBRCD === itm.BBRCD) && item),
        ...itm
      }));
      this.result = mergeById(this.state,this.location);
        console.log('location',this.result)
          this.result.map((item: any)=>{
    console.log("sd",item)
   
    this.markers.push({
        lat: item.px,
        lng: item.py,
        label: "C",
        draggable: true,
        content:   [ {label:"BBRCD",key:item.BBRCD},{label:"BRANCH NAME",key:item.BBRNAME},
        // {label:"UP",key:item.BRUP},
        // {label:"ENTRAP",key:item.BRENTRAP},
        {label:"TOTAl",key:item.BRTOT},
        {label:"DWN2",key:item.BRDWN2},
        // {label:"BATT",key:item.BRBATTERY},
        // {label:"NC",key:item.BRNC},
        // {label:"DWN1",key:item.BRDWN1},
        
                    ]
    });
    console.log(this.markers)
     
});

    }, 2000);
    
  }
  ngAfterViewInit(): void {
    this.dashboardservice.getState().subscribe(data =>{
        this.state=data['Data'];
        console.log('this.state',this.state)
      });
 }
//   this.result.map((item: any)=>{
//     console.log("sd",item)
//     this.markers.push({
//         lat: item.px,
//         lng: item.py,
//         label: "C",
//         draggable: true,
//         content: "InfoWindow content",
//     });
     
// });
 
  // markerDragEnd(m: marker, $event: MouseEvent) {
  //   console.log("dragEnd", m, $event);
  // }
 
  previous(){
    this.router.navigateByUrl('/dashboard')
  }
  next(){
    this.router.navigateByUrl('/entrapment')
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  content: { label:string, key: any }[];
 
}