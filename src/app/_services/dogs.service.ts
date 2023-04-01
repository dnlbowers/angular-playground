import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  BreedsUrl = 'https://dog.ceo/api/breeds/list/all'
  breedList: any;

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get(this.BreedsUrl)
      .pipe(
          map((breed: any) => Object.keys(breed.message)),
        )
  }

  createImageUrl(breed: string) {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      
  }
}



