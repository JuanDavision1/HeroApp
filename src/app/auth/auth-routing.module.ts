import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterComponent } from './pages/Register/Register.component';

const routes: Routes = [
    {
        path:'',
        component:LayoutPageComponent,
        children:[
            {path:'login',component:LoginPageComponent},
            {path:'New_account',component:RegisterComponent},
            {path:'**',redirectTo:'login'}
        ]
    },
    
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
 
})
export class AuthRoutingModule { }
