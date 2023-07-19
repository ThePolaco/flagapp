import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact/contact-page.component';
import { CountriesModule } from './countries/countries.module';

// es un modulo de enrutamientos

const routes: Routes = [
    {
        path:'home',
        component: HomePageComponent
    },
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'contact',
        component: ContactPageComponent
    },
    {
        path:'countries', // de esta forma definimos lazyLoad de nuestra pagina
        loadChildren: () => import('./countries/countries.module').then(m =>m.CountriesModule)
    },
    {
        path: '**', // si la ruta otra de las que estan definidas arriba siempre redirigira a la home
        redirectTo: 'by-capital',
    },
    {
        path: '', // si la ruta otra de las que estan definidas arriba siempre redirigira a la home
        redirectTo: 'by-capital',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes), // si es el router principal de la aplicacion es necesario poner for root
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
