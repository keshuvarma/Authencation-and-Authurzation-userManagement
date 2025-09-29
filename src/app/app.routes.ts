import { Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth-guard.service';

 export const routes: Routes = [ 
    {path:'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)},
    {path:'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)},
    {path:'admin', loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent), canActivate: [AdminAuthGuard]},
    {path:'no-access', loadComponent: () => import('./no-access/no-access.component').then(c => c.NoAccessComponent)},
    {path:'**', redirectTo:'login' }
   ];