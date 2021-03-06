import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import { AboutComponent } from "./about/about.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ExploreComponent } from "./explore/explore.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { AdminNewsComponent } from "./admin-news/admin-news.component";
import { ProfileComponent } from "./profile/profile.component";
import { ChartsComponent } from './charts/charts.component'; 
import { AdminSessionsComponent } from "./admin-sessions/admin-sessions.component";
import { AdminCountrySessionsComponent } from "./admin-country-sessions/admin-country-sessions.component";
import { AdminReportComponent } from "./admin-report/admin-report.component";


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'profile', component: ProfileComponent },

    { path: 'home/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'home/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'home/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'home/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'home/profile', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'home/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'explore/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'explore/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'explore/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'explore/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'explore/profile', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'explore/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'news/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'news/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'news/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'news/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'news/profile', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'news/news', redirectTo: '/news', pathMatch: 'full' },
    
    { path: 'about/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'about/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'about/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'about/profile', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'about/about', redirectTo: '/about', pathMatch: 'full' },

    { path: 'contact/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'contact/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'contact/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'contact/profile', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'contact/contact', redirectTo: '/contact', pathMatch: 'full' },

    { path: 'profile/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'profile/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'profile/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'profile/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'profile/profile', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'profile/contact', redirectTo: '/contact', pathMatch: 'full' },
	
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admUsers', component: AdminUsersComponent },
    { path: 'admNews', component: AdminNewsComponent },
    { path: 'admSes', component: AdminSessionsComponent },
    { path: 'admCoSes', component: AdminCountrySessionsComponent },
    { path: 'admRep', component: AdminReportComponent },
	{ path: 'charts', component: ChartsComponent },
    

    { path: 'dashboard/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'dashboard/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'dashboard/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'dashboard/admSes', redirectTo: '/admSes',pathMatch: 'full' },
	{ path: 'dashboard/charts', redirectTo: '/charts',pathMatch: 'full' },
    { path: 'dashboard/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'dashboard/admRep', redirectTo: '/admRep',pathMatch: 'full' },
	
    { path: 'admUsers/charts', redirectTo: '/charts',pathMatch: 'full' },
	{ path: 'admUsers/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'admUsers/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'admUsers/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'admUsers/admSes', redirectTo: '/admSes',pathMatch: 'full' },
    { path: 'admUsers/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'admUsers/admRep', redirectTo: '/admRep',pathMatch: 'full' },
	
    { path: 'admNews/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'admNews/charts', redirectTo: '/charts',pathMatch: 'full' },
	{ path: 'admNews/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'admNews/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'admNews/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'admNews/admSes', redirectTo: '/admSes',pathMatch: 'full' },
    { path: 'admNews/admRep', redirectTo: '/admRep',pathMatch: 'full' },
    
    { path: 'charts/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'charts/charts', redirectTo: '/charts',pathMatch: 'full' },
	{ path: 'charts/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'charts/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'charts/admSes', redirectTo: '/admSes',pathMatch: 'full' },
    { path: 'charts/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'charts/admRep', redirectTo: '/admRep',pathMatch: 'full' },
    
    { path: 'admSes/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'admSes/charts', redirectTo: '/charts',pathMatch: 'full' },
    { path: 'admSes/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'admSes/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'admSes/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'admSes/admSes', redirectTo: '/admSes',pathMatch: 'full' },
    { path: 'admSes/admRep', redirectTo: '/admRep',pathMatch: 'full' },

    { path: 'admCoSes/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'admCoSes/charts', redirectTo: '/charts',pathMatch: 'full' },
    { path: 'admCoSes/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'admCoSes/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'admCoSes/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'admCoSes/admSes', redirectTo: '/admSes',pathMatch: 'full' },
    { path: 'admCoSes/admRep', redirectTo: '/admRep',pathMatch: 'full' },

    { path: 'admRep/admCoSes', redirectTo: '/admCoSes',pathMatch: 'full' },
    { path: 'admRep/charts', redirectTo: '/charts',pathMatch: 'full' },
    { path: 'admRep/admNews', redirectTo: '/admNews',pathMatch: 'full' },
    { path: 'admRep/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'admRep/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'admRep/admSes', redirectTo: '/admSes',pathMatch: 'full' },
    { path: 'admRep/admRep', redirectTo: '/admRep',pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}