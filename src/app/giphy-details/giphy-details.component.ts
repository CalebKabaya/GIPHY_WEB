import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';


@Component({
  selector: 'app-giphy-details',
  templateUrl: './giphy-details.component.html',
  styleUrls: ['./giphy-details.component.css']
})
export class GiphyDetailsComponent implements OnInit {
gifs:any[]=[];
// random:any[]=[]
  constructor(private mydata:MydataService) { }

  ngOnInit(): void { this.mydata.getGifs()
    .subscribe((response:any)=>{
      console.log('Data',response);
this.gifs=response.data;
// this.gifs=response.data;
      
    })
  }

}
