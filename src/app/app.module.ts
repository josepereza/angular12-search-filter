import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchPipeComponent } from './components/search-pipe/search-pipe.component';
import { FilterPipeModule } from 'ng2-nested-search';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchCustomComponent } from './components/search-custom/search-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    SearchPipeComponent,
    SearchFilterPipe,
    NavbarComponent,
    SearchCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPipeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
