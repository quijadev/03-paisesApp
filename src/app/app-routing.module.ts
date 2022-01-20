import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full' //esto tiene el home para que el path sea exactamente '', o sea vacio, sin nada despues. como que sin eso cualquier parametro cuenta por empezar con un string vacio
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path:'capital',
        component: PorCapitalComponent
    },
    {
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'**', //esto es cualquier otro path, como un catchAll
        redirectTo:''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //forRoot es para el padre, forChild para las rutas hijas. 
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}