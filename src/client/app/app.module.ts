import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';
import { TabsComponent } from './tabs/tabs.component';
import { FilterPipe } from './search/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    StatsComponent,
    TabsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
