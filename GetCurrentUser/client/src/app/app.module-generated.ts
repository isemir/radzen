/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { CardModule } from '@radzen/angular/dist/card';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { SidebarToggleModule } from '@radzen/angular/dist/sidebar-toggle';
import { LabelModule } from '@radzen/angular/dist/label';
import { ProfileMenuModule } from '@radzen/angular/dist/profilemenu';
import { GravatarModule } from '@radzen/angular/dist/gravatar';
import { SidebarModule } from '@radzen/angular/dist/sidebar';
import { PanelMenuModule } from '@radzen/angular/dist/panelmenu';
import { FooterModule } from '@radzen/angular/dist/footer';
import { ContentModule } from '@radzen/angular/dist/content';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { GridModule } from '@radzen/angular/dist/grid';
import { FormModule } from '@radzen/angular/dist/form';
import { ButtonModule } from '@radzen/angular/dist/button';
import { LoginModule } from '@radzen/angular/dist/login';
import { HtmlModule } from '@radzen/angular/dist/html';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerCustomerDemosComponent } from './customer-customer-demos/customer-customer-demos.component';
import { AddCustomerCustomerDemoComponent } from './add-customer-customer-demo/add-customer-customer-demo.component';
import { EditCustomerCustomerDemoComponent } from './edit-customer-customer-demo/edit-customer-customer-demo.component';
import { CustomerDemographicsComponent } from './customer-demographics/customer-demographics.component';
import { AddCustomerDemographicComponent } from './add-customer-demographic/add-customer-demographic.component';
import { EditCustomerDemographicComponent } from './edit-customer-demographic/edit-customer-demographic.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeTerritoriesComponent } from './employee-territories/employee-territories.component';
import { AddEmployeeTerritoryComponent } from './add-employee-territory/add-employee-territory.component';
import { EditEmployeeTerritoryComponent } from './edit-employee-territory/edit-employee-territory.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderDetailComponent } from './add-order-detail/add-order-detail.component';
import { EditOrderDetailComponent } from './edit-order-detail/edit-order-detail.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegionsComponent } from './regions/regions.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { EditShipperComponent } from './edit-shipper/edit-shipper.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { TerritoriesComponent } from './territories/territories.component';
import { AddTerritoryComponent } from './add-territory/add-territory.component';
import { EditTerritoryComponent } from './edit-territory/edit-territory.component';
import { LoginComponent } from './login/login.component';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { ApplicationRolesComponent } from './application-roles/application-roles.component';
import { RegisterApplicationUserComponent } from './register-application-user/register-application-user.component';
import { AddApplicationRoleComponent } from './add-application-role/add-application-role.component';
import { AddApplicationUserComponent } from './add-application-user/add-application-user.component';
import { EditApplicationUserComponent } from './edit-application-user/edit-application-user.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { NorthwindService } from './northwind.service';
import { SecurityService, UserService } from './security.service';
import { SecurityInterceptor } from './security.interceptor';
import { AuthGuard } from './auth.guard';

export const PageDeclarations = [
  CategoriesComponent,
  AddCategoryComponent,
  EditCategoryComponent,
  CustomersComponent,
  AddCustomerComponent,
  EditCustomerComponent,
  CustomerCustomerDemosComponent,
  AddCustomerCustomerDemoComponent,
  EditCustomerCustomerDemoComponent,
  CustomerDemographicsComponent,
  AddCustomerDemographicComponent,
  EditCustomerDemographicComponent,
  EmployeesComponent,
  AddEmployeeComponent,
  EditEmployeeComponent,
  EmployeeTerritoriesComponent,
  AddEmployeeTerritoryComponent,
  EditEmployeeTerritoryComponent,
  OrdersComponent,
  AddOrderComponent,
  EditOrderComponent,
  OrderDetailsComponent,
  AddOrderDetailComponent,
  EditOrderDetailComponent,
  ProductsComponent,
  AddProductComponent,
  EditProductComponent,
  RegionsComponent,
  AddRegionComponent,
  EditRegionComponent,
  ShippersComponent,
  AddShipperComponent,
  EditShipperComponent,
  SuppliersComponent,
  AddSupplierComponent,
  EditSupplierComponent,
  TerritoriesComponent,
  AddTerritoryComponent,
  EditTerritoryComponent,
  LoginComponent,
  ApplicationUsersComponent,
  ApplicationRolesComponent,
  RegisterApplicationUserComponent,
  AddApplicationRoleComponent,
  AddApplicationUserComponent,
  EditApplicationUserComponent,
  ProfileComponent,
  UnauthorizedComponent,
];

export const LayoutDeclarations = [
  LoginLayoutComponent,
  MainLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  NorthwindService,
  UserService,
  SecurityService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  },
  AuthGuard,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  CardModule,
  ContentContainerModule,
  HeaderModule,
  SidebarToggleModule,
  LabelModule,
  ProfileMenuModule,
  GravatarModule,
  SidebarModule,
  PanelMenuModule,
  FooterModule,
  ContentModule,
  HeadingModule,
  GridModule,
  FormModule,
  ButtonModule,
  LoginModule,
  HtmlModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
