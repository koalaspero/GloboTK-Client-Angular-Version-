import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';



import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    NewsComponent,
    AboutComponent,
    HomeComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminNewsComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
