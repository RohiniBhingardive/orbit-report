import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  //uniqueTypesArray: [string];

  constructor() 
  {
    
  }

  ngOnInit() {
    
    /*
    for(let i=0; i<this.satellites.length; i++)
    {
      if(!this.uniqueTypesArray.includes(this.satellites[i].type.toLowerCase()))
      {
        this.uniqueTypesArray.push(this.satellites[i].type);
      }
    }
    */
    

  }

  getTypeCount(type: string)
  {
    let typeCount = 0;

    for(let i=0; i<this.satellites.length; i++)
    {
      if(this.satellites[i].isSatelliteType(type))
      {
        typeCount=typeCount+1;
      }
    }

    return typeCount;
  }

  /*
  getUniqueTypes()
  {
    let uniqueTypesArray: [string];

    for(let i=0; i<this.satellites.length; i++)
    {
      if(!uniqueTypesArray.includes(this.satellites[i].type.toLowerCase()))
      {
        uniqueTypesArray.push(this.satellites[i].type.toLowerCase());
      }
    }

    return uniqueTypesArray;
    
  }
  */

}
