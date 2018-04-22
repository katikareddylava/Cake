import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SHOPDETAILS,AVALIABLETYPES } from './mockshopdetails'
import { IndividualShopDetails } from './individualshopdetails'
import { IndividualAvaliableType } from './individualavaliabletypes'

@Injectable()
export class AreadetailsService {

  constructor() { }

  getShopDetails(placeId):Observable<IndividualShopDetails[]> {
      for(var i=0;i<SHOPDETAILS.length;i++){
          if(SHOPDETAILS[i].AreaId == placeId){
            return of (SHOPDETAILS[i].IndividualShopDetails);
          }
        }
      return of ([]);
  }

  getAvaliableTypes(shopId):Observable<IndividualAvaliableType[]>{
    for(var i=0;i<AVALIABLETYPES.length;i++){
      if(AVALIABLETYPES[i].ShopId == shopId){
        return of (AVALIABLETYPES[i].IndividualAvaliableType);
      }
    }
return of ([]);
  }

}
