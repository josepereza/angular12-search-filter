import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchPipeComponent } from './components/search-pipe/search-pipe.component';

const routes: Routes = [
  {path:'searchFilter',component:SearchFilterComponent},
  {path:'searchPipe', component:SearchPipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
