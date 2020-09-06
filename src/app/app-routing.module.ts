import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArtListComponent } from './art/art-list/art-list.component';
import { CodePageComponent } from './code-page/code-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'art', component: ArtListComponent },
  { path: 'code', component: CodePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
