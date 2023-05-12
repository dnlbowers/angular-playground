import { Component, OnInit } from '@angular/core';
import { DogsService } from '../_services/dogs.service';
import { Observable, map, noop } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit{

    breedList$: any;
    breeds: Array<any> = [];
    breedImageUrl$: any;
    images: Array<any> = [];
    

    constructor(private dogs:DogsService) { }

    ngOnInit() {
      this.breedList$ = this.dogs.getBreeds()
      console.log(this.breedList$)
      console.log(this.breeds)
      
      this.breedList$
        .subscribe(
          (breeds: any) => this.breeds = breeds,
          noop,
          () => console.log("breeds " + this.breeds)
        )

    
    }

    getBreedImage(breed: any) {
      const url =this.dogs.createImageUrl(breed)
      // subscribe to the observable and retrive the image from the api call made in the service
      
      
    }

}
