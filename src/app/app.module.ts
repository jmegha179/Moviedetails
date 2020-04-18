import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing';
import { RegisterComponent } from './Component/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './Service/interceptor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilter } from './Filter/search.filter';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MovieListComponent } from './Component/movie-list/movie-list.component';
import { MovieDetailComponent } from './Component/movie-detail/movie-detail.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  // used to register Component, Directive, Pine
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SearchFilter,
    MovieListComponent,
    MovieDetailComponent,
    HomePageComponent
  ],
  // used to register module
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    NgCircleProgressModule.forRoot({
      backgroundColor: '#000',
      radius: 60,
      maxPercent: 100,
      unitsColor: '#fff',
      outerStrokeWidth: 5,
      outerStrokeColor: '#FFFFFF',
      innerStrokeColor: '#FFFFFF',
      titleColor: '#fff',
      subtitleColor: '#fff',
      showSubtitle: false,
      showInnerStroke: false,
      startFromZero: false
    })
  ],
  // used to register Services
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  // Used to chnage entry point of application
  bootstrap: [AppComponent]
})
export class AppModule { }
