import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicehelper } from '../helpers/servicehelper';
import { HttpClient } from '@angular/common/http';
import { VenuesResponseModel } from '../models/venues-response-model';
import { VenuePhotoResponseModel } from '../models/venue-photo-response-model';


@Injectable({
  providedIn: 'root'
})
export class VenuesService  {

  public clientId = "NPWCNQB4WYKAXI1NWRRKGF3YM1JRF3IRWLI1EXG0EVNY3HA3";
  public clientSecret = "FB2O5HMHG1OMTPDO4RSGHCXW3HQY1VEFEGPGWTFQB3XJXEK5";
  public vValue = 20200422

 
    constructor(private http: HttpClient) {
        
     }
  
    //fetching data for venues

   public getVenues(near: string,searchItem :string) : Observable<VenuesResponseModel> {
    let url: string = Servicehelper.getHostUrl() + '/v2/venues/search?near='+near+'&client_id='+this.clientId+'&client_secret='+this.clientSecret+'&v='+this.vValue+'&query='+searchItem+'&limit=10';
    
    console.log(url);

    let header = Servicehelper.getGenericHeader();

    return this.http.get<VenuesResponseModel>(url, { headers: header});
  }

  //fetching data for photos

  public getVenuePhoto(VenueId : string) : Observable<VenuePhotoResponseModel> {
    let url: string = Servicehelper.getHostUrl() + '/v2/venues/'+VenueId+'/photos?&client_id='+this.clientId+'&client_secret='+this.clientSecret+'&v='+this.vValue;
    
                                                   
    console.log(url);

    let header = Servicehelper.getGenericHeader();

 

    return this.http.get<VenuePhotoResponseModel>(url, { headers: header});
  }
  



}
  

