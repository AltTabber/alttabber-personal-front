import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogListComponent } from './blog/bloglist/bloglist.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'art', component: BlogListComponent },
  { path: 'code', component: BlogListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
