import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
//import { Http } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UpdateServiceService {
  [x: string]: any;
  constructor( @Inject(Http) private http:Http){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  };//private http:HttpClient) { }
  postURL = 'https://localhost:44360/api/Training';
  //header = new HttpHeaders().set('content-type','application/json');
  
 
   updateData(formData):Promise<String> {
     
    //console.log("in Update Data:"+JSON.stringify(formData));
    
      var body = JSON.stringify(formData);
      var headerOptions = new Headers({'Content-Type':'application/json'});
      var requestOptions = new RequestOptions({headers : headerOptions});
      return this.http.post(this.postURL, formData,requestOptions).toPromise().
      then(this.extractData).catch(this.handleErrorPromise);
     // return this.http.post('http://localhost:44360/api/Training',formData,requestOptions).pipe(map(x => x.json())).subscribe(response => console.log(response));;
    
   // var body = JSON.stringify(formData);
    //return this.http.post('http://localhost:44360/Training',body,{ headers: Headers}
   }

   private extractData(value: Response) {
    let body = value.json();
    console.log(body);
          return body ||{};
          
      }

      private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
          }	
    //return this.http.post('http://localhost:44360/api/Training',body).pipe(map(x => x.json()));
    //return "SUCCESS";//this.http.post<String>(this.postURL ,formConfig,{headers:this.header});

     
      //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      //return this.http.post(this.url + '/InsertEmployeeDetails/',body, httpOptions);  
    }  
   
  


