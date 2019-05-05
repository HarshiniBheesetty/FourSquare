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

  public clientId = "WMY4CXUC1SUEEHMYZLHKA1AR3AYIGU5RS0KFXJG4MBSWSKMP";
  public clientSecret = "XZJAAF5STXHGQSHA0YPQLJXE1KYTSNNLO2RSSWCCW2D04OWY";
  public vValue = 20200422

 
    constructor(private http: HttpClient) {
        
     }
  
    //fetching data for venues

   public getVenues(near: string,searchItem :string) : Observable<VenuesResponseModel> {
    let url: string = Servicehelper.getHostUrl() + '/v2/venues/search?near='+near+'&client_id='+this.clientId+'&client_secret='+this.clientSecret+'&v='+this.vValue+'&query='+searchItem;
    
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
  

