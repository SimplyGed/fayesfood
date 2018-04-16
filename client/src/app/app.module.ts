import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';
import { TabsComponent } from './tabs/tabs.component';
import { FilterPipe } from './search/filter.pipe';
import { LoginComponent } from './login/login.component';
import { HttpClient } from 'selenium-webdriver/http';
import { UserService } from './users/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    StatsComponent,
    TabsComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/auth/']
      }
    })
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getToken() {
  return localStorage.getItem('id_token');
}
