import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/users/home/home.component';
import { DetailsComponent } from './components/users/details/details.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersTemplateComponent } from './components/templates/users-template/users-template.component';
import { AdminTemplateComponent } from './components/templates/admin-template/admin-template.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { UnauthorizedComponent } from './components/errors/unauthorized/unauthorized.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,MatSelectModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule,
MatProgressBarModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DetailsComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    UsersTemplateComponent,
    AdminTemplateComponent,
    NotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatListModule, 
    MatToolbarModule,
    MatSelectModule, 
    MatFormFieldModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatProgressBarModule, 
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
