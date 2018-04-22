import { ShopDetails } from './shopdetails'

import { AvaliableTypes } from './shopdetails'

export const AVALIABLETYPES: AvaliableTypes[]=[{
  ShopId:1,
  IndividualAvaliableType:[{TypeId:1,TypeName:"Eggless Cakes"},{TypeId:2,TypeName:"Cream Cakes"},{TypeId:3,TypeName:"Dryfruit Cakes"},{TypeId:4,TypeName:"Choclate Cakes"}]
},{
  ShopId:2,
  IndividualAvaliableType:[{TypeId:2,TypeName:"Cream Cakes"},{TypeId:3,TypeName:"Dryfruit Cakes"},{TypeId:4,TypeName:"Choclate Cakes"}]
},{
  ShopId:3,
  IndividualAvaliableType:[{TypeId:1,TypeName:"Eggless Cakes"},{TypeId:3,TypeName:"Dryfruit Cakes"},{TypeId:4,TypeName:"Choclate Cakes"}]
},{
  ShopId:4,
  IndividualAvaliableType:[{TypeId:1,TypeName:"Eggless Cakes"},{TypeId:2,TypeName:"Cream Cakes"},{TypeId:4,TypeName:"Choclate Cakes"}]
},{
  ShopId:5,
  IndividualAvaliableType:[{TypeId:3,TypeName:"Dryfruit Cakes"},{TypeId:4,TypeName:"Choclate Cakes"}]
},{
  ShopId:6,
  IndividualAvaliableType:[{TypeId:1,TypeName:"Eggless Cakes"},{TypeId:2,TypeName:"Cream Cakes"}]
}]

export const SHOPDETAILS: ShopDetails[]=[{
        AreaId:1,
        IndividualShopDetails:[{
            ShopId:1,
            ShopName:"Lava Bakery"
          },{
            ShopId:2,
            ShopName:"Venkateswara Bakery"
          },{
            ShopId:3,
            ShopName:"Narayana Bakery"
          },{
            ShopId:4,
            ShopName:"Vishnu Bakery"
          }]
      },{
        AreaId:2,
        IndividualShopDetails:[{
            ShopId:5,
            ShopName:"sheshadri Bakery"
          },{
            ShopId:6,
            ShopName:"Anjanadri Bakery"
          },{
            ShopId:7,
            ShopName:"Niladri Bakery"
          },{
            ShopId:8,
            ShopName:"Venkatadri Bakery"
          }]
      },{
        AreaId:3,
        IndividualShopDetails:[{
            ShopId:9,
            ShopName:"seetha Bakery"
          },{
            ShopId:10,
            ShopName:"Padamavthi Bakery"
          },{
            ShopId:11,
            ShopName:"Lakshmi Bakery"
          },{
            ShopId:12,
            ShopName:"vedavathi Bakery"
          }]
      },{
        AreaId:4,
        IndividualShopDetails:[{
            ShopId:13,
            ShopName:"Narasimha Bakery"
          },{
            ShopId:14,
            ShopName:"Rama Bakery"
          },{
            ShopId:15,
            ShopName:"vamanudu Bakery"
          },{
            ShopId:16,
            ShopName:"kirshna Bakery"
          }]
      }]
