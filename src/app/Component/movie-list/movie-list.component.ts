import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  /**
   * used to store response of get employee details
   */
  movieList: user[];

  /**
   * used to define currentPage of pagination
   */
  p = 1;


  /**
   * Used to store path of Images
   */
  path = this.userService.imagePath;

  constructor(private userService: UserService, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.userService.getAll().subscribe(
      response => {
        if (response) {
          this.movieList = response['results'];
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
        }
      },
      error => {
        alert(error.text);
      }
    );
  }

  movieDetail(Id) {
    this.router.navigate(['/movies', Id]);
  }

}
