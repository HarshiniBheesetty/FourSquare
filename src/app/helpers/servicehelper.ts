import { HttpHeaders } from "@angular/common/http";

export class Servicehelper {
    public static getHostUrl() : string {
        return "https://cors-anywhere.herokuapp.com/https://api.foursquare.com";
    }

    public static getGenericHeader() : HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json"   
          });
    }

    public static getAuthemticHeader() : HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json" 
          });
    }

    
}