import { AuthGuard } from './guards/auth.guard';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ScreensComponent } from './screens/screens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { RulesComponent } from './rules/rules.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'rules', component: RulesComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'screens', component: ScreensComponent, canActivate: [AuthGuard] },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ClientsComponent, RulesComponent];
