import { Component, OnInit } from '@angular/core';
import { Area } from '../area';
import { AreadetailsService } from '../areadetails.service';
import { IndividualShopDetails } from  '../individualshopdetails';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  nameId:Number;
  Place:string;
  isAreaChanged:boolean=false;
  individualShopDetails:IndividualShopDetails[];
  
  constructor(private areaDetailsService:AreadetailsService) { }

  ngOnInit() {
  }

 area:Area[]=[{ id: 1, name: 'Gachibowli' },
 { id: 2, name: 'Kukatpally' },
 { id: 3, name: 'Lingampally' },
 { id: 4, name: 'Banjara Hills' }]

 selectArea(event){
   this.isAreaChanged =true;
   this.Place=event.target.options[event.target.selectedIndex].text;
   if(this.nameId != undefined && this.nameId != null){
    this.areaDetailsService.getShopDetails(this.nameId).subscribe(individualShopDetails=>this.individualShopDetails=individualShopDetails)
   }
 }

}
