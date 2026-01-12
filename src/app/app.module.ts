import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersdashComponent } from './usersdash/usersdash.component';
import { ProductsdashComponent } from './productsdash/productsdash.component';
import { HomedashComponent } from './homedash/homedash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { RoutersComponent } from './routers/routers.component';
import { ApproutingModule } from './services/app.routing.module';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersdashComponent,
    ProductsdashComponent,
    HomedashComponent,
    PostsComponent
    //RoutersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApproutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
