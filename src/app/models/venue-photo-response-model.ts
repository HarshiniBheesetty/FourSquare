export class VenuePhotoResponseModel {

    public  meta: {
                code : number,
                requestId: string
    }
    public response: {
        photos: {
            count: number ,
            items : [{id: string,
                      prefix : string,
                      suffix : string,
                     width: number,
                     height: number}]          
        }
    }
}
