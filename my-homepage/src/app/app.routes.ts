import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        title: "Home Component",
        component: HomeComponent 
    },
    {
        path: 'about',
        title:'About Component',
         component: AboutComponent
        },
    {path: "**", component: PageNotFoundComponent}
];
