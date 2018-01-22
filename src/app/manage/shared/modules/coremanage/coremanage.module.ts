import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { MaterialModule } from './../../../../material.module';


// Core Manage Module
import { DashComponent } from './../../../dash/dash.component';
import { VisitorsComponent } from './../../../visitors/visitors.component';
import { HostsComponent } from './../../../hosts/hosts.component';
import { SecuritiesComponent } from './../../../securities/securities.component';

// Core Visitor Module
import { EditDialogComponent } from './../../../visitors/edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from './../../../visitors/confirm-dialog/confirm-dialog.component';

// Core Manage Router
import { CoreManageRoutingModule } from './coremanage-routing.module';
import { VisitorServices } from '../../../visitors/shared/visitors.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CoreManageRoutingModule,
    MaterializeModule,
    MaterialModule,
  ],
  declarations: [
    DashComponent,
    VisitorsComponent,
    HostsComponent,
    SecuritiesComponent,
    EditDialogComponent,
    ConfirmDialogComponent,
  ],
  providers: [
    VisitorServices
  ],
  entryComponents: [
    EditDialogComponent,
    ConfirmDialogComponent
  ]
})
export class CoreManageModule { }

