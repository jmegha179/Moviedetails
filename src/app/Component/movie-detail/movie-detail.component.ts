import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {


  /**
   * used to store user id of movie
   */
  Id;

  /**
   * used to store movie data
   */
  movie;

  /**
   * Used to store movie image path
   */
  imagePath = this.userService.backgroundPath;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {

  }
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.Id = param['id'];
      console.log('params id ==', this.Id);
    });
    this.spinner.show();
    this.userService.getById(this.Id).subscribe(result => {
      if (result) {
        this.movie = result;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 2000);
      }
    },
    error => {
      alert(error.text);
    }
    );
  }

}
