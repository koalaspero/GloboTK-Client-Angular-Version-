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
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';


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
import { CreateUserComponent } from './create-user/create-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort';
import { ProfileComponent } from './profile/profile.component'; 
import { ChartsComponent } from './charts/charts.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { AdminSessionsComponent } from './admin-sessions/admin-sessions.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AdminCountrySessionsComponent } from './admin-country-sessions/admin-country-sessions.component';
import { EditCountrySessionComponent } from './edit-country-session/edit-country-session.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { ReportFormComponent } from './admin-report/report-form/report-form.component'; 

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
    AdminUsersComponent,
    CreateUserComponent,
    ProfileComponent,
    ChartsComponent,
    EditNewsComponent,
    AdminSessionsComponent,
    EditSessionComponent,
    AdminCountrySessionsComponent,
    EditCountrySessionComponent,
    AdminReportComponent,
    ReportFormComponent
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
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
