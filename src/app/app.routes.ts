import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404Page/error404Page.component';
import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren: ()=>import('./auth/auth.module').then( m=>m.AuthModule)
    },
    {
        path:'heroes',
        loadChildren: ()=>import('./heros/heros.module').then( m=>m.HerosModule),
        canActivate:[canActivateGuard],
        canMatch:[canMatchGuard]
    },
    {
        path:'404',
        component: Error404PageComponent
    },
    {
        path:'',
        redirectTo:'heroes',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'404',
 
    }
];
