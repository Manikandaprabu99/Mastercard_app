import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.services';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    DetailsComponent,
    LoginComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HomePageComponent, LoginComponent,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
