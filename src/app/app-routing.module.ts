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

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'home/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'home/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'home/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'home/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'home/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'explore/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'explore/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'explore/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'explore/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'explore/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'news/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'news/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'news/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'news/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'news/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'about/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'about/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'about/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'about/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'contact/home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'contact/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'contact/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'contact/contact', redirectTo: '/contact', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
    { path: 'admUsers', component: AdminUsersComponent },
    { path: 'admNews', component: AdminNewsComponent },
    { path: 'dashboard/dashboard', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'dashboard/admUsers', redirectTo: '/admUsers',pathMatch: 'full' },
    { path: 'dashboard/admNews', redirectTo: '/admNews',pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}