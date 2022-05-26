import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ModalComponent } from './components/template/modal/modal.component';
import { DialogComponent } from './components/template/dialog/dialog.component'
import { ContentComponent } from './content/content.component';
import { BreadcrumbComponent } from './components/template/breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { RulesComponent } from './rules/rules.component';
import { ScreensComponent } from './screens/screens.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from './material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    MenuComponent,
    UsersComponent,
    ProductsComponent,
    ClientsComponent,
    RulesComponent,
    ScreensComponent,
    DashboardComponent,
    ContentComponent,
    DialogComponent,
    ModalComponent,
    routingComponents,
    ConfigurationComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
