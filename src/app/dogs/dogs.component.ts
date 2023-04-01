import { Component, OnInit } from '@angular/core';
import { DogsService } from '../_services/dogs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit{

    breedList$: any;
    breedImageUrl$: any;

    constructor(private dogs:DogsService) { }

    ngOnInit() {
      this.breedList$ = this.dogs.getBreeds()
        .subscribe(breed =>
          this.breedList$ = breed,
        );
      
    }

}
