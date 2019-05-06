import { Component, OnInit } from '@angular/core';
import { VenuesService } from 'src/app/services/venues.service';
import { VenuesResponseModel } from 'src/app/models/venues-response-model';
import { Observable } from 'rxjs';
import { VenuePhotoResponseModel } from 'src/app/models/venue-photo-response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public place="";
    public errorMessage;
    public venues=[];
    public enteredItem ="";
    public venuesPhoto ;

  
  constructor(private venuesService: VenuesService) {
    console.log(this.place);
  }

 
  public ngOnInit(): void {
    console.log(this.place);
    
  }
  public onClick(){
    if(this.enteredItem !== "" && this.place !== "" ){
      console.log(this.place,this.enteredItem);
    let observable: Observable<VenuesResponseModel>;
    observable = this.venuesService.getVenues(this.place,this.enteredItem);

    observable.subscribe(
      response => {
        console.log(response.response);
        this.venues= response.response.venues;

        this.venues.forEach((venue, index) => {
          
      
              console.log(venue.id,index);
              
              let ob : Observable<VenuePhotoResponseModel>;
              ob = this.venuesService.getVenuePhoto(venue.id);
              ob.subscribe(
                response => {
                   const image = response.response.photos.items[0];
                   console.log(image);
                   console.log(response.response.photos.items);
                   const photo = image.prefix + '300*300' + image.suffix;
                   console.log(photo);
                   venue.photo = photo;
                   
                },
                error => {
                   console.log(error);
                   const photo = "https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/9/3/1/5/1295139-1-eng-GB/Tortilla-secures-seven-sites-for-restaurants-inside-and-outside-London.jpg"
                   venue.photo = photo;
                })  
             
        })

      },

      error => {
        console.log(error);
        return this.errorMessage = "No restuarants available!!";
      })
    

    }
    
     
  }


}