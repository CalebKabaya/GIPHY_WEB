import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gifs:any[]=[];

  constructor( private mydata:MydataService) { }

 
  // searchItem:string
//   search(searchTerm:string){
//     if(searchTerm !== ''){
//       this.mydata.searchGifs(searchTerm)
//       .subscribe((response:any)=>{
// console.log('Search Data',response);

//       });
//     }
//   }

  searchGif(form: NgForm) {
    let { searchTerm } = form.value;
    this.mydata.searchGifs(searchTerm).subscribe((data) => {
      console.log('Search Data',data)
      this.gifs = data.data;
    });
    form.reset();
  }
  ngOnInit(): void {
    // this.mydata.getGifs().subscribe((data) => {
    //   this.gifs = data.data;
    // });
  }

}
