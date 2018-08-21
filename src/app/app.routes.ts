import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';
import { RegisterComponent } from './views/register/register.component';

const appRoutes: Routes = [
    {
        path: '', 
        component: RegisterComponent
       },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        //canActivate: [AuthGuard],
        component: DashboardComponent
    },
];

export const AppRoutes = RouterModule.forRoot(appRoutes);