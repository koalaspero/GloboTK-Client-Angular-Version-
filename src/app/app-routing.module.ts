import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import { AboutComponent } from "./about/about.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ExploreComponent } from "./explore/explore.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'explore/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'explore/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'explore/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'news/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'news/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'news/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'news/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'about/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'about/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'about/contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'about/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'contact/news', redirectTo: '/news', pathMatch: 'full' },
    { path: 'contact/about', redirectTo: '/about', pathMatch: 'full' },
    { path: 'contact/explore', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'contact/contact', redirectTo: '/contact', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}