import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { 

  }
 getCount(): Observable<any>{
  
    return this.http.get(environment.baseurl+'/dashboard_two');
  }
  getState(): Observable<any>{
  
    return this.http.get(environment.baseurl+'/dashboard_one');
  }
}
