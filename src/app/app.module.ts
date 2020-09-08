import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CheckboxCupComponent } from './checkbox-cup/checkbox-cup.component';
import { CodePageComponent } from './code-page/code-page.component';
import { ArtListComponent } from './art/art-list/art-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { BlogListComponent } from './blog/bloglist/bloglist.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    CheckboxCupComponent,
    CodePageComponent,
    ArtListComponent,
    BlogListComponent,
    BlogdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //material
    MatCardModule

  ],
  providers: [
    { provide: "BASE_API_URL", useValue: "localhost:8080" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
