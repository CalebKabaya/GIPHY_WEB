import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  gifs =new BehaviorSubject<any>([])
  gifNumber: number = 12;
  constructor(private http:HttpClient) { }

  getGifs(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=sheVy0DymxWJOHFHvPf7B5zz4VMnMwo5&limit=4&rating=g');
    // .subscribe((response:any){

    // })
  }
    //getMoreGifs
    getMoreGifs(count: number): Observable<any> {
      return this.http.get<any>(
        `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=${count}&rating=g`
      );
    }
  // getRandom(){
  //   return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=sheVy0DymxWJOHFHvPf7B5zz4VMnMwo5&tag=&rating=g')

  // }
  // searchGifs(gifName:string){
  //   return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=sheVy0DymxWJOHFHvPf7B5zz4VMnMwo5&q=ball&limit=25&offset=0&rating=g&lang=en');

  // }
  // return this.http.get('https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=sheVy0DymxWJOHFHvPf7B5zz4VMnMwo5&limit=50&rating=g');

  searchGifs(searchTerm: string): Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`);
  }
  // showGifs(){
  //   return this.gifs.asObservable();
  // }
  getGif(){
    return this.gifs.asObservable()
  }
//   searchGifs(gifName:string){
//     return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&q=laugh&limit=25&offset=0&rating=g&lang=en`).subscribe((response:any)=>{
//       this.gifs.next(response.data)
//     },err=>{
//       this.gifs = new BehaviorSubject<any>("Try another Search Item")
//       alert("Try sometimes later")
//     })
// }
}
