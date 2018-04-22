import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AreadetailsService } from '../areadetails.service';
import { IndividualAvaliableType } from '../individualavaliabletypes';

@Component({
  selector: 'app-unique-shop-details',
  templateUrl: './unique-shop-details.component.html',
  styleUrls: ['./unique-shop-details.component.css']
})
export class UniqueShopDetailsComponent implements OnInit {

  private individualAvaliableType: IndividualAvaliableType[];
  private message: string;

  constructor(
    private areaDetailsService:AreadetailsService,
    private route: ActivatedRoute,
    private location: Location) {
    
   }

  ngOnInit() {
    this.message="";
    const id = +this.route.snapshot.paramMap.get('id');
    this.getAvaliableCakeTypes(id);
  }

  getAvaliableCakeTypes(shopId:number):void{
    if(shopId != undefined && shopId != null){
     this.areaDetailsService.getAvaliableTypes(shopId).subscribe(individualAvaliableType=>this.individualAvaliableType=individualAvaliableType)
     if(this.individualAvaliableType.length ==0)
      this.message="Currently cakes are not avaliable";
    }
  }

  goBack():void{
    this.location.back();
  }

}
