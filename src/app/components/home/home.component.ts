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
                   console.log(response);
                },
                error => {
                   console.log(error);
                   return this.errorMessage = "Server not found";
                })  
            

             setTimeout(function(){ 

              
              }, 3000)
             
        })},

      error => {
        console.log(error);
        return this.errorMessage = "Server not found";
      })
    
     
  }


}