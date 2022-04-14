import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http:HttpClient) { }

  getGifs(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=sheVy0DymxWJOHFHvPf7B5zz4VMnMwo5&limit=4&rating=g');
  }
  // getRandom(){
  //   return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=sheVy0DymxWJOHFHvPf7B5zz4VMnMwo5&tag=&rating=g')

  // }
}
