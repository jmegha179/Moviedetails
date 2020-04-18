import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  /**
   * used to movies
   */
  movieList: user[];

  /**
   * used to store search string
   */
  searchString = '';


  /**
   * Used to store path of Images
   */
  path = this.userService.imagePath;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(
      response => {
        if (response) {
          this.movieList = response['results'];
        }
      },
      error => {
        alert(error.text);
      }
    );
  }


}
