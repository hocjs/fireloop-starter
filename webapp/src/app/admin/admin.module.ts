import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { UiModule } from '../ui/ui.module';
import { SDKBrowserModule } from '../shared/sdk/index';

import { UserModule } from './users/user.module';
import { RoleModule } from './roles/role.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
    UserModule,
    RoleModule,
    SDKBrowserModule,
    AdminRoutingModule
  ],
  exports: [

  ],
  providers: [

  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
})

export class AdminModule { }
